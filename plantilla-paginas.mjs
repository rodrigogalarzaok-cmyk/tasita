/* ═══════════════════════════════════════════════════════════════════
   PÁGINAS DE TEXTO DE TASITA

   Arma las páginas que no dependen de datos en vivo: Sobre Tasita,
   Privacidad, Términos, Contacto y Aviso legal. Son siempre las mismas,
   así que se generan una vez y quedan.

   Todas llevan el mismo encabezado que la página principal: el logo y
   el menú de las tres rayitas.

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

const PAGINAS = [
  {
    carpeta: 'sobre-tasita',
    titulo: 'Sobre Tasita — Quién la hizo y para qué',
    descripcion: 'Tasita la creó Rodrigo Galarza, creador de contenido de finanzas. Una herramienta gratuita para comparar tasas de billeteras, plazos fijos, letras y dólar.',
    h1: 'Sobre Tasita',
    cuerpo: `
      <p>Tasita es una herramienta gratuita e independiente para comparar, en una sola pantalla, dónde conviene poner tu plata en Argentina: qué billetera virtual paga más, qué banco ofrece el mejor plazo fijo, cuánto rinden las letras del Tesoro y a cuánto está el dólar.</p>

      <h2>Quién la hizo</h2>
      <p>La creé yo, <strong>Rodrigo Galarza</strong>. Hago contenido de finanzas personales en TikTok e Instagram, como <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a>, donde explico en criollo cosas que suelen contarse difícil: dónde rinde más la plata, cómo funciona un plazo fijo, qué es una letra del Tesoro o cuándo conviene comprar dólares.</p>
      <p>De tanto responder la misma pregunta —"¿dónde pongo la plata?"— me di cuenta de que faltaba algo más práctico que un video: un lugar donde ver todas las tasas juntas y actualizadas.</p>

      <h2>Por qué la hice</h2>
      <p>Porque para saber dónde conviene poner la plata había que entrar a diez aplicaciones distintas, anotar las tasas a mano y comparar. Un trabajo que lleva media hora y que al día siguiente ya quedó viejo, porque las tasas cambian todo el tiempo.</p>
      <p>Tasita junta todo eso en un solo lugar, ordenado de mayor a menor, y se actualiza solo. Lo que antes era media hora ahora son diez segundos.</p>

      <h2>Qué NO es Tasita</h2>
      <p>No somos un banco, ni una billetera, ni un broker. No vendemos productos financieros ni recibimos comisiones por recomendar ninguna entidad: el orden de las listas lo decide la tasa, no quién paga. La información proviene de fuentes públicas y se presenta con fines informativos.</p>
      <p>Tampoco hace falta registrarse ni dar ningún dato personal. Entrás, mirás y listo.</p>

      <p>Para consultas o sugerencias, escribime a <a href="mailto:rodrigogalarza.280@gmail.com">rodrigogalarza.280@gmail.com</a> o por <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">Instagram</a>.</p>
    `,
  },
  {
    carpeta: 'privacidad',
    titulo: 'Política de privacidad — Tasita',
    descripcion: 'Qué datos usa Tasita y cuáles no. Información sobre cookies de Google Analytics y Google AdSense, y cómo desactivar la publicidad personalizada.',
    h1: 'Política de privacidad',
    cuerpo: `
      <p>Tasita no recopila ni almacena datos personales. No hace falta registrarse, no pedimos tu nombre, tu correo ni ningún dato de tus cuentas, y no tenemos forma de saber quién sos.</p>
      <p>Las cotizaciones y tasas se obtienen de servicios públicos de terceros. No tenemos acceso a los datos que esos servicios puedan registrar por su cuenta.</p>

      <h2>Analítica</h2>
      <p>Usamos Google Analytics para medir el tráfico del sitio: cuántas personas entran y qué secciones miran, siempre de forma anónima y agrupada. Google Analytics utiliza cookies propias con ese fin.</p>

      <h2>Publicidad y cookies</h2>
      <p>Proveedores externos, incluido Google, utilizan cookies para mostrar anuncios basados en las visitas anteriores del usuario a este sitio web o a otros sitios web.</p>
      <p>El uso de cookies de publicidad de Google permite a Google y a sus socios mostrar anuncios a los usuarios en función de sus visitas a este sitio o a otros sitios web de Internet.</p>
      <p>Los usuarios pueden inhabilitar la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Configuración de anuncios de Google</a>. También es posible inhabilitar el uso de cookies de publicidad de otros proveedores externos visitando <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">aboutads.info</a>.</p>
      <p>Además, podés bloquear o borrar las cookies desde la configuración de tu navegador. Rechazarlas no te impide usar Tasita: la página funciona igual, solo que los anuncios que veas van a ser menos relevantes.</p>

      <h2>Más información</h2>
      <p>Para conocer cómo Google usa los datos cuando utilizás sitios de sus socios, visitá <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com</a>.</p>
      <p>Para consultas sobre privacidad: <a href="mailto:rodrigogalarza.280@gmail.com">rodrigogalarza.280@gmail.com</a></p>
    `,
  },
  {
    carpeta: 'terminos',
    titulo: 'Términos y condiciones — Tasita',
    descripcion: 'Condiciones de uso de Tasita: qué ofrece el sitio, de dónde salen los datos, limitación de responsabilidad y propiedad del contenido.',
    h1: 'Términos y condiciones',
    cuerpo: `
      <p>Al usar Tasita aceptás estas condiciones. Son simples y están escritas para que se entiendan.</p>

      <h2>Qué es este sitio</h2>
      <p>Tasita es un sitio informativo y gratuito que muestra y compara tasas de billeteras virtuales, plazos fijos, letras del Tesoro y cotizaciones del dólar en Argentina. No es una entidad financiera, no intermedia operaciones y no toma dinero de nadie.</p>

      <h2>Los datos</h2>
      <p>La información proviene de fuentes públicas y de los sitios de las propias entidades. Hacemos lo posible para que esté al día, pero las tasas cambian sin aviso y puede haber errores, demoras o datos desactualizados. <strong>Antes de invertir, verificá siempre con la entidad.</strong></p>

      <h2>Responsabilidad</h2>
      <p>La información es orientativa y no constituye asesoramiento financiero, legal ni impositivo. Las decisiones que tomes con tu dinero son tuyas. Tasita no se responsabiliza por pérdidas derivadas del uso de esta información.</p>

      <h2>Enlaces a otros sitios</h2>
      <p>Algunas entidades están enlazadas a sus sitios oficiales. No controlamos esos sitios ni respondemos por su contenido, sus condiciones o sus prácticas de privacidad.</p>

      <h2>Contenido</h2>
      <p>Los textos, el diseño y el nombre Tasita son de autoría propia. Podés compartir capturas o enlaces citando la fuente; copiar el sitio completo, no.</p>

      <h2>Cambios</h2>
      <p>Estas condiciones pueden actualizarse. La versión vigente es siempre la publicada en esta página.</p>

      <p>Consultas: <a href="mailto:rodrigogalarza.280@gmail.com">rodrigogalarza.280@gmail.com</a></p>
    `,
  },
  {
    carpeta: 'contacto',
    titulo: 'Contacto — Tasita',
    descripcion: 'Escribinos a rodrigogalarza.280@gmail.com o por Instagram y TikTok. Consultas, errores en las tasas y sugerencias de entidades que faltan.',
    h1: 'Contacto',
    cuerpo: `
      <p>Leemos todos los mensajes. Si querés escribirnos, estos son los medios:</p>
      <p><strong>Correo:</strong> <a href="mailto:rodrigogalarza.280@gmail.com">rodrigogalarza.280@gmail.com</a><br>
      <strong>Instagram:</strong> <a href="https://www.instagram.com/rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a><br>
      <strong>TikTok:</strong> <a href="https://www.tiktok.com/@rodrigogalarzaa" target="_blank" rel="noopener">@rodrigogalarzaa</a></p>

      <h2>Para qué escribirnos</h2>
      <p><strong>Encontraste un error en una tasa.</strong> Es lo que más nos sirve. Las tasas cambian seguido y a veces una entidad modifica la suya antes de que lo veamos. Contanos de qué entidad se trata, qué tasa figura en Tasita y cuál es la correcta. Si podés, decinos desde dónde la viste: la app de la billetera, el sitio del banco, lo que sea.</p>
      <p><strong>Falta una billetera, un banco o un broker.</strong> Si usás una entidad que no está en las listas, avisanos y la miramos. No sumamos cualquiera: tiene que ser una entidad real, con tasa pública y verificable.</p>
      <p><strong>Tenés una sugerencia.</strong> Una sección nueva, una calculadora, algo que se entienda mal o que no se vea bien en tu celular. Varias de las cosas que hoy tiene Tasita salieron de mensajes de gente que la usa.</p>
      <p><strong>Querés hacer una consulta.</strong> Sobre cómo funciona algo del sitio o sobre lo que mostramos. Eso sí: no damos recomendaciones personalizadas de inversión ni te podemos decir dónde poner tu plata. No somos asesores financieros.</p>

      <h2>Cuánto tardamos</h2>
      <p>Tasita la mantiene una sola persona, así que la respuesta puede demorar unos días. Los errores en las tasas son lo que atendemos primero.</p>
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

/* El menú de las tres rayitas, igual que en la página principal.
   Por ahora lleva a las secciones de la home; cuando cada sección tenga
   su propia dirección, se actualizan acá. */
const MENU = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Billeteras virtuales', href: '/billeteras/' },
  { texto: 'Plazos fijos', href: '/plazos-fijos/' },
  { texto: 'Letras del Tesoro', href: '/letras/' },
  { texto: 'Dólar', href: '/dolar/' },
  { texto: 'Brokers', href: '/brokers/' },
  { texto: 'Billeteras en dólares', href: '/billeteras-dolares/' },
  { texto: 'Plazos fijos UVA', href: '/plazos-fijos-uva/' },
  { texto: 'Guías', href: '/guias/' },
  { texto: 'Sobre Tasita', href: '/sobre-tasita/' },
];
/* Las páginas legales van en el pie, no en el menú */
const LEGALES = [
  { texto: 'Contacto', href: '/contacto/' },
  { texto: 'Términos', href: '/terminos/' },
  { texto: 'Privacidad', href: '/privacidad/' },
  { texto: 'Aviso legal', href: '/disclaimer/' },
];

function cabecera(actual) {
  const items = MENU
    .map(m => `        <a class="menu-option${m.href === '/' + actual + '/' ? ' actual' : ''}" href="${m.href}">${m.texto}</a>`)
    .join('\n');
  return `  <header class="header">
    <a class="logo" href="/">
      ${LOGO}
      <span class="logo-name">Tasita</span>
    </a>
    <div class="menu-wrap">
      <button class="menu-btn" id="menu-btn" aria-label="Menú" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      <nav class="menu-dropdown" id="menu-dropdown">
${items}
      </nav>
    </div>
  </header>`;
}

function pie(actual) {
  const links = LEGALES
    .filter(m => m.href !== '/' + actual + '/')
    .map(m => `<a href="${m.href}">${m.texto}</a>`)
    .join('<span>·</span>');
  return `  <footer class="pie">
    <nav class="pie-links"><a href="/sobre-tasita/">Sobre Tasita</a><span>·</span>${links}</nav>
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
    padding: 24px 16px 48px; line-height: 1.6;
  }
  .hoja { width: 100%; max-width: 640px; }

  /* Encabezado: igual que el de la página principal */
  .header { display: flex; align-items: center; justify-content: space-between; padding: 8px 0 28px; }
  .logo { display: flex; align-items: center; gap: 11px; text-decoration: none; }
  .logo-name { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: var(--text-main); }
  .menu-wrap { position: relative; }
  .menu-btn {
    background: none; border: none; color: var(--text-sub);
    cursor: pointer; padding: 4px; border-radius: 6px; transition: color .2s;
  }
  .menu-btn:hover { color: var(--text-main); }
  .menu-dropdown {
    position: absolute; top: calc(100% + 8px); right: 0; z-index: 50;
    min-width: 180px; padding: 6px;
    background: #0a1420; border: 1px solid var(--border);
    border-radius: 14px; box-shadow: 0 14px 34px rgba(0,0,0,0.5);
    display: none; flex-direction: column;
  }
  .menu-dropdown.open { display: flex; }
  .menu-option {
    padding: 10px 13px; border-radius: 9px;
    font-size: 14px; color: var(--text-main); text-decoration: none;
    transition: background .18s;
  }
  .menu-option:hover { background: rgba(255,255,255,0.07); }
  .menu-option.actual { color: var(--accent-text); font-weight: 700; }

  h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.4px; margin-bottom: 18px; }
  .contenido { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 22px; }
  .contenido h2 {
    font-size: 16px; font-weight: 700; color: var(--accent-text);
    margin: 24px 0 10px; letter-spacing: -0.2px;
  }
  .contenido h2:first-child { margin-top: 0; }
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
${cabecera(p.carpeta)}

    <h1>${p.h1}</h1>
    <div class="contenido">${p.cuerpo.trim()}</div>

${pie(p.carpeta)}
  </div>

  <script>
    /* El menú de las tres rayitas: abre, cierra al tocar afuera y con Escape */
    (function () {
      var btn = document.getElementById('menu-btn');
      var menu = document.getElementById('menu-dropdown');
      if (!btn || !menu) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var abierto = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      });
      document.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
      });
    })();
  </script>
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
