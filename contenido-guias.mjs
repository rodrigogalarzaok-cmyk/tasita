/* ═══════════════════════════════════════════════════════════════════
   LAS GUÍAS

   Diez artículos para quien recién empieza. Están repartidos en tres archivos
   para que cada uno sea fácil de editar:
     contenido-guias-1.mjs  billeteras, plazo fijo vs billetera, LECAP, plazo fijo UVA
     contenido-guias-2.mjs  dólar MEP, FCI money market, TNA vs TEA
     contenido-guias-3.mjs  empezar a invertir, CEDEARs, inflación
     contenido-guias-ampliacion.mjs  ejemplos resueltos, errores comunes y checklists de cada guía

   Reglas que siguen todos los textos:
   - Los números de los ejemplos son redondos e inventados a propósito, así no se
     desactualizan. Las tasas de hoy las muestra la tabla de cada sección.
   - Cada cuenta de los ejemplos está verificada.
   - Es información general, no asesoramiento financiero.
   ═══════════════════════════════════════════════════════════════════ */
import { GUIAS_1 } from './contenido-guias-1.mjs';
import { GUIAS_2 } from './contenido-guias-2.mjs';
import { GUIAS_3 } from './contenido-guias-3.mjs';
import { AMPLIACION } from './contenido-guias-ampliacion.mjs';

export const FECHA_PUBLICACION = '2026-10-27';
/* Cada guía lleva sus secciones base más las de contenido-guias-ampliacion.mjs */
export const GUIAS = [...GUIAS_1, ...GUIAS_2, ...GUIAS_3].map(g => ({
  ...g, secciones: [...g.secciones, ...(AMPLIACION[g.slug] || [])],
}));
