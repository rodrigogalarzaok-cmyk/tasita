/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR SECCIONES — una página propia para cada apartado de Tasita

   Hoy todo vive en una sola dirección. Para Google eso es UNA página. Este
   programa arma una página por apartado (/plazos-fijos/, /letras/, /dolar/…),
   cada una con su título, su descripción, su tabla de datos, un texto
   explicativo y sus preguntas frecuentes.

   LOS DATOS no se buscan acá: salen de datos-tasita.json, la memoria de
   "últimos datos buenos" que mantiene construir-datos.mjs. Así estas páginas
   nunca muestran nada que no haya pasado ya las validaciones.

   ESTADO: BORRADOR. Por pedido de Marc, no se publican hasta tener los textos
   definitivos (Etapa 4). Por eso, por defecto se escriben en
   _borrador-secciones/, y GitHub Pages ignora toda carpeta que empiece con "_":
   aunque se suban al repositorio, no se ven en internet.

   Mientras el texto de una página sea provisorio, además lleva
   <meta name="robots" content="noindex">, para que no se indexe por error.

   CÓMO SE USA
     node construir-secciones.mjs              (arma el borrador, sin publicar)
     node construir-secciones.mjs --publicar   (escribe en las carpetas reales;
                                                SOLO cuando estén los textos finales)
   ═══════════════════════════════════════════════════════════════════ */

process.env.TZ = process.env.TZ || 'America/Argentina/Buenos_Aires';

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SECCIONES } from './contenido-secciones.mjs';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
const SITIO = 'https://tasita.com.ar';
const PUBLICAR = process.argv.includes('--publicar');
const DESTINO = PUBLICAR ? RAIZ : path.join(RAIZ, '_borrador-secciones');

const home = readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const memoria = JSON.parse(readFileSync(path.join(RAIZ, 'datos-tasita.json'), 'utf8')).secciones;

/* El diseño es el de la página principal: se toma tal cual, así las listas se ven idénticas */
const CSS = (home.match(/<style>([\s\S]*?)<\/style>/) || [])[1];
if (!CSS) { console.error('No encontré los estilos en index.html.'); process.exit(1); }

const LOGO = (home.match(/<div class="logo">\s*(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!LOGO) { console.error('No encontré el logo en index.html.'); process.exit(1); }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* Las filas de la página principal tienen clics que abren calculadoras y apartados que acá no
   existen. Se sacan: acá son una tabla para leer. (Los logos mantienen su respaldo de iniciales.) */
const sinClics = html => html.replace(/\sonclick="[^"]*"/g, '');

const MENU = [
  ['/', 'Inicio'], ['/billeteras/', 'Billeteras virtuales'], ['/plazos-fijos/', 'Plazos fijos'],
  ['/letras/', 'Letras'], ['/dolar/', 'Dólar'], ['/brokers/', 'Brokers'],
  ['/billeteras-dolares/', 'Billeteras en dólares'], ['/plazos-fijos-uva/', 'Plazos fijos UVA'],
  ['/presupuesto/', 'Presupuesto'], ['/sobre-tasita/', 'Sobre Tasita'],
];

function fechaDatos(clave) {
  const m = memoria[clave]; if (!m) return null;
  return new Date(m.actualizado).toLocaleString('es-AR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false }) + ' h';
}

function armar(s) {
  const tabla = s.datos ? memoria[s.datos] : null;
  if (s.datos && !tabla) throw new Error(`No hay datos guardados de "${s.datos}" para ${s.slug}. Corré construir-datos.mjs primero.`);
  const url = `${SITIO}/${s.slug}/`;
  const fecha = s.datos ? fechaDatos(s.datos) : null;

  const faq = s.faq.map(f => `
      <details class="sp-faq"><summary>${f.p}</summary><p>${f.r}</p></details>`).join('');
  const menu = MENU.map(([h, t]) => `        <a class="menu-option${h === '/' + s.slug + '/' ? ' sp-actual' : ''}" href="${h}">${t}</a>`).join('\n');
  const jsonFaq = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: s.faq.map(f => ({ '@type': 'Question', name: f.p.replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: f.r.replace(/<[^>]+>/g, '') } })),
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(s.titulo)}</title>
  <meta name="description" content="${esc(s.descripcion)}" />
  ${s.texto === 'final' ? '<meta name="robots" content="index, follow" />' : '<meta name="robots" content="noindex" />  <!-- TEXTO PROVISORIO: se saca cuando estén los textos finales -->'}
  <link rel="canonical" href="${url}" />
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />
  <link rel="icon" type="image/svg+xml" href="/logo-tasita.svg" />
  <meta property="og:title" content="${esc(s.titulo)}" />
  <meta property="og:description" content="${esc(s.descripcion)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7059163758387758" crossorigin="anonymous"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WG3NV7JNE0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WG3NV7JNE0');
  </script>
  <script type="application/ld+json">${jsonFaq}</script>
  <style>${CSS}
    /* ── Solo para estas páginas ── */
    .sp-intro p { font-size: 14.5px; line-height: 1.6; color: rgba(255,255,255,0.78); margin-bottom: 12px; }
    .sp-intro a, .sp-faq a { color: var(--accent-text); }
    .sp-fecha { font-size: 12px; color: var(--text-sub); margin: 0 0 14px; }
    .sp-h2 { font-size: 16px; font-weight: 700; margin: 26px 0 12px; }
    .sp-faq { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 13px 15px; margin-bottom: 8px; }
    .sp-faq summary { cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-main); }
    .sp-faq p { margin-top: 10px; font-size: 13.5px; line-height: 1.55; color: rgba(255,255,255,0.72); }
    .sp-volver { display: block; text-align: center; margin: 22px 0 6px; font-size: 13.5px; color: var(--accent-text); text-decoration: none; font-weight: 600; }
    .sp-actual { color: var(--accent-text) !important; font-weight: 700; }
    .sp-pie { text-align: center; font-size: 12px; color: var(--text-sub); margin-top: 28px; }
    .sp-pie a { color: var(--text-sub); text-decoration: none; margin: 0 5px; }
    .wallet-item { cursor: default; }
  </style>
</head>
<body>
  <div class="app">
    <header class="header">
      <a class="logo" href="/" style="text-decoration:none">
        ${LOGO}
        <span class="logo-name">Tasita</span>
      </a>
      <div class="menu-wrap">
        <button class="menu-btn" id="sp-menu-btn" aria-label="Menú" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <nav class="menu-dropdown" id="sp-menu">
${menu}
        </nav>
      </div>
    </header>

    <main>
      <div class="sec-header"><h1 class="sec-title"><span class="sec-emoji">${s.emoji}</span> ${esc(s.h1)}</h1></div>
      <div class="sp-intro">${s.intro.map(p => `<p>${p}</p>`).join('\n      ')}</div>
${tabla ? `      ${fecha ? `<p class="sp-fecha">Datos actualizados el ${fecha.replace(/\.$/, '')}</p>` : ''}
      <div class="${s.contenedor || 'wallet-list'}">${sinClics(tabla.html)}</div>` : ''}
${s.despues ? `      <div class="sp-intro">${s.despues.map(p => `<p>${p}</p>`).join('\n      ')}</div>` : ''}
      <h2 class="sp-h2">Preguntas frecuentes</h2>${faq}
      <a class="sp-volver" href="${s.volver || '/'}">${s.volverTexto || 'Ver todo en Tasita →'}</a>
    </main>

    <div class="sp-pie">
      <a href="/sobre-tasita/">Sobre Tasita</a>·<a href="/contacto/">Contacto</a>·<a href="/terminos/">Términos</a>·<a href="/privacidad/">Privacidad</a>·<a href="/disclaimer/">Aviso legal</a>
      <div style="margin-top:8px">© ${new Date().getFullYear()} Tasita</div>
    </div>
  </div>
  <script>
    (function () {
      var b = document.getElementById('sp-menu-btn'), m = document.getElementById('sp-menu');
      b.addEventListener('click', function (e) { e.stopPropagation(); m.classList.toggle('open'); b.setAttribute('aria-expanded', m.classList.contains('open')); });
      document.addEventListener('click', function () { m.classList.remove('open'); });
    })();
  </script>
</body>
</html>
`;
}

console.log(PUBLICAR ? 'MODO PUBLICAR: escribe en las carpetas reales.\n' : 'Modo borrador: escribe en _borrador-secciones/ (GitHub Pages lo ignora).\n');
for (const s of SECCIONES) {
  const dir = path.join(DESTINO, s.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), armar(s));
  const filas = s.datos ? (memoria[s.datos]?.filas ?? '-') : '-';
  console.log(`  /${s.slug}/`.padEnd(26) + `${String(filas).padStart(3)} filas   texto: ${s.texto === 'final' ? 'final' : 'PROVISORIO (noindex)'}`);
}
console.log(`\n${SECCIONES.length} páginas armadas.`);
