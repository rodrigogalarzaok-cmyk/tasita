/* ═══════════════════════════════════════════════════════════════════
   PÁGINA BASE

   La envoltura común de las páginas por sección y de las guías: encabezado
   con el logo y el menú de las tres rayitas, pie con los links legales, y todo
   el diseño de la página principal. Así todas se ven iguales entre sí y
   iguales a la home, y si el menú cambia, cambia en un solo lugar.

   El diseño NO se copia a mano: se toma del <style> del index.html, así que si
   se retoca un color en la home, las demás páginas lo heredan en el próximo armado.
   ═══════════════════════════════════════════════════════════════════ */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
export const SITIO = 'https://tasita.com.ar';
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* El menú de las tres rayitas: igual en todas las páginas nuevas */
export const MENU = [
  ['/', 'Inicio'],
  ['/billeteras/', 'Billeteras virtuales'],
  ['/plazos-fijos/', 'Plazos fijos'],
  ['/letras/', 'Letras del Tesoro'],
  ['/dolar/', 'Dólar'],
  ['/brokers/', 'Brokers'],
  ['/billeteras-dolares/', 'Billeteras en dólares'],
  ['/plazos-fijos-uva/', 'Plazos fijos UVA'],
  ['/guias/', 'Guías'],
  ['/sobre-tasita/', 'Sobre Tasita'],
];

const home = readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
const CSS = (home.match(/<style>([\s\S]*?)<\/style>/) || [])[1];
const LOGO = (home.match(/<div class="logo">\s*(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!CSS || !LOGO) throw new Error('No encontré los estilos o el logo en index.html.');

const CSS_EXTRA = `
    /* ── Solo para las páginas nuevas ── */
    .sp-intro p, .sp-texto p { font-size: 14.5px; line-height: 1.65; color: rgba(255,255,255,0.80); margin-bottom: 13px; }
    .sp-intro a, .sp-texto a, .sp-faq a { color: var(--accent-text); }
    .sp-texto strong, .sp-intro strong { color: var(--text-main); }
    .sp-fecha { font-size: 12px; color: var(--text-sub); margin: 0 0 14px; }
    .sp-h2 { font-size: 17px; font-weight: 700; margin: 28px 0 12px; letter-spacing: -0.2px; line-height: 1.3; }
    .sp-faq { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 13px 15px; margin-bottom: 8px; }
    .sp-faq summary { cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-main); }
    .sp-faq p { margin-top: 10px; font-size: 13.5px; line-height: 1.6; color: rgba(255,255,255,0.74); }
    .sp-cta { display: block; text-align: center; margin: 26px 0 6px; padding: 13px 16px; border-radius: 13px;
              background: rgba(0,232,255,0.08); border: 1px solid rgba(0,232,255,0.32);
              color: var(--accent-text); font-size: 14px; font-weight: 700; text-decoration: none; }
    .sp-cta:hover { background: rgba(0,232,255,0.14); }
    .sp-mas { margin-top: 8px; }
    .sp-mas a { display: block; padding: 12px 14px; margin-bottom: 7px; border-radius: 13px; text-decoration: none;
                background: var(--card); border: 1px solid var(--border); color: var(--text-main); font-size: 14px; font-weight: 600; line-height: 1.35; }
    .sp-mas a:hover { background: rgba(255,255,255,0.07); }
    .sp-mas small { display: block; margin-top: 3px; font-weight: 400; font-size: 12.5px; color: var(--text-sub); }
    .sp-actual { color: var(--accent-text) !important; font-weight: 700; }
    .sp-pie { text-align: center; font-size: 12px; color: var(--text-sub); margin-top: 30px; line-height: 2; }
    .sp-pie a { color: var(--text-sub); text-decoration: none; margin: 0 5px; white-space: nowrap; }
    .sp-pie a:hover { color: var(--text-main); }
    .sp-meta { font-size: 12.5px; color: var(--text-sub); margin: -4px 0 18px; }
    .wallet-item, .broker-item { cursor: default; }
`;

/* Arma una página completa.
   cuerpo: el HTML de adentro de <main>.   activo: la dirección del menú que se marca. */
export function pagina({ titulo, descripcion, ruta, indexar = true, tipoOg = 'website', jsonld = [], cuerpo, activo }) {
  const url = `${SITIO}${ruta}`;
  const menu = MENU.map(([h, t]) =>
    `          <a class="menu-option${h === (activo || ruta) ? ' sp-actual' : ''}" href="${h}">${t}</a>`).join('\n');
  const ld = jsonld.map(j => `  <script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(descripcion)}" />
  <meta name="robots" content="${indexar ? 'index, follow' : 'noindex'}" />
  <link rel="canonical" href="${url}" />
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />
  <link rel="icon" type="image/svg+xml" href="/logo-tasita.svg" />
  <meta property="og:title" content="${esc(titulo)}" />
  <meta property="og:description" content="${esc(descripcion)}" />
  <meta property="og:type" content="${tipoOg}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7059163758387758" crossorigin="anonymous"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WG3NV7JNE0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WG3NV7JNE0');
  </script>
${ld}
  <style>${CSS}${CSS_EXTRA}</style>
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
${cuerpo}
    </main>

    <div class="sp-pie">
      <a href="/sobre-tasita/">Sobre Tasita</a>·<a href="/contacto/">Contacto</a>·<a href="/terminos/">Términos</a>·<a href="/privacidad/">Privacidad</a>·<a href="/disclaimer/">Aviso legal</a>
      <div>© ${new Date().getFullYear()} Tasita</div>
    </div>
  </div>
  <script>
    (function () {
      var b = document.getElementById('sp-menu-btn'), m = document.getElementById('sp-menu');
      b.addEventListener('click', function (e) { e.stopPropagation(); m.classList.toggle('open'); b.setAttribute('aria-expanded', m.classList.contains('open')); });
      document.addEventListener('click', function () { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); } });
    })();
  </script>
</body>
</html>
`;
}

/* Preguntas frecuentes como <details> (sin JavaScript) + el dato estructurado que Google lee */
export function faqHtml(faq) {
  return `<h2 class="sp-h2">Preguntas frecuentes</h2>` + faq.map(f =>
    `\n      <details class="sp-faq"><summary>${f.p}</summary><p>${f.r}</p></details>`).join('');
}
export function faqJsonLd(faq) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faq.map(f => ({ '@type': 'Question', name: f.p.replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: f.r.replace(/<[^>]+>/g, '') } })),
  };
}
