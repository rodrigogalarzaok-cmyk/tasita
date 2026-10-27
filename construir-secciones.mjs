/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR SECCIONES — una página propia para cada apartado de Tasita

   Hoy todo vive en una sola dirección. Para Google eso es UNA página. Este
   programa arma una página por apartado (/plazos-fijos/, /letras/, /dolar/…),
   cada una con su título, su descripción, su tabla de datos, un texto
   explicativo y sus preguntas frecuentes.

   LOS DATOS no se buscan acá: salen de datos-tasita.json, la memoria de
   "últimos datos buenos" que mantiene construir-datos.mjs. Así estas páginas
   nunca muestran nada que no haya pasado ya las validaciones.

   Lo corre solo el workflow de GitHub después de construir-datos.mjs, para que
   las tablas de estas páginas se actualicen junto con las de la home. Solo se
   guarda algo si el resultado cambió.

   CÓMO SE USA
     node construir-secciones.mjs               (escribe las carpetas reales)
     node construir-secciones.mjs --borrador    (escribe en _borrador-secciones/, que
                                                 GitHub Pages ignora: sirve para probar)
   ═══════════════════════════════════════════════════════════════════ */

process.env.TZ = process.env.TZ || 'America/Argentina/Buenos_Aires';

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SECCIONES } from './contenido-secciones.mjs';
import { GUIAS } from './contenido-guias.mjs';
import { pagina, faqHtml, faqJsonLd, esc } from './pagina-base.mjs';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
const DESTINO = process.argv.includes('--borrador') ? path.join(RAIZ, '_borrador-secciones') : RAIZ;
const memoria = JSON.parse(readFileSync(path.join(RAIZ, 'datos-tasita.json'), 'utf8')).secciones;

/* Las filas de la página principal traen clics que abren calculadoras y apartados que acá no existen.
   Se sacan: acá son una tabla para leer. También el cartelito "calcular" de los brokers. */
const limpiar = html => html
  .replace(/\sonclick="[^"]*"/g, '')
  .replace(/\stitle="Calcular comisión"/g, '')
  .replace(/<div class="broker-pct-sub">calcular<\/div>/g, '');

function fechaDatos(clave) {
  const m = memoria[clave]; if (!m) return null;
  return new Date(m.actualizado).toLocaleString('es-AR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false }) + ' h';
}

function armar(s) {
  const tabla = s.datos ? memoria[s.datos] : null;
  if (s.datos && !tabla) throw new Error(`No hay datos guardados de "${s.datos}" para ${s.slug}. Corré construir-datos.mjs primero.`);
  const fecha = s.datos ? fechaDatos(s.datos) : null;
  const ruta = `/${s.slug}/`;

  const bloques = (s.bloques || []).map(b =>
    `<h2 class="sp-h2">${b.h2}</h2>\n      <div class="sp-texto">${b.p.map(p => `<p>${p}</p>`).join('\n      ')}</div>`).join('\n      ');

  const guias = (s.guias || []).map(g => GUIAS.find(x => x.slug === g)).filter(Boolean);
  const mas = guias.length
    ? `<h2 class="sp-h2">Seguí leyendo</h2>\n      <div class="sp-mas">${guias.map(g =>
        `<a href="/guias/${g.slug}/">${esc(g.h1)}<small>${esc(g.resumen)}</small></a>`).join('\n        ')}</div>`
    : '';

  const cuerpo = `      <div class="sec-header"><h1 class="sec-title"><span class="sec-emoji">${s.emoji}</span> ${esc(s.h1)}</h1></div>
      <div class="sp-intro">${s.intro.map(p => `<p>${p}</p>`).join('\n      ')}</div>
${tabla ? `      ${fecha ? `<p class="sp-fecha">Datos actualizados el ${fecha}</p>` : ''}
      <div class="${s.contenedor || 'wallet-list'}">${limpiar(tabla.html)}</div>` : ''}
      ${bloques}
      ${faqHtml(s.faq)}
      ${mas}
      <a class="sp-cta" href="${s.volver || s.home || '/'}">${s.volverTexto || (s.slug === 'letras' ? 'Simular cuánto ganás con tu plata →' : 'Ver todo en Tasita →')}</a>`;

  return pagina({
    titulo: s.titulo, descripcion: s.descripcion, ruta,
    indexar: s.texto === 'final',
    jsonld: [faqJsonLd(s.faq)],
    cuerpo,
  });
}

console.log(DESTINO === RAIZ ? 'Escribiendo las carpetas reales.\n' : 'Modo borrador: _borrador-secciones/ (GitHub Pages lo ignora).\n');
for (const s of SECCIONES) {
  const dir = path.join(DESTINO, s.slug);
  mkdirSync(dir, { recursive: true });
  const html = armar(s);
  writeFileSync(path.join(dir, 'index.html'), html);
  const palabras = html.slice(html.indexOf('<main>'), html.indexOf('</main>')).replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<(div class="(?:wallet-list|lec-list)")[\s\S]*?<\/div>\s*(?=<h2|<p class="sp-fecha"|$)/, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  /${s.slug}/`.padEnd(26) + `${String(memoria[s.datos]?.filas ?? '-').padStart(3)} filas   ~${palabras} palabras   ${s.texto === 'final' ? 'indexable' : 'noindex'}`);
}
console.log(`\n${SECCIONES.length} páginas armadas.`);
