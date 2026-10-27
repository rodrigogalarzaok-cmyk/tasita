/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR DATOS — deja las tasas escritas adentro del index.html

   QUÉ PROBLEMA RESUELVE
   Las listas de Tasita (billeteras, plazos fijos, letras, dólar, brokers)
   las dibuja JavaScript después de abrir la página. Un buscador que lee
   el archivo sin ejecutar nada (Google, al evaluar AdSense) ve listas
   vacías o "Cargando…". Este programa hace lo que haría una persona: abre
   la página, deja que ella misma dibuje todo, y copia el resultado adentro
   del archivo, entre unas marcas <!--DATOS:nombre--> … <!--/DATOS:nombre-->.

   Como usa la propia página para dibujar, lo que lee Google es EXACTAMENTE
   lo que ve una persona: logos, orden, colores. No hay una segunda copia de
   la lógica que pueda desfasarse.

   LA REGLA DE ORO: NUNCA PUBLICAR VACÍO NI ROTO
   Cada sección se valida por separado. Si una fuente de datos falla, o
   devuelve algo raro (pocas filas, NaN, la fuente no contestó y la página
   usó sus datos viejos de respaldo), esa sección se DESCARTA y se mantiene
   la última versión buena, guardada en datos-tasita.json. Una fuente caída
   no tumba a las demás.

   SOLO ESCRIBE SI CAMBIÓ ALGO
   Si los datos son los mismos, no toca ningún archivo: así el repositorio
   no se llena de commits iguales.

   CÓMO SE USA
     node construir-datos.mjs                 (escribe index.html y la memoria)
     node construir-datos.mjs --probar        (muestra qué haría, sin escribir)
     SIMULAR_FALLA=comparadolar node construir-datos.mjs --probar
                                              (finge que esa fuente se cayó)
   ═══════════════════════════════════════════════════════════════════ */

process.env.TZ = process.env.TZ || 'America/Argentina/Buenos_Aires';  // "hoy" = hoy en Argentina

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { JSDOM, VirtualConsole } from 'jsdom';

const RAIZ     = path.dirname(fileURLToPath(import.meta.url));
const HOME     = path.join(RAIZ, 'index.html');
const MEMORIA  = path.join(RAIZ, 'datos-tasita.json');
const SOLO_PROBAR = process.argv.includes('--probar');
const SIMULAR_FALLA = process.env.SIMULAR_FALLA ? new RegExp(process.env.SIMULAR_FALLA) : null;

/* Qué se copia, cuántas filas como mínimo tiene que traer para darlo por
   bueno, y qué fuente tiene que haber contestado de verdad.

   "necesita" importa porque la página, si una fuente falla, no avisa: sigue
   mostrando sus datos viejos de respaldo y la lista se ve completa. Sin este
   chequeo, un dato de mayo se publicaría como si fuera de hoy. */
const SECCIONES = [
  { id: 'billeteras-list',     filas: '.wallet-item', min: 15 },
  { id: 'billeteras-usd-list', filas: '.wallet-item', min: 5 },
  { id: 'plazos-list',         filas: '.wallet-item', min: 15, necesita: /api\.argentinadatos\.com\/v1\/finanzas\/tasas\/plazoFijo$/ },
  { id: 'pfuva-list',          filas: '.wallet-item', min: 1,  accion: 'renderPFUVA()', necesita: /plazoFijoPrecancelable/ },
  { id: 'brokers-list',        filas: '.broker-item', min: 5,  accion: 'renderBrokers()' },
  { id: 'cd-list',             filas: '.wallet-item', min: 10, accion: 'loadCD()', necesita: /api\.comparadolar\.ar\/usd/ },
  { id: 'lec-list',            filas: '.lec-item',    min: 3,  accion: 'cargarLetras()', necesita: /api\.argentinadatos\.com\/v1\/finanzas\/letras/ },
  /* El panel de arriba de Letras (monto, ganancia, TNA, días, total): sale de
     lo mismo que la lista, así que se valida junto con ella. */
  { id: 'lec-panel',           selector: '.lec-fijo', depende: 'lec-list', noVaciar: true },
];

const MALAS = /NaN|undefined|Infinity|\[object/;
const MARCA = id => [`<!--DATOS:${id}-->`, `<!--/DATOS:${id}-->`];
const SIN_MARCAS = /<!--\/?DATOS:[^>]*-->/g;
const dormir = ms => new Promise(r => setTimeout(r, ms));

/* ─── 1. Abrir la página y dejar que se dibuje sola ─────────────────── */
async function capturar(htmlOriginal) {
  /* Se parte de la página SIN lo que se había copiado antes, para que el
     navegador simulado arranque en frío, como lo haría una persona. */
  let html = htmlOriginal;
  for (const s of SECCIONES) {
    if (s.noVaciar) continue;       // el panel de Letras tiene el campo del monto, que el JavaScript de la página necesita
    const [a, b] = MARCA(s.id);
    const i = html.indexOf(a), j = html.indexOf(b);
    if (i !== -1 && j > i) html = html.slice(0, i + a.length) + html.slice(j);
  }

  const pedidos = [];          // qué fuentes se consultaron y si contestaron
  const consola = new VirtualConsole();
  const errores = [];
  consola.on('jsdomError', e => errores.push(e.detail?.message || e.message));

  const dom = new JSDOM(html, {
    url: 'https://tasita.com.ar/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: consola,
    beforeParse(w) {
      w.fetch = async (url, opciones = {}) => {
        const u = String(url);
        if (SIMULAR_FALLA && SIMULAR_FALLA.test(u)) { pedidos.push({ u, ok: false, motivo: 'falla simulada' }); throw new Error('falla simulada'); }
        try {
          const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TasitaBot)' }, signal: AbortSignal.timeout(20000) });
          pedidos.push({ u, ok: r.ok, status: r.status });
          return r;
        } catch (e) { pedidos.push({ u, ok: false, motivo: e.message }); throw e; }
      };
      // cosas del navegador que jsdom no trae y la página usa
      w.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.IntersectionObserver ??= class { observe() {} unobserve() {} disconnect() {} };
      w.ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
      w.scrollTo = () => {};
    },
  });
  const w = dom.window;

  await dormir(6000);                                   // arranque de la página (billeteras, plazos, dólar)
  for (const s of SECCIONES) {                          // lo que la página haría al tocar cada sección
    if (!s.accion) continue;
    try { await w.eval(s.accion); } catch (e) { errores.push(`${s.accion}: ${e.message}`); }
  }
  await dormir(9000);

  const doc = w.document;
  const resultado = {};
  for (const s of SECCIONES) {
    const el = s.selector ? doc.querySelector(s.selector) : doc.getElementById(s.id);
    resultado[s.id] = el ? el.innerHTML.replace(SIN_MARCAS, '').trim() : null;
  }
  const contar = s => { const el = doc.getElementById(s.id); return el && s.filas ? el.querySelectorAll(s.filas).length : null; };
  const filas = Object.fromEntries(SECCIONES.filter(s => s.filas).map(s => [s.id, contar(s)]));
  const panel = {
    ganancia: doc.getElementById('lec-gain-ars')?.textContent.trim(),
    total: doc.getElementById('lec-total')?.textContent.trim(),
  };
  w.close();
  return { html: resultado, filas, pedidos, panel, errores };
}

/* ─── 2. Decidir si cada sección está sana ──────────────────────────── */
function validar(s, cap, veredictos) {
  if (s.depende) {                                       // sigue la suerte de la lista de la que sale
    const base = veredictos[s.depende];
    if (!base.ok) return { ok: false, motivo: `depende de ${s.depende}, que se descartó` };
    const p = cap.panel;
    if (!p.ganancia || p.ganancia === '—' || !p.total || p.total === '—') return { ok: false, motivo: 'el panel quedó sin calcular' };
  }
  const html = cap.html[s.id];
  if (!html) return { ok: false, motivo: 'la página no generó nada' };
  if (MALAS.test(html)) return { ok: false, motivo: 'trae NaN / undefined / Infinity' };
  if (s.min) {
    const n = cap.filas[s.id] ?? 0;
    if (n < s.min) return { ok: false, motivo: `solo ${n} filas (mínimo ${s.min})` };
  }
  if (s.necesita) {
    const llamadas = cap.pedidos.filter(p => s.necesita.test(p.u));
    if (!llamadas.length) return { ok: false, motivo: 'no se consultó la fuente' };
    if (!llamadas.some(p => p.ok)) return { ok: false, motivo: 'la fuente no contestó (' + (llamadas[0].motivo || 'HTTP ' + llamadas[0].status) + ')' };
  }
  return { ok: true };
}

/* ─── 3. Programa principal ─────────────────────────────────────────── */
const original = readFileSync(HOME, 'utf8');
for (const s of SECCIONES) {
  const [a, b] = MARCA(s.id);
  const i = original.indexOf(a), j = original.indexOf(b);
  if (i === -1 || j < i) { console.error(`Falta la marca ${a} en index.html. No se hace nada.`); process.exit(1); }
}

const memoria = existsSync(MEMORIA) ? JSON.parse(readFileSync(MEMORIA, 'utf8')) : { secciones: {} };
memoria.secciones ??= {};

console.log(`Abriendo la página y dejándola dibujar (${SOLO_PROBAR ? 'modo prueba, no escribe nada' : 'va a escribir si hay cambios'})…\n`);
const cap = await capturar(original);
if (cap.errores.length) console.log('Avisos del navegador simulado:', cap.errores.slice(0, 3).join(' | '), '\n');

const veredictos = {};
let hayDescartes = false, hayCambios = false;
const ahora = new Date().toISOString();

for (const s of SECCIONES) {
  const v = validar(s, cap, veredictos);
  veredictos[s.id] = v;
  const previa = memoria.secciones[s.id];
  const nFilas = cap.filas[s.id];
  const filasTxt = nFilas != null ? `${String(nFilas).padStart(3)} filas` : '         ';

  if (v.ok) {
    const nuevo = cap.html[s.id];
    if (!previa || previa.html !== nuevo) {
      memoria.secciones[s.id] = { html: nuevo, filas: nFilas ?? null, actualizado: ahora };
      hayCambios = true;
      console.log(`  ✔ ${s.id.padEnd(20)} ${filasTxt}  datos nuevos`);
    } else {
      console.log(`  ✔ ${s.id.padEnd(20)} ${filasTxt}  sin cambios`);
    }
  } else {
    hayDescartes = true;
    const conserva = previa ? `se conserva lo último bueno (${previa.actualizado.slice(0, 16).replace('T', ' ')})` : 'no hay versión anterior: queda como estaba';
    console.log(`  ✘ ${s.id.padEnd(20)} ${filasTxt}  DESCARTADA: ${v.motivo} → ${conserva}`);
    console.log(`::warning title=Tasita datos::${s.id} descartada: ${v.motivo}`);
  }
}

/* Armar el index.html nuevo con lo que quedó en memoria (bueno y reciente, o bueno y anterior) */
let nuevoHtml = original;
for (const s of SECCIONES) {
  const guardada = memoria.secciones[s.id];
  if (!guardada) continue;                              // nunca hubo datos buenos: no se toca esa parte
  const [a, b] = MARCA(s.id);
  const i = nuevoHtml.indexOf(a), j = nuevoHtml.indexOf(b);
  nuevoHtml = nuevoHtml.slice(0, i + a.length) + '\n' + guardada.html + '\n' + nuevoHtml.slice(j);
}

/* Red de seguridad: si el archivo resultante cambió de tamaño de forma sospechosa, no se escribe.
   Lo peligroso es que se ACHIQUE (perder contenido). Crecer es normal: la primera vez suma
   ~80 filas con logos. Por eso el tope hacia abajo es chico y hacia arriba es holgado. */
const cambioPct = (nuevoHtml.length - original.length) / original.length * 100;
if (cambioPct < -15 || cambioPct > 100) {
  console.error(`\nEl archivo cambiaría un ${cambioPct.toFixed(0)}% de tamaño. Es sospechoso: no se escribe nada.`);
  process.exit(1);
}

const cambiaHtml = nuevoHtml !== original;
console.log('');
if (!cambiaHtml && !hayCambios) {
  console.log('Sin cambios: no se toca ningún archivo.');
} else if (SOLO_PROBAR) {
  console.log(`Modo prueba: index.html ${cambiaHtml ? 'cambiaría' : 'quedaría igual'}. No se escribió nada.`);
} else {
  if (cambiaHtml) writeFileSync(HOME, nuevoHtml);
  if (hayCambios) writeFileSync(MEMORIA, JSON.stringify(memoria, null, 1) + '\n');
  console.log(`Listo: ${cambiaHtml ? 'index.html actualizado' : 'index.html igual'}${hayCambios ? ', memoria guardada' : ''}.`);
}
if (hayDescartes) console.log('Hubo secciones descartadas: se mantuvo lo último bueno de cada una.');
