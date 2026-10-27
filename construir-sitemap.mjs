/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR SITEMAP — la lista de páginas que se le muestra a Google

   Sale de las mismas listas que usan los generadores de páginas, así que si se
   suma una guía o una sección, aparece sola acá y no hay que acordarse.

   CÓMO SE USA:   node construir-sitemap.mjs
   ═══════════════════════════════════════════════════════════════════ */
import { writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SECCIONES } from './contenido-secciones.mjs';
import { GUIAS, FECHA_PUBLICACION } from './contenido-guias.mjs';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
const SITIO = 'https://tasita.com.ar';

/* [dirección, prioridad, cada cuánto cambia]
   Las secciones con tabla cambian varias veces al día; las guías y las páginas de texto, casi nunca. */
const paginas = [
  ['/', 1.0, 'daily'],
  ...SECCIONES.map(s => [`/${s.slug}/`, s.datos ? 0.9 : 0.6, s.datos ? 'daily' : 'monthly']),
  ['/guias/', 0.8, 'weekly'],
  ...GUIAS.map(g => [`/guias/${g.slug}/`, 0.7, 'monthly', FECHA_PUBLICACION]),
  ['/sobre-tasita/', 0.4, 'yearly'],
  ['/contacto/', 0.3, 'yearly'],
  ['/privacidad/', 0.2, 'yearly'],
  ['/terminos/', 0.2, 'yearly'],
  ['/disclaimer/', 0.2, 'yearly'],
];

/* Red de seguridad: no se lista una página que no existe */
const faltan = paginas.filter(([r]) => r !== '/' && !existsSync(path.join(RAIZ, r.slice(1), 'index.html')));
if (faltan.length) { console.error('Estas páginas están en la lista pero no existen todavía:', faltan.map(f => f[0]).join(', ')); process.exit(1); }

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas.map(([r, p, f, lm]) => `  <url>
    <loc>${SITIO}${r}</loc>${lm ? `\n    <lastmod>${lm}</lastmod>` : ''}
    <changefreq>${f}</changefreq>
    <priority>${p.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(path.join(RAIZ, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${paginas.length} páginas`);
paginas.forEach(([r]) => console.log('  ' + SITIO + r));
