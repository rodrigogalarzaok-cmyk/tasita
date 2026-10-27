/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR GUÍAS — /guias/ y cada artículo

   Las guías no dependen de datos en vivo: se arman una vez y quedan. Este
   programa lee contenido-guias*.mjs y escribe guias/index.html y una carpeta
   por artículo (guias/<nombre>/index.html).

   CÓMO SE USA:   node construir-guias.mjs
   ═══════════════════════════════════════════════════════════════════ */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { GUIAS, FECHA_PUBLICACION } from './contenido-guias.mjs';
import { pagina, faqHtml, faqJsonLd, esc, SITIO } from './pagina-base.mjs';

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
const AUTOR = { '@type': 'Person', name: 'Rodrigo Galarza', url: `${SITIO}/sobre-tasita/` };
const EDITOR = { '@type': 'Organization', name: 'Tasita', url: SITIO + '/', logo: { '@type': 'ImageObject', url: `${SITIO}/favicon-48.png` } };

const fechaLarga = new Date(FECHA_PUBLICACION + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
const soloTexto = html => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const contar = g => soloTexto([...g.intro, ...g.secciones.flatMap(s => s.p), ...g.conclusion].join(' ')).split(' ').length;

function articulo(g) {
  const palabras = contar(g);
  const minutos = Math.max(1, Math.round(palabras / 200));
  const rel = g.relacionadas.map(s => GUIAS.find(x => x.slug === s)).filter(Boolean);

  const cuerpo = `      <nav class="sp-meta" aria-label="Ruta"><a href="/guias/" style="color:var(--accent-text);text-decoration:none">Guías</a> › ${esc(g.h1)}</nav>
      <div class="sec-header"><h1 class="sec-title" style="line-height:1.25">${esc(g.h1)}</h1></div>
      <p class="sp-meta">Por Rodrigo Galarza · ${fechaLarga} · ${minutos} min de lectura</p>
      <div class="sp-intro">${g.intro.map(p => `<p>${p}</p>`).join('\n      ')}</div>
      ${g.secciones.map(s => `<h2 class="sp-h2">${s.h2}</h2>\n      <div class="sp-texto">${s.p.map(p => `<p>${p}</p>`).join('\n      ')}</div>`).join('\n      ')}
      <h2 class="sp-h2">En resumen</h2>
      <div class="sp-texto">${g.conclusion.map(p => `<p>${p}</p>`).join('\n      ')}</div>
      ${faqHtml(g.faq)}
      <a class="sp-cta" href="${g.cta[0]}">${g.cta[1]}</a>
      <h2 class="sp-h2">Seguí leyendo</h2>
      <div class="sp-mas">${rel.map(r => `<a href="/guias/${r.slug}/">${esc(r.h1)}<small>${esc(r.resumen)}</small></a>`).join('\n        ')}</div>
      <p class="sp-meta" style="margin-top:22px">Esta guía es informativa y no constituye asesoramiento financiero. Las condiciones de cada producto cambian: verificalas siempre con la entidad antes de decidir.</p>`;

  const ruta = `/guias/${g.slug}/`;
  const url = SITIO + ruta;
  return { palabras, html: pagina({
    titulo: g.titulo, descripcion: g.descripcion, ruta, activo: '/guias/', tipoOg: 'article',
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.descripcion,
        datePublished: FECHA_PUBLICACION, dateModified: FECHA_PUBLICACION, inLanguage: 'es-AR',
        mainEntityOfPage: url, author: AUTOR, publisher: EDITOR },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Tasita', item: SITIO + '/' },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: SITIO + '/guias/' },
        { '@type': 'ListItem', position: 3, name: g.h1, item: url } ] },
      faqJsonLd(g.faq),
    ],
    cuerpo,
  }) };
}

function indice() {
  const cuerpo = `      <div class="sec-header"><h1 class="sec-title"><span class="sec-emoji">📚</span> Guías para cuidar y hacer rendir tu plata</h1></div>
      <div class="sp-intro">
      <p>Acá juntamos explicaciones simples, en criollo, sobre los temas de plata que más se buscan en Argentina: qué es cada cosa, cómo funciona, qué ventajas y qué riesgos tiene. Están pensadas para quien recién empieza y no quiere perderse en tecnicismos.</p>
      <p>Cada guía tiene ejemplos con números y termina con preguntas frecuentes. Y todas se complementan con las tablas de tasas de Tasita, que se actualizan solas.</p>
      </div>
      <div class="sp-mas">${GUIAS.map(g => `<a href="/guias/${g.slug}/">${esc(g.h1)}<small>${esc(g.resumen)}</small></a>`).join('\n        ')}</div>
      <p class="sp-meta" style="margin-top:22px">Las guías son informativas y no constituyen asesoramiento financiero.</p>`;
  return pagina({
    titulo: 'Guías de finanzas personales para Argentina — Tasita',
    descripcion: 'Guías simples sobre billeteras virtuales, plazo fijo, LECAP, dólar MEP, CEDEARs, inflación y cómo empezar a invertir con poca plata en Argentina.',
    ruta: '/guias/', cuerpo,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Guías de Tasita', url: SITIO + '/guias/',
      hasPart: GUIAS.map(g => ({ '@type': 'Article', headline: g.h1, url: `${SITIO}/guias/${g.slug}/` })) }],
  });
}

mkdirSync(path.join(RAIZ, 'guias'), { recursive: true });
writeFileSync(path.join(RAIZ, 'guias', 'index.html'), indice());
console.log('  /guias/'.padEnd(46) + 'índice con ' + GUIAS.length + ' guías');
let total = 0, flojas = [];
for (const g of GUIAS) {
  mkdirSync(path.join(RAIZ, 'guias', g.slug), { recursive: true });
  const { palabras, html } = articulo(g);
  writeFileSync(path.join(RAIZ, 'guias', g.slug, 'index.html'), html);
  total += palabras;
  if (palabras < 800) flojas.push(`${g.slug} (${palabras})`);
  console.log(`  /guias/${g.slug}/`.padEnd(46) + String(palabras).padStart(5) + ' palabras' + (palabras < 800 ? '  ← MENOS DE 800' : ''));
}
console.log(`\n${GUIAS.length} guías, ${total} palabras en total.` + (flojas.length ? `\nFALTA LARGO: ${flojas.join(', ')}` : ''));
