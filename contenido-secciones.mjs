/* ═══════════════════════════════════════════════════════════════════
   TEXTOS DE CADA SECCIÓN

   Acá vive el texto de cada página: título, descripción, introducción y
   preguntas frecuentes. Lo lee construir-secciones.mjs.

   TODO LO QUE DICE  texto: 'provisorio'  ES BORRADOR. Es corto a propósito y
   está escrito solo con cosas seguras. La Etapa 4 es reemplazarlo por textos
   definitivos de 2 o 3 párrafos, revisados por Marc; recién ahí se cambia a
   texto: 'final' y la página deja de llevar noindex.
   ═══════════════════════════════════════════════════════════════════ */

export const SECCIONES = [
  {
    slug: 'billeteras', datos: 'billeteras-list', emoji: '💼', texto: 'provisorio',
    titulo: 'Billeteras virtuales: ranking de tasas (TNA) hoy — Tasita',
    descripcion: 'Qué billetera virtual paga más hoy en Argentina. Ranking de tasas TNA de Mercado Pago, Ualá, Naranja X, Lemon, Prex y más, ordenado de mayor a menor.',
    h1: 'Billeteras virtuales',
    intro: [
      'Ranking de las billeteras virtuales que pagan rendimiento sobre tu saldo en pesos, ordenado de la que más paga a la que menos. La tasa que ves es la <strong>TNA</strong> (tasa nominal anual).',
      'Algunas billeteras ponen un tope al monto que rinde: cuando existe, figura como "Límite" en cada fila.',
    ],
    faq: [
      { p: '¿Qué es una billetera virtual?', r: 'Es una app donde guardás, enviás y recibís dinero. Varias pagan un rendimiento sobre el saldo en pesos, que se acredita todos los días, sin plazos mínimos.' },
      { p: '¿Qué significa TNA?', r: 'Tasa Nominal Anual: lo que rendiría tu plata en un año sin reinvertir los intereses. Sirve para comparar entre opciones.' },
    ],
  },
  {
    slug: 'plazos-fijos', datos: 'plazos-list', emoji: '🏦', texto: 'provisorio',
    titulo: 'Plazos fijos: tasas de los bancos hoy (TNA) — Tasita',
    descripcion: 'Qué banco paga más por un plazo fijo en pesos a 30 días. Tasas TNA actualizadas de los bancos de Argentina, ordenadas de mayor a menor.',
    h1: 'Plazos fijos',
    intro: [
      'Tasas de plazo fijo tradicional en pesos de los bancos, ordenadas de mayor a menor. Son tasas <strong>TNA para clientes</strong>, a 30 días.',
      'Con un plazo fijo el dinero queda inmovilizado hasta el vencimiento: a cambio, la tasa queda fijada de antemano.',
    ],
    faq: [
      { p: '¿Cómo funciona un plazo fijo?', r: 'Depositás un monto en un banco por un plazo (generalmente 30 días) con una tasa que se conoce de antemano. Al vencimiento recibís el capital más los intereses.' },
      { p: '¿Puedo retirar la plata antes?', r: 'En un plazo fijo tradicional, no: el dinero queda inmovilizado hasta el vencimiento.' },
    ],
  },
  {
    slug: 'plazos-fijos-uva', datos: 'pfuva-list', emoji: '📈', texto: 'provisorio',
    titulo: 'Plazos fijos UVA: tasas y condiciones — Tasita',
    descripcion: 'Plazos fijos UVA precancelables en Argentina: tasa y plazo de cada banco. Qué son, cómo funcionan y en qué se diferencian del plazo fijo tradicional.',
    h1: 'Plazos fijos UVA',
    intro: [
      'Un plazo fijo UVA ajusta el capital por la UVA, una unidad que sigue la inflación, además de pagar una tasa. Acá ves las opciones disponibles con su plazo.',
    ],
    faq: [
      { p: '¿Qué es una UVA?', r: 'La Unidad de Valor Adquisitivo es una unidad que se actualiza con la inflación. Un plazo fijo UVA ajusta tu capital por ese índice.' },
    ],
  },
  {
    slug: 'letras', datos: 'lec-list', contenedor: 'lec-list', emoji: '📄', texto: 'provisorio',
    titulo: 'Letras del Tesoro (LECAP y BONCAP): tasas y rendimiento — Tasita',
    descripcion: 'Rendimiento de las LECAP y BONCAP hoy: ganancia directa, TNA y TEM de cada letra del Tesoro en pesos, con precio de mercado actualizado.',
    h1: 'Letras del Tesoro (LECAP y BONCAP)',
    intro: [
      'Las LECAP y las BONCAP son letras del Tesoro en pesos a tasa fija: pagás un precio hoy y cobrás un monto conocido en la fecha de vencimiento.',
      'La <strong>ganancia directa</strong> es lo que ganás si la mantenés hasta el final. Si la vendés antes, recibís el precio de mercado de ese día, que puede ser mayor o menor.',
    ],
    faq: [
      { p: '¿Qué es una letra del Tesoro?', r: 'Un título de deuda del Estado que se compra con descuento y paga un monto fijo al vencimiento. La diferencia es tu ganancia.' },
      { p: '¿La ganancia está garantizada?', r: 'Si la mantenés hasta el vencimiento, cobrás el monto pactado. Si la vendés antes, el precio puede variar.' },
    ],
    volver: '/', volverTexto: 'Simular cuánto ganás en Tasita →',
  },
  {
    slug: 'dolar', datos: 'cd-list', emoji: '💵', texto: 'provisorio',
    titulo: 'Dólar hoy: cotización por banco y casa de cambio — Tasita',
    descripcion: 'Cotización del dólar hoy en Argentina por banco y entidad. Compará quién compra y vende más caro o más barato.',
    h1: 'Dólar hoy',
    intro: [
      'Cotización del dólar en distintas entidades, para comparar a dónde conviene comprar o vender.',
    ],
    faq: [
      { p: '¿Por qué el dólar cambia según el banco?', r: 'Cada entidad fija sus propios precios de compra y de venta, por eso hay diferencias entre una y otra.' },
    ],
  },
  {
    slug: 'billeteras-dolares', datos: 'billeteras-usd-list', emoji: '💵', texto: 'provisorio',
    titulo: 'Billeteras en dólares: tasas que pagan sobre tu saldo — Tasita',
    descripcion: 'Qué billeteras y apps pagan rendimiento sobre dólares en Argentina. Ranking de tasas TNA en USD.',
    h1: 'Billeteras en dólares',
    intro: [
      'Billeteras y apps que pagan un rendimiento sobre el saldo en dólares, ordenadas de mayor a menor TNA en USD.',
    ],
    faq: [
      { p: '¿Rinde lo mismo que en pesos?', r: 'No: las tasas en dólares son bastante más bajas que las de pesos, porque se rigen por otro mercado.' },
    ],
  },
  {
    slug: 'brokers', datos: 'brokers-list', contenedor: 'wallet-list', emoji: '📊', texto: 'provisorio',
    titulo: 'Brokers en Argentina: comisiones por operar acciones y CEDEARs — Tasita',
    descripcion: 'Qué broker cobra menos comisión por operar acciones y CEDEARs en Argentina. Comparación de comisiones, de menor a mayor.',
    h1: 'Brokers: comisiones',
    intro: [
      'Comisiones que cobran los brokers por operar acciones y CEDEARs online, ordenadas de menor a mayor. A la comisión se suman el IVA y los derechos de mercado.',
    ],
    faq: [
      { p: '¿Qué es un broker?', r: 'Una sociedad de bolsa habilitada para comprar y vender en tu nombre acciones, CEDEARs, bonos y otros instrumentos.' },
    ],
  },
  {
    slug: 'presupuesto', datos: null, emoji: '🎯', texto: 'provisorio',
    titulo: 'Tasita Presupuesto: controlá tus gastos desde el celular',
    descripcion: 'Tasita Presupuesto es una app para anotar ingresos y gastos y ver a dónde se va tu plata cada mes, desde el celular.',
    h1: 'Tasita Presupuesto',
    intro: [
      'Tasita Presupuesto es una app, hecha por el mismo creador de Tasita, para anotar tus ingresos y gastos y ver a dónde se va tu plata cada mes.',
      'Es una aplicación aparte: se abre desde <a href="https://presupuesto.tasita.com.ar">presupuesto.tasita.com.ar</a>.',
    ],
    faq: [
      { p: '¿Hace falta instalarla?', r: 'Se usa desde el navegador y se puede agregar a la pantalla de inicio del celular.' },
    ],
    volver: 'https://presupuesto.tasita.com.ar', volverTexto: 'Abrir Tasita Presupuesto →',
  },
];
