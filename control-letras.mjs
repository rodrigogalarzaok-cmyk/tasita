/* ═══════════════════════════════════════════════════════════════════
   CONTROL DE LETRAS — para correr cuando haya una licitación nueva

   Qué hace: compara lo que muestra Tasita contra otras fuentes y avisa
   si algo no cierra. Sirve para no publicar nunca un rendimiento
   inventado, que es el único error grave que esta calculadora puede
   cometer: la gente decide con esto dónde pone su plata.

   Cómo se corre:   node control-letras.mjs
   ═══════════════════════════════════════════════════════════════════ */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const HISTORIAL = new URL('./historial-letras.json', import.meta.url);
const AD    = 'https://api.argentinadatos.com/v1/finanzas/letras';
const VIVO  = ['https://data912.com/live/arg_notes', 'https://data912.com/live/arg_bonds'];
const OTRO  = 'https://www.acuantoesta.com.ar/api/lecaps-prices';

/* Pagos al vencimiento ya verificados uno por uno contra el flujo de
   fondos de Rava (rava.com/perfil/TICKER). Son fijos desde la emisión:
   verificados una vez, valen para siempre. */
const VERIFICADOS = {
  S30O6: 135.2783, S13N6: 109.6512, S30N6: 129.8875, T15E7: 161.1026,
  S29E7: 111.6857, T30A7: 157.3422, T31Y7: 152.1864, T30J7: 156.0342,
};

const esLetra = t => /^S\d{2}[A-Z]\d$/.test(t) || /^T\d{2}[A-Z]\d$/.test(t);
const pct = n => (n * 100).toFixed(2).replace('.', ',') + '%';

const avisos = [];
const avisar = (txt) => { avisos.push(txt); };

const datos  = await (await fetch(AD)).json();
const vivos  = {};
for (const u of VIVO) (await (await fetch(u)).json()).forEach(t => { if (t?.c > 0) vivos[t.symbol] = t.c; });

/* La otra fuente rechaza los pedidos sin navegador declarado */
let otros = {};
try {
  otros = await (await fetch(OTRO, { headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Accept': 'application/json' } })).json();
} catch { console.log('(no se pudo consultar la otra fuente de precios)\n'); }

/* Foto de la corrida anterior, para ver si los números se movieron */
let previo = null;
if (existsSync(HISTORIAL)) {
  try { const h = JSON.parse(readFileSync(HISTORIAL, 'utf8')); previo = h[h.length - 1] || null; } catch {}
}

console.log('Datos del', datos.fechaActualizacion);
console.log('Corrido el', new Date().toLocaleString('es-AR'));
if (previo) console.log('Comparando contra la corrida del', new Date(previo.cuando).toLocaleString('es-AR'));
console.log('');
console.log('ticker  vence       dias   precio   de donde   gana hoy   antes     cambio   vs otra fuente');
console.log('─'.repeat(92));

const tems = [];
const filas = [];

for (const l of datos.letras) {
  if (!esLetra(l.ticker) || l.diasAlVencimiento <= 0) continue;
  const dias   = l.diasAlVencimiento;
  const porTEA = l.precioArs * Math.pow(1 + l.teaPorcentaje / 100, dias / 365);
  const porTNA = l.precioArs * (1 + (l.tnaPorcentaje / 100) * dias / 365);
  const difTasas = Math.abs(porTEA - porTNA) / porTEA;

  const precio = vivos[l.ticker] || l.precioArs;
  const tem    = Math.pow(porTEA / precio, 30 / dias) - 1;
  tems.push(tem);

  // ¿el precio del momento coincide con el de la otra fuente?
  const pOtro = otros[l.ticker]?.price;
  const difPrecio = pOtro ? Math.abs(precio - pOtro) / pOtro : null;

  // ¿el pago coincide con el que ya verificamos contra Rava?
  const yaVerificado = VERIFICADOS[l.ticker];
  if (yaVerificado) {
    const d = Math.abs(porTEA - yaVerificado) / yaVerificado;
    if (d > 0.002) avisar(`${l.ticker}: el pago al vencimiento cambió (${yaVerificado.toFixed(4)} → ${porTEA.toFixed(4)}). El pago NO puede cambiar: revisar.`);
  } else {
    avisar(`${l.ticker}: LETRA NUEVA, su pago (${porTEA.toFixed(4)}) todavía no se verificó. Abrir rava.com/perfil/${l.ticker}, mirar el flujo de fondos y sumarla a VERIFICADOS y a LETRAS_RESPALDO.`);
  }

  if (difTasas > 0.01) avisar(`${l.ticker}: la tasa efectiva y la nominal no coinciden (${pct(difTasas)} de diferencia). La calculadora la descarta sola.`);
  if (difPrecio !== null && difPrecio > 0.02) avisar(`${l.ticker}: el precio difiere ${pct(difPrecio)} de la otra fuente (${precio} vs ${pOtro}).`);

  filas.push({ t: l.ticker, vence: l.fechaVencimiento, dias, pago: porTEA, difTasas,
               precio, enVivo: !!vivos[l.ticker], difPrecio,
               gana: porTEA / precio - 1, tem });
}

/* La ganancia que daría usando el precio de la otra fuente: si los dos
   precios son el mismo, las dos ganancias tienen que ser la misma. */
for (const f of filas) {
  const pOtro = otros[f.t]?.price;
  const ganaOtro = pOtro ? f.pago / pOtro - 1 : null;
  const antes = previo?.letras?.[f.t]?.gana;
  const cambio = antes != null ? (f.gana - antes) * 100 : null;
  console.log(
    f.t.padEnd(7), f.vence, String(f.dias).padStart(5),
    f.precio.toFixed(2).padStart(8),
    (f.enVivo ? '  mercado' : '   cierre').padStart(10),
    ('+' + pct(f.gana)).padStart(10),
    (antes != null ? '+' + pct(antes) : '    -').padStart(9),
    (cambio != null ? (cambio >= 0 ? '+' : '') + cambio.toFixed(2) + ' pts' : '    -').padStart(10),
    (ganaOtro === null ? '      -' : (Math.abs(ganaOtro - f.gana) < 0.0001 ? '   igual' : '  da ' + pct(ganaOtro))).padStart(12));
}

/* Avisos propios de esta comparación */
const sinVivo = filas.filter(f => !f.enVivo).map(f => f.t);
if (sinVivo.length)
  avisar(`sin precio de mercado (se usó el cierre anterior): ${sinVivo.join(', ')}. Con el mercado abierto esto debería estar vacío.`);

if (previo) {
  const quietas = filas.filter(f => {
    const antes = previo.letras?.[f.t]?.gana;
    return antes != null && Math.abs(f.gana - antes) < 0.00005;
  });
  const mismoDia = previo.actualizado === datos.fechaActualizacion;
  if (quietas.length === filas.length && !mismoDia)
    avisar('NINGUNA ganancia se movió desde la corrida anterior, y los datos son de otro día. Revisar: el precio no se está actualizando.');
}

/* El control que atrapa la tasa inventada: ninguna debería rendir por mes
   mucho más que las demás. Es el mismo criterio que usa la calculadora. */
tems.sort((a, b) => a - b);
const mediana = tems[Math.floor(tems.length / 2)];
console.log('\nrinde por mes: entre', pct(tems[0]), 'y', pct(tems[tems.length - 1]), '· mediana', pct(mediana));
filas.forEach(f => {
  if (f.tem > mediana * 1.4 || f.tem < mediana * 0.5)
    avisar(`${f.t}: rinde ${pct(f.tem)} por mes contra una mediana de ${pct(mediana)}. Se sale de la banda: la calculadora NO la muestra.`);
});

/* Se guarda la foto para poder comparar en la próxima corrida */
try {
  const h = existsSync(HISTORIAL) ? JSON.parse(readFileSync(HISTORIAL, 'utf8')) : [];
  h.push({ cuando: new Date().toISOString(), actualizado: datos.fechaActualizacion,
           letras: Object.fromEntries(filas.map(f => [f.t, { precio: f.precio, gana: f.gana, enVivo: f.enVivo }])) });
  writeFileSync(HISTORIAL, JSON.stringify(h.slice(-60), null, 1));
} catch (e) { console.log('(no se pudo guardar el historial:', e.message + ')'); }

console.log('\n' + '═'.repeat(78));
if (!avisos.length) {
  console.log('Todo en orden: los números cierran y coinciden con las otras fuentes.');
} else {
  console.log('PARA REVISAR:\n');
  avisos.forEach((a, i) => console.log(' ' + (i + 1) + '. ' + a));
}
