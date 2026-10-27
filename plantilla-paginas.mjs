/* ═══════════════════════════════════════════════════════════════════
   PÁGINAS DE TEXTO DE TASITA

   Arma las páginas que no dependen de datos en vivo: Sobre Tasita,
   Privacidad, Contacto y Disclaimer. Son siempre las mismas, así que
   se generan una vez y quedan.

   El texto es el mismo que ya muestran las ventanitas de la página
   principal: si alguna vez cambia ahí, hay que cambiarlo acá también.

   Cómo correrlo:   node plantilla-paginas.mjs
   ═══════════════════════════════════════════════════════════════════ */

import { writeFile, mkdir } from 'node:fs/promises';

const SITIO = 'https://tasita.com.ar';

/* La tacita del logo, igual que en la página principal */
const LOGO = `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#dce4f0"
     stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <defs><clipPath id="cc"><path d="M3 10 H17 V15 a6 6 0 0 1-6 6 H9 a6 6 0 0 1-6-6 V10 Z"/></clipPath></defs>
  <path d="M8 3a2.4 2.4 0 0 0-1 2a2.4 2.4 0 0 0 1 2"/>
  <path d="M12 3a2.4 2.4 0 0 0-1 2a2.4 2.4 0 0 0 1 2"/>
  <path d="M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-5"/>
  <path d="M16.746 16.726a3 3 0 1 0 .252-5.555"/>
  <g clip-path="url(#cc)">
    <rect x="4" y="16.5" width="3" height="5" rx="0.5" fill="#00e8ff" stroke="none"/>
    <rect x="8.5" y="14" width="3" height="7.5" rx="0.5" fill="#00e8ff" stroke="none"/>
    <rect x="13" y="11.5" width="3" height="10" rx="0.5" fill="#00e8ff" stroke="none"/>
  </g>
</svg>`;

/* Las cuatro páginas. El cuerpo va tal cual lo que hoy dicen las ventanitas. */
const PAGINAS = [
  {
    carpeta: 'sobre-tasita',
    titulo: 'Sobre Tasita — Qué es y quién está detrás',
    descripcion: 'Tasita es una herramienta gratuita e independiente para comparar tasas de billeteras virtuales, plazos fijos, letras y dólar en Argentina. Sin registro y sin vender productos financieros.',
    h1: 'Sobre Tasita',
    cuerpo: `
      <p>Tasita es una herramienta gratuita e independiente creada para ayudar a los argentinos a comparar opciones de ahorro e inversión de forma simple y rápida. En una sola pantalla podés ver qué billetera virtual paga más por tu plata, qué banco ofrece el mejor plazo fijo, cuánto rinden las letras del Tesoro y a cuánto está el dólar.</p>
      <p>No somos un banco, ni una billetera, ni un broker. No vendemos productos financieros ni recibimos comisiones por recomendar ninguna entidad. La información que mostramos proviene de fuentes públicas y se presenta únicamente con fines informativos.</p>
      <p>La idea nació de una necesidad concreta: para saber dónde conviene poner la plata había que entrar a diez aplicaciones distintas y anotar las tasas a mano. Tasita junta todo eso en un solo lugar, ordenado de mayor a menor, y se actualiza solo.</p>
      <p>No hace falta registrarse ni dar ningún dato personal. Entrás, mirás y listo.</p>
      <p>Para consultas o sugerencias escribinos por Instagram: <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a></p>
    `,
  },
  {
    carpeta: 'privacidad',
    titulo: 'Política de privacidad — Tasita',
    descripcion: 'Qué datos usa Tasita y cuáles no. No pedimos registro ni guardamos datos personales. Información sobre cookies de Google Analytics y AdSense.',
    h1: 'Política de privacidad',
    cuerpo: `
      <p>Tasita no recopila ni almacena datos personales. No hace falta registrarse, no pedimos tu nombre, tu correo ni ningún dato de tus cuentas, y no tenemos forma de saber quién sos.</p>
      <p>Las cotizaciones y tasas se obtienen de servicios públicos de terceros. No tenemos acceso a los datos que esos servicios puedan registrar por su cuenta.</p>
      <p><strong>Cookies y analítica.</strong> Usamos Google Analytics para medir el tráfico del sitio: cuántas personas entran y qué secciones miran, siempre de forma anónima y agrupada. Google Analytics utiliza cookies propias para eso. El sitio también puede mostrar publicidad a través de Google AdSense, que emplea cookies para personalizar los anuncios según tus intereses.</p>
      <p>Podés gestionar o rechazar estas cookies desde la configuración de tu navegador, o desde <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>. Rechazarlas no te impide usar Tasita: la página funciona igual.</p>
      <p>Para más información sobre cómo Google usa los datos, visitá <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>
      <p>Para consultas sobre privacidad: <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a></p>
    `,
  },
  {
    carpeta: 'contacto',
    titulo: 'Contacto — Tasita',
    descripcion: 'Cómo comunicarte con Tasita: correo, Instagram y TikTok. Consultas, sugerencias y correcciones de tasas.',
    h1: 'Contacto',
    cuerpo: `
      <p>Si encontraste un error en alguna tasa, querés sugerir una billetera que falta o tenés cualquier consulta, escribinos. Leemos todo.</p>
      <p><strong>Correo:</strong> <a href="mailto:rodrigogalarza.280@gmail.com">rodrigogalarza.280@gmail.com</a></p>
      <p><strong>Instagram:</strong> <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a></p>
      <p><strong>TikTok:</strong> <a href="https://www.tiktok.com/@rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a></p>
      <p>Si nos avisás de una tasa desactualizada, contanos de qué entidad se trata y, si podés, desde dónde la viste. Así la corregimos más rápido.</p>
    `,
  },
  {
    carpeta: 'disclaimer',
    titulo: 'Aviso legal — Tasita',
    descripcion: 'La información de Tasita es orientativa y no constituye asesoramiento financiero. Verificá siempre las tasas con la entidad antes de invertir.',
    h1: 'Aviso legal',
    cuerpo: `
      <p>La información presentada en Tasita es exclusivamente orientativa y no constituye asesoramiento financiero, legal ni impositivo.</p>
      <p>Las tasas mostradas pueden variar sin previo aviso. Siempre verificá los datos directamente con la entidad antes de tomar decisiones de inversión.</p>
      <p>Invertir implica riesgos. Los rendimientos pasados no garantizan resultados futuros. El capital invertido puede disminuir de valor.</p>
      <p>Tasita no es una entidad financiera regulada y no se responsabiliza por pérdidas derivadas del uso de esta información.</p>
    `,
  },
];

/* El pie: los mismos links en todas, para que se pueda navegar entre ellas */
function pie(actual) {
  const links = PAGINAS
    .filter(p => p.carpeta !== actual)
    .map(p => `<a href="/${p.carpeta}/">${p.h1}</a>`)
    .join('<span>·</span>');
  return `
  <footer class="pie">
    <nav class="pie-links">
      <a href="/">Inicio</a><span>·</span>${links}
    </nav>
    <div class="redes">
      <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a>
      <a href="https://www.tiktok.com/@rodrigogalarzaa" target="_blank" rel="noopener">TikTok</a>
    </div>
    <div class="copy">© ${new Date().getFullYear()} Tasita</div>
  </footer>`;
}

const ESTILOS = `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { background-color: #4b88ff; overflow-x: hidden; }
  :root {
    --card: rgba(255,255,255,0.04);
    --border: rgba(255,255,255,0.07);
    --accent-text: #00e8ff;
    --text-main: #dce4f0;
    --text-sub: rgba(255,255,255,0.42);
  }
  body {
    min-height: 100vh;
    background: linear-gradient(to bottom, #000810 0%, #070e1a 60%, #4b88ff 100%);
    background-attachment: fixed;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-main);
    display: flex; justify-content: center;
    padding: 24px 16px 48px;
    line-height: 1.6;
  }
  .hoja { width: 100%; max-width: 640px; }
  .cabecera { display: flex; align-items: center; gap: 11px; padding: 8px 0 26px; text-decoration: none; }
  .logo-name { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: var(--text-main); }
  .volver { display: inline-block; margin-bottom: 18px; font-size: 13px; color: var(--accent-text); text-decoration: none; }
  .volver:hover { text-decoration: underline; }
  h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.4px; margin-bottom: 18px; }
  .contenido {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 18px; padding: 22px;
  }
  .contenido p { font-size: 15px; margin-bottom: 14px; color: rgba(255,255,255,0.80); }
  .contenido p:last-child { margin-bottom: 0; }
  .contenido strong { color: var(--text-main); font-weight: 700; }
  .contenido a { color: var(--accent-text); }
  .pie { margin-top: 30px; text-align: center; font-size: 12.5px; }
  .pie-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 14px; }
  .pie-links a { color: var(--text-sub); text-decoration: none; }
  .pie-links a:hover { color: var(--text-main); }
  .pie-links span { color: var(--text-sub); }
  .redes { display: flex; justify-content: center; gap: 16px; margin-bottom: 12px; }
  .redes a { color: var(--accent-text); text-decoration: none; font-weight: 600; }
  .copy { color: var(--text-sub); }
  @media (max-width: 420px) { h1 { font-size: 22px; } .contenido { padding: 18px; } }
`;

function armar(p) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.titulo}</title>
  <meta name="description" content="${p.descripcion}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${SITIO}/${p.carpeta}/" />
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />
  <link rel="icon" type="image/svg+xml" href="/logo-tasita.svg" />
  <link rel="apple-touch-icon" href="/favicon-48.png" />
  <meta property="og:title" content="${p.titulo}" />
  <meta property="og:description" content="${p.descripcion}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${SITIO}/${p.carpeta}/" />
  <meta property="og:image" content="${SITIO}/og-image.png" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7059163758387758"
          crossorigin="anonymous"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WG3NV7JNE0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WG3NV7JNE0');
  </script>
  <style>${ESTILOS}</style>
</head>
<body>
  <div class="hoja">
    <a class="cabecera" href="/">
      ${LOGO}
      <span class="logo-name">Tasita</span>
    </a>

    <a class="volver" href="/">&larr; Volver a Tasita</a>
    <h1>${p.h1}</h1>
    <div class="contenido">${p.cuerpo.trim()}</div>
    ${pie(p.carpeta)}
  </div>
</body>
</html>
`;
}

for (const p of PAGINAS) {
  await mkdir(p.carpeta, { recursive: true });
  await writeFile(`${p.carpeta}/index.html`, armar(p));
  console.log(`  ${p.carpeta}/index.html`);
}
console.log(`\n${PAGINAS.length} páginas listas.`);
