/* ═══════════════════════════════════════════════════════════════════
   TEXTOS DE CADA SECCIÓN

   Acá vive el texto de cada página por sección: título, descripción,
   introducción (arriba de la tabla), bloques explicativos (abajo de la tabla)
   y preguntas frecuentes. Lo lee construir-secciones.mjs.

   Regla para escribir acá: NADA de números que caduquen (la tasa de hoy, el
   dólar de hoy). Eso lo muestra la tabla, que se actualiza sola. El texto
   explica cómo funciona cada cosa, y los ejemplos de cuentas usan números
   redondos inventados a propósito para que no se desactualicen.

   texto: 'final' = la página se indexa. Cualquier otra cosa = lleva noindex.
   ═══════════════════════════════════════════════════════════════════ */

export const SECCIONES = [
  /* ─────────────────────────────────────────────  BILLETERAS  */
  {
    slug: 'billeteras', datos: 'billeteras-list', emoji: '💼', texto: 'final', home: '/',
    titulo: 'Billeteras virtuales: ranking de tasas (TNA) hoy — Tasita',
    descripcion: 'Qué billetera virtual paga más hoy en Argentina. Ranking de tasas TNA de Mercado Pago, Ualá, Naranja X, Lemon, Prex y más, ordenado de mayor a menor y actualizado solo.',
    h1: 'Billeteras virtuales: qué tasa paga cada una',
    intro: [
      'Si tenés plata guardada en una cuenta que no rinde nada, lo más probable es que la inflación se la esté comiendo de a poco. Las billeteras virtuales con cuenta remunerada pagan un rendimiento <strong>todos los días</strong> sobre tu saldo en pesos, sin plazos mínimos y sin que tengas que hacer nada: ponés la plata y empieza a rendir.',
      'Acá abajo tenés el ranking completo, de la que más paga a la que menos. La tasa que figura es la <strong>TNA</strong> (tasa nominal anual). Cuando una billetera pone un tope al monto que rinde, lo marcamos como <em>Límite</em> en su fila. Las tasas cambian seguido, así que esta lista se actualiza sola varias veces por día.',
    ],
    bloques: [
      { h2: 'Cómo leer este ranking', p: [
        'La TNA te dice cuánto rendiría tu plata en un año si la tasa se mantuviera igual todo ese tiempo. Es la forma estándar de comparar, pero ojo: en la vida real las tasas de las billeteras <strong>cambian</strong>, a veces de un día para el otro. Por eso lo que importa no es una foto, sino mirar cada tanto cuánto paga cada una.',
        'Para tener una idea concreta: dos puntos de TNA de diferencia sobre $500.000 son unos $10.000 al año, alrededor de $830 por mes. No es una fortuna, pero tampoco es nada si tenés que elegir entre dos billeteras que hacen lo mismo.',
      ]},
      { h2: 'Qué mirar además de la tasa', p: [
        '<strong>El límite.</strong> Algunas billeteras pagan la tasa más alta solo hasta cierto monto. Si tenés más plata que ese tope, el resto rinde menos o directamente no rinde. Un 20% sobre $750.000 puede valer menos que un 18% sin tope si tu saldo es grande.',
        '<strong>La disponibilidad.</strong> Lo normal es que puedas usar la plata en el momento, pero conviene confirmar cómo funciona cada billetera si necesitás sacarla.',
        '<strong>De dónde sale el rendimiento.</strong> En muchas billeteras, el saldo se invierte en fondos comunes de inversión de mercado de dinero. Por eso la tasa varía todos los días y <strong>no está garantizada</strong>. Es distinto de un plazo fijo, donde la tasa queda fija de antemano.',
        '<strong>Que sea una billetera seria.</strong> Fijate que la empresa esté registrada ante el Banco Central como proveedor de servicios de pago. Una tasa altísima de una app que nadie conoce es una señal para desconfiar, no para entusiasmarse.',
      ]},
      { h2: 'Cuándo conviene una billetera virtual', p: [
        'Es la opción ideal para la plata que vas a necesitar pronto o que querés tener a mano: el fondo de emergencia, lo que juntás para pagar algo en unos meses, el sueldo mientras llega fin de mes. Si en cambio podés dejar la plata quieta por un plazo largo, tiene sentido mirar también <a href="/plazos-fijos/">los plazos fijos</a> o <a href="/letras/">las letras del Tesoro</a>, que a veces pagan más a cambio de comprometer la plata un tiempo.',
        'Si querés profundizar, tenemos una guía para <a href="/guias/como-elegir-billetera-virtual/">elegir una billetera virtual</a> y otra que compara <a href="/guias/plazo-fijo-vs-billetera-virtual/">plazo fijo contra billetera</a>.',
      ]},
    ],
    faq: [
      { p: '¿Las tasas de las billeteras son fijas?', r: 'No. Cambian con frecuencia, a veces todos los días, porque dependen de cómo rinden las inversiones que hay detrás. Lo que ves en la tabla es la tasa de hoy, no una promesa a futuro.' },
      { p: '¿Puedo retirar mi plata cuando quiera?', r: 'En general sí: es una de las ventajas frente al plazo fijo. De todos modos, revisá las condiciones de cada billetera, porque pueden existir límites o demoras según el caso.' },
      { p: '¿Por qué una billetera paga más que otra?', r: 'Cada una tiene su estrategia comercial: algunas pagan tasas más altas para atraer clientes nuevos, a veces con un tope de monto. Y como el rendimiento depende de las inversiones que hay detrás, también puede variar de una a otra.' },
      { p: '¿Está garantizado por el Estado lo que tengo en una billetera?', r: 'El rendimiento de una billetera no es un plazo fijo bancario ni está garantizado por el Estado. Leé las condiciones de cada una antes de depositar montos importantes.' },
      { p: '¿Conviene repartir la plata entre varias billeteras?', r: 'Puede servir si hay topes de monto: poner en cada una lo que rinde a la tasa más alta. Pero también tenés que manejar más cuentas, así que depende de cuánto te compense la diferencia.' },
    ],
    guias: ['como-elegir-billetera-virtual', 'plazo-fijo-vs-billetera-virtual', 'tna-vs-tea'],
  },

  /* ─────────────────────────────────────────────  PLAZOS FIJOS  */
  {
    slug: 'plazos-fijos', datos: 'plazos-list', emoji: '🏦', texto: 'final', home: '/#plazos',
    titulo: 'Plazos fijos: tasas de los bancos hoy (TNA) — Tasita',
    descripcion: 'Qué banco paga más por un plazo fijo en pesos a 30 días. Tasas TNA de los bancos de Argentina, ordenadas de mayor a menor y actualizadas solas.',
    h1: 'Plazos fijos: qué banco paga más',
    intro: [
      'El plazo fijo es la inversión más conocida de Argentina, y con razón: es simple. Le dejás un monto a un banco por un tiempo, el banco te paga una tasa que conocés de antemano y, al vencimiento, te devuelve tu plata más los intereses. No hay sorpresas en el camino.',
      'Esta tabla muestra las tasas de <strong>plazo fijo tradicional en pesos, a 30 días</strong>, ordenadas de mayor a menor. Son tasas TNA para clientes del banco, tomadas de la información pública que publican las entidades.',
    ],
    bloques: [
      { h2: 'Cuánto ganás con un plazo fijo', p: [
        'La cuenta es sencilla. Los intereses de un plazo fijo se calculan así: <strong>capital × TNA × días ÷ 365</strong>. Por ejemplo, si ponés $1.000.000 a 30 días con una TNA del 24%, ganás aproximadamente $19.700 en el mes: 1.000.000 × 0,24 × 30 ÷ 365.',
        'Si cuando vence volvés a poner todo (capital más intereses) por otros 30 días, estás reinvirtiendo. Con ese efecto, el rendimiento de un año resulta algo mayor que la TNA: eso se llama TEA, y te lo explicamos en la guía de <a href="/guias/tna-vs-tea/">TNA contra TEA</a>.',
      ]},
      { h2: 'Qué tener en cuenta antes de elegir', p: [
        '<strong>La plata queda inmovilizada.</strong> En un plazo fijo tradicional no podés retirarla antes del vencimiento. A cambio, la tasa no se mueve: si mañana las tasas bajan, la tuya sigue igual hasta que termine el plazo.',
        '<strong>Cliente o no cliente.</strong> Los bancos suelen pagar más a sus clientes que a quienes no lo son. Las tasas de esta tabla son las de clientes. Si no tenés cuenta en ese banco, fijate si te conviene abrirla.',
        '<strong>La tasa más alta no siempre es la mejor opción.</strong> Los bancos más chicos suelen ofrecer tasas más altas para captar depósitos. Los depósitos en bancos están cubiertos por el seguro de garantía de depósitos hasta un monto máximo que define el Banco Central, pero conviene conocer la entidad a la que le dejás la plata.',
        '<strong>Mirá contra la inflación.</strong> Lo que importa al final no es la tasa nominal sino cuánto ganás por encima de la suba de precios. Para eso existen alternativas como el <a href="/plazos-fijos-uva/">plazo fijo UVA</a>.',
      ]},
      { h2: 'Plazo fijo o billetera virtual', p: [
        'Las dos opciones sirven, pero para cosas distintas. La billetera te deja usar la plata cuando quieras, con una tasa que cambia. El plazo fijo te asegura una tasa durante todo el plazo, pero te pide que la plata no la toques. Armamos una guía para ayudarte a decidir: <a href="/guias/plazo-fijo-vs-billetera-virtual/">plazo fijo vs billetera virtual</a>.',
      ]},
    ],
    faq: [
      { p: '¿Cómo funciona un plazo fijo?', r: 'Depositás un monto en un banco por un plazo determinado, generalmente 30 días, con una tasa que se conoce de antemano. Al vencimiento recibís el capital más los intereses.' },
      { p: '¿Puedo sacar la plata antes de que venza?', r: 'En un plazo fijo tradicional no: el dinero queda inmovilizado hasta la fecha de vencimiento. Si querés flexibilidad, existen otras opciones, como las billeteras virtuales.' },
      { p: '¿Qué significa TNA?', r: 'Tasa Nominal Anual: lo que rendiría tu capital en un año si la tasa se mantuviera. Para saber cuánto ganás en 30 días se la multiplica por los días y se divide por 365.' },
      { p: '¿Puedo hacer un plazo fijo desde el celular?', r: 'Sí, casi todos los bancos permiten constituirlo desde su aplicación o su home banking, sin ir a una sucursal.' },
      { p: '¿Qué pasa cuando vence?', r: 'Depende de lo que hayas elegido: muchos bancos ofrecen renovarlo automáticamente. También podés retirar la plata o cambiar de banco si encontraste una tasa mejor.' },
    ],
    guias: ['plazo-fijo-vs-billetera-virtual', 'tna-vs-tea', 'como-protegerse-de-la-inflacion'],
  },

  /* ─────────────────────────────────────────────  PLAZOS FIJOS UVA  */
  {
    slug: 'plazos-fijos-uva', datos: 'pfuva-list', emoji: '📈', texto: 'final', home: '/',
    titulo: 'Plazos fijos UVA: tasas, plazos y cómo funcionan — Tasita',
    descripcion: 'Plazos fijos UVA en Argentina: qué son, cómo ajustan por inflación, qué plazo piden y qué tasa pagan los bancos. Comparalos con el plazo fijo tradicional.',
    h1: 'Plazos fijos UVA: protegé tu plata de la inflación',
    intro: [
      'El plazo fijo tradicional te promete una tasa, pero no te asegura que esa tasa le gane a la inflación. El <strong>plazo fijo UVA</strong> intenta resolver justamente eso: tu capital se ajusta por la inflación y, además, cobrás una tasa.',
      'Abajo ves las opciones disponibles hoy, con su plazo y su tasa. Hay pocas entidades que lo ofrecen, así que la lista es corta.',
    ],
    bloques: [
      { h2: 'Qué es una UVA', p: [
        'UVA significa Unidad de Valor Adquisitivo. Es una unidad que el Banco Central actualiza todos los días siguiendo la evolución de la inflación. Cuando constituís un plazo fijo UVA, tu dinero se convierte a esa unidad, y al vencimiento se vuelve a convertir a pesos. Si la UVA subió, tu capital en pesos subió con ella.',
        'Un ejemplo con números redondos: ponés $1.000.000 y durante el plazo la UVA sube un 6%. Tu capital pasa a ser $1.060.000, y sobre eso se suma la tasa que pacte el banco. En un plazo fijo tradicional, en cambio, solo cobrarías la tasa fija sobre tus $1.000.000.',
      ]},
      { h2: 'Cuándo conviene y cuándo no', p: [
        'Conviene cuando esperás que la inflación sea alta: ahí el ajuste por UVA supera a una tasa fija. No conviene tanto cuando la inflación baja con fuerza: si los precios suben poco, el ajuste es chico y un plazo fijo tradicional puede rendir más.',
        'También hay que mirar el plazo. El plazo fijo UVA suele exigir plazos más largos que el tradicional (lo ves en cada fila, como "plazo mínimo"), así que no es para plata que vayas a necesitar pronto.',
      ]},
      { h2: 'Qué quiere decir "precancelable"', p: [
        'Algunas variantes permiten retirar la plata antes de que termine el plazo, después de un período mínimo, a cambio de condiciones distintas a las del plazo completo. Es una ventaja si te preocupa quedar encerrado, pero revisá en cada banco qué tasa te corresponde si cancelás antes.',
        'Si querés entender el tema en profundidad, escribimos una guía sobre el <a href="/guias/plazo-fijo-uva/">plazo fijo UVA</a> y otra sobre <a href="/guias/como-protegerse-de-la-inflacion/">cómo protegerse de la inflación</a>.',
      ]},
    ],
    faq: [
      { p: '¿El plazo fijo UVA siempre le gana a la inflación?', r: 'Su capital se ajusta por la inflación, así que mantiene el poder de compra y además suma una tasa. Pero no es una garantía absoluta de ganancia real: depende de la tasa pactada y de cómo se comporte la UVA.' },
      { p: '¿Se puede retirar antes del vencimiento?', r: 'Depende de la variante. Los precancelables lo permiten después de un período mínimo, con condiciones propias. Los tradicionales no.' },
      { p: '¿Por qué hay tan pocos bancos en la lista?', r: 'No todas las entidades ofrecen esta modalidad, y las condiciones cambian. Mostramos las que figuran en la información pública que se publica.' },
      { p: '¿Es mejor que un plazo fijo tradicional?', r: 'Depende de la inflación que esperes: con inflación alta, el UVA suele convenir; con inflación baja, el tradicional puede rendir más. Es una decisión entre protección y tasa.' },
    ],
    guias: ['plazo-fijo-uva', 'como-protegerse-de-la-inflacion', 'tna-vs-tea'],
  },

  /* ─────────────────────────────────────────────  LETRAS  */
  {
    slug: 'letras', datos: 'lec-list', contenedor: 'lec-list', emoji: '📄', texto: 'final', home: '/#letras',
    titulo: 'Letras del Tesoro (LECAP y BONCAP): rendimiento hoy — Tasita',
    descripcion: 'Rendimiento de las LECAP y BONCAP hoy: ganancia directa, TNA y TEM de cada letra del Tesoro en pesos, con precios de mercado actualizados solos.',
    h1: 'LECAP y BONCAP: cuánto rinde cada letra del Tesoro',
    intro: [
      'Las LECAP y las BONCAP son letras y bonos del Tesoro argentino en pesos, a tasa fija. La idea es simple: hoy pagás un precio, y en una fecha futura el Estado te devuelve un monto que ya se conoce de antemano. La diferencia entre lo que pagaste y lo que cobrás es tu ganancia.',
      'Abajo ves cada letra con su fecha de vencimiento, su rendimiento y los días que faltan. Si querés calcular cuánto ganarías con tu plata, usá <a href="/#letras">el simulador de la página principal</a>: ponés el monto y te dice el resultado.',
    ],
    bloques: [
      { h2: 'Cómo se lee cada fila', p: [
        '<strong>Ganancia directa.</strong> Es lo que ganás en total si comprás hoy y mantenés la letra hasta el vencimiento, expresada como porcentaje. Si una letra cuesta $100 y paga $104 dentro de 60 días, la ganancia directa es del 4%.',
        '<strong>TNA y TEM.</strong> Son la misma ganancia llevada a una escala que permite comparar. La TNA la lleva a un año (en el ejemplo, un 4% en 60 días equivale a una TNA de alrededor del 24%) y la TEM la lleva a un mes. Sirven para comparar una letra de 30 días con una de 200 días, que de otro modo no se pueden comparar.',
        '<strong>Días.</strong> Es el tiempo que falta hasta que cobrás, contando también los fines de semana.',
      ]},
      { h2: 'LECAP y BONCAP: en qué se diferencian', p: [
        'Las LECAP (letras capitalizables) suelen ser de corto plazo; las BONCAP (bonos capitalizables), de plazos más largos. En las dos, los intereses se capitalizan y se cobran todos juntos al vencimiento, junto con el capital. Por eso sus tickers empiezan distinto: las letras con S y los bonos con T.',
      ]},
      { h2: 'Cómo se compran y qué riesgos tienen', p: [
        'Se compran a través de un broker o agente de bolsa, igual que una acción. Podés mantenerlas hasta el vencimiento o venderlas antes en el mercado.',
        'Lo importante: <strong>si las mantenés hasta el final, cobrás el monto pactado</strong>. Pero si las vendés antes, recibís el precio de mercado de ese día, que puede ser mayor o menor al que esperabas. Los precios se mueven con las tasas y con la confianza del mercado en el Estado. Y como cualquier inversión en deuda, siempre existe el riesgo de que el emisor no pague.',
        'Los números que ves acá <strong>no descuentan la comisión</strong> de tu broker, que reduce un poco la ganancia real. Si querés entender todo desde cero, armamos la guía <a href="/guias/que-es-una-lecap/">qué es una LECAP</a>.',
      ]},
    ],
    faq: [
      { p: '¿Qué es una LECAP?', r: 'Una Letra Capitalizable del Tesoro: un título de deuda en pesos a tasa fija. Pagás un precio hoy y cobrás un monto conocido al vencimiento, con los intereses ya capitalizados.' },
      { p: '¿La ganancia está garantizada?', r: 'Si la mantenés hasta el vencimiento y el Estado cumple, cobrás el monto pactado. Si la vendés antes, el precio puede variar. Siempre existe el riesgo del emisor.' },
      { p: '¿Cuánta plata necesito para empezar?', r: 'Las letras se compran por unidades y el valor de cada una es bajo, así que se puede empezar con montos relativamente chicos. Lo que cambia es la comisión de cada broker.' },
      { p: '¿Por qué cambian las tasas durante el día?', r: 'Porque el precio de la letra se mueve con la oferta y la demanda. Cuando el precio sube, la tasa que queda por delante baja, y al revés.' },
      { p: '¿Qué es la TEM?', r: 'La Tasa Efectiva Mensual: lo que rinde la letra por cada mes, considerando el efecto de la capitalización. Sirve para comparar letras de distinto plazo.' },
    ],
    guias: ['que-es-una-lecap', 'como-empezar-a-invertir-con-poca-plata', 'tna-vs-tea'],
  },

  /* ─────────────────────────────────────────────  DÓLAR  */
  {
    slug: 'dolar', datos: 'cd-list', emoji: '💵', texto: 'final', home: '/',
    titulo: 'Dólar hoy: dónde comprar más barato, por entidad — Tasita',
    descripcion: 'Comparación del precio del dólar entre bancos y casas de cambio en Argentina. Mirá dónde comprar dólares más barato hoy, ordenado de menor a mayor.',
    h1: 'Dólar hoy: dónde conviene comprar',
    intro: [
      'El precio del dólar no es el mismo en todos lados. Cada banco, billetera y casa de cambio fija su propio precio, y la diferencia entre la más barata y la más cara puede ser importante cuando comprás un monto grande. Esta tabla te ordena las entidades de la que vende el dólar <strong>más barato</strong> a la más cara.',
      'Los precios son los de venta, es decir, lo que pagarías vos por comprar un dólar, y se actualizan solos. Fijate que el precio final puede incluir impuestos o recargos que dependen de tu caso.',
    ],
    bloques: [
      { h2: 'Por qué hay tantas cotizaciones', p: [
        'En Argentina conviven distintos tipos de dólar: el oficial, el blue, el MEP (o bolsa), el contado con liquidación, el tarjeta y el cripto. Cada uno sale de una operación distinta y tiene su propia cotización. Y dentro de cada tipo, cada entidad agrega su margen.',
        'Eso significa que, para el mismo tipo de operación, hay diferencias de un lugar a otro. Comparar antes de comprar es la manera más fácil de no regalar plata.',
      ]},
      { h2: 'Qué mirar al comparar', p: [
        '<strong>El spread.</strong> Es la diferencia entre el precio de compra y el de venta. Cuanto más ancho, más caro te sale entrar y salir.',
        '<strong>Los límites y requisitos.</strong> Algunas entidades limitan la cantidad que podés comprar o te piden estar registrado. Una cotización muy baja no sirve si no podés acceder a ella.',
        '<strong>La velocidad y la seguridad.</strong> Operá siempre con entidades reconocidas. Un precio demasiado bueno para ser cierto, por lo general, no lo es.',
      ]},
      { h2: 'Más sobre el dólar', p: [
        'Si querés entender de dónde sale cada tipo de dólar, mirá la guía de <a href="/guias/dolar-mep-como-funciona/">cómo funciona el dólar MEP</a>. Y si lo que buscás es rendimiento sobre tus dólares, mirá <a href="/billeteras-dolares/">las billeteras en dólares</a>.',
      ]},
    ],
    faq: [
      { p: '¿Por qué el dólar tiene distinto precio según el lugar?', r: 'Cada entidad fija sus propios precios de compra y de venta, con su margen. Por eso hay diferencias aun dentro del mismo tipo de dólar.' },
      { p: '¿Qué es el dólar MEP?', r: 'Es el dólar que se obtiene comprando un bono en pesos y vendiéndolo en dólares en el mercado de capitales. Lo explicamos en detalle en nuestra guía.' },
      { p: '¿Los precios de la tabla incluyen impuestos?', r: 'No necesariamente. Los precios son los que publica cada entidad, y el costo final puede incluir recargos o impuestos según tu situación.' },
      { p: '¿Cada cuánto se actualiza la tabla?', r: 'Se actualiza sola varias veces al día. De todos modos, antes de operar confirmá el precio en la entidad, porque puede cambiar de un minuto a otro.' },
    ],
    guias: ['dolar-mep-como-funciona', 'como-protegerse-de-la-inflacion', 'como-empezar-a-invertir-con-poca-plata'],
  },

  /* ─────────────────────────────────────────────  BILLETERAS EN DÓLARES  */
  {
    slug: 'billeteras-dolares', datos: 'billeteras-usd-list', emoji: '💵', texto: 'final', home: '/',
    titulo: 'Billeteras en dólares: qué tasa pagan sobre tu saldo — Tasita',
    descripcion: 'Qué billeteras y apps pagan rendimiento sobre tus dólares en Argentina. Ranking de tasas TNA en USD, de mayor a menor.',
    h1: 'Billeteras en dólares: cuánto rinden tus dólares',
    intro: [
      'Muchos argentinos guardan dólares, y la mayoría los deja quietos, sin rendir nada. Algunas billeteras y aplicaciones pagan un rendimiento sobre el saldo en dólares, y vale la pena saber cuánto: puede ser una forma de que tus dólares trabajen sin salir del dólar.',
      'Esta tabla ordena las opciones de mayor a menor <strong>TNA en dólares</strong>. Cuando una entidad pone un límite al monto que rinde, figura en su fila.',
    ],
    bloques: [
      { h2: 'Por qué las tasas en dólares son tan bajas', p: [
        'Si venís mirando las tasas en pesos, te va a sorprender lo bajas que son las de dólares: es normal. La tasa de una moneda refleja lo que cuesta prestar esa moneda y la inflación esperada. En dólares, la inflación es mucho menor y el dinero es más barato, por lo que los rendimientos son de unos pocos puntos al año.',
        'Eso no significa que no valga la pena. Para quien ya ahorra en dólares, cobrar algo sobre ese saldo es mejor que nada. Pero conviene tener las expectativas ajustadas: no vas a duplicar tus dólares.',
      ]},
      { h2: 'Cosas a tener en cuenta', p: [
        '<strong>No compares con una tasa en pesos.</strong> Una tasa en dólares y una en pesos no son comparables de forma directa: las monedas se mueven distinto. Lo que sí podés comparar son las billeteras en dólares entre sí.',
        '<strong>Mirá los límites.</strong> Varias entidades solo pagan sobre un monto máximo. Si tenés más dólares que ese tope, el excedente no rinde.',
        '<strong>Confirmá las condiciones.</strong> Las tasas y los requisitos cambian. Antes de mover una suma importante, revisá la información oficial de la entidad.',
      ]},
      { h2: 'Otras formas de usar tus dólares', p: [
        'Si pensás en el largo plazo, existen otras alternativas con más riesgo y más rendimiento posible. Para conocer los fundamentos, mirá nuestra guía de <a href="/guias/como-empezar-a-invertir-con-poca-plata/">cómo empezar a invertir con poca plata</a> y la de <a href="/guias/que-son-los-cedears/">qué son los CEDEARs</a>.',
      ]},
    ],
    faq: [
      { p: '¿Cuánto rinden los dólares en una billetera?', r: 'Mucho menos que los pesos: suele ser un porcentaje de un solo dígito por año. La tabla de arriba muestra la tasa actual de cada una.' },
      { p: '¿Los dólares en una billetera están garantizados?', r: 'Las billeteras no son bancos y el rendimiento no es un depósito a plazo garantizado por el Estado. Revisá las condiciones de cada una.' },
      { p: '¿Por qué algunas billeteras tienen límite?', r: 'Para controlar cuánto dinero reciben a esa tasa. Por encima del tope, el saldo puede no rendir o hacerlo a una tasa menor.' },
      { p: '¿Puedo retirar mis dólares cuando quiera?', r: 'En general sí, pero las condiciones varían según la entidad. Conviene leerlas antes de depositar.' },
    ],
    guias: ['como-empezar-a-invertir-con-poca-plata', 'dolar-mep-como-funciona', 'que-son-los-cedears'],
  },

  /* ─────────────────────────────────────────────  BROKERS  */
  {
    slug: 'brokers', datos: 'brokers-list', contenedor: 'wallet-list', emoji: '📊', texto: 'final', home: '/',
    titulo: 'Brokers en Argentina: comisiones de acciones y CEDEARs — Tasita',
    descripcion: 'Comparación de comisiones de los brokers de Argentina para operar acciones y CEDEARs online, de menor a mayor, con qué se suma a cada una.',
    h1: 'Brokers: quién cobra menos comisión',
    intro: [
      'Para comprar acciones, CEDEARs, bonos o letras necesitás un <strong>broker</strong>: una sociedad de bolsa o agente habilitado para operar en el mercado en tu nombre. Cada una cobra una comisión por operar, y la diferencia entre unas y otras puede ser grande si operás seguido.',
      'Esta tabla ordena a los brokers de la comisión más baja a la más alta, para operaciones online con acciones y CEDEARs. Es un punto de partida: antes de abrir una cuenta, mirá siempre las condiciones vigentes en el sitio de cada uno.',
    ],
    bloques: [
      { h2: 'Qué se suma a la comisión', p: [
        'El porcentaje que ves en la tabla es la comisión del broker, y <strong>no es lo único que pagás</strong>. Sobre esa comisión se suma el IVA, y además hay derechos de mercado que cobran las bolsas y los entes de liquidación. El costo total de cada operación es la suma de todo eso.',
        'Un ejemplo con números redondos: si comprás $100.000 en acciones y la comisión es del 0,50%, el broker te cobra $500, más el IVA sobre esos $500, más los derechos de mercado. Si operás una sola vez al mes, la diferencia entre un broker barato y uno caro es mínima; si operás todos los días, se nota mucho.',
      ]},
      { h2: 'Qué mirar además de la comisión', p: [
        '<strong>Costos de mantenimiento.</strong> Algunos brokers cobran por tener la cuenta, o por ciertos servicios. Una comisión baja con un costo fijo alto puede salirte más caro.',
        '<strong>La plataforma.</strong> Una aplicación clara y estable vale mucho cuando estás empezando. Probá la de cada uno.',
        '<strong>Los instrumentos.</strong> No todos ofrecen lo mismo: acciones, CEDEARs, bonos, letras, fondos, o dólar MEP. Elegí uno que tenga lo que vas a usar.',
        '<strong>Que esté habilitado.</strong> Verificá que sea un agente registrado ante la Comisión Nacional de Valores. Es la mejor forma de evitar estafas.',
      ]},
      { h2: 'Para empezar', p: [
        'Si recién estás aprendiendo, no te obsesiones con la comisión más baja del mercado: lo importante es entender lo que comprás. Podés empezar con nuestra guía de <a href="/guias/como-empezar-a-invertir-con-poca-plata/">cómo empezar a invertir con poca plata</a> y la de <a href="/guias/que-son-los-cedears/">qué son los CEDEARs</a>.',
      ]},
    ],
    faq: [
      { p: '¿Qué es un broker?', r: 'Una sociedad de bolsa o agente habilitado para comprar y vender en tu nombre acciones, CEDEARs, bonos, letras y otros instrumentos. Vos das las órdenes y el broker las ejecuta.' },
      { p: '¿Qué comisión es buena?', r: 'Las de la tabla están entre las más bajas del mercado. Lo que más importa es el costo total: comisión más IVA más derechos de mercado, y los costos fijos si existen.' },
      { p: '¿Cómo sé si un broker es confiable?', r: 'Verificá que esté registrado ante la Comisión Nacional de Valores. Desconfiá de quien te prometa rendimientos garantizados o te pida transferir plata a una cuenta personal.' },
      { p: '¿Necesito mucha plata para abrir una cuenta?', r: 'En general no hay un mínimo alto. Podés empezar con montos chicos, aunque conviene considerar el efecto de la comisión sobre operaciones muy pequeñas.' },
    ],
    guias: ['como-empezar-a-invertir-con-poca-plata', 'que-son-los-cedears', 'que-es-una-lecap'],
  },

  /* ─────────────────────────────────────────────  PRESUPUESTO  */
  {
    slug: 'presupuesto', datos: null, emoji: '🎯', texto: 'final', home: '/',
    titulo: 'Tasita Presupuesto: controlá tus gastos desde el celular',
    descripcion: 'Tasita Presupuesto es una app para anotar tus ingresos y gastos y ver a dónde se va tu plata cada mes, desde el celular. Sencilla y en español.',
    h1: 'Tasita Presupuesto: a dónde se va tu plata',
    intro: [
      'Antes de pensar en dónde invertir, conviene saber cuánta plata te sobra. Ahí es donde la mayoría se tropieza: llega fin de mes y no queda claro en qué se fue el sueldo. <strong>Tasita Presupuesto</strong> es una aplicación pensada justo para eso, para anotar tus ingresos y tus gastos y ver, de un vistazo, a dónde va tu plata.',
      'Es una aplicación aparte de este comparador, hecha por el mismo creador. Se abre desde <a href="https://presupuesto.tasita.com.ar">presupuesto.tasita.com.ar</a> y funciona desde el navegador del celular.',
    ],
    bloques: [
      { h2: 'Para qué sirve', p: [
        'La idea es sencilla: cargás cada ingreso y cada gasto en pocos toques, y la app te los ordena por categoría. Podés ver cuánto gastaste en gastos fijos, en gastos variables y en tarjeta, cómo viene el mes y cuánto te queda. Todo con una pantalla de inicio clara y sin planillas.',
        'También podés ver los montos en dólares con un solo botón, algo útil en un país donde mucha gente piensa en las dos monedas a la vez.',
      ]},
      { h2: 'Por qué conviene llevar un presupuesto', p: [
        '<strong>Te muestra a dónde va la plata.</strong> Los gastos chicos y repetidos suelen sumar más de lo que parece. Verlos anotados lo hace evidente.',
        '<strong>Te dice cuánto podés ahorrar.</strong> Sin saber cuánto te sobra, es difícil decidir cuánto poner en una billetera, un plazo fijo o una letra.',
        '<strong>Te ayuda a cumplir objetivos.</strong> Juntar para un viaje, para un fondo de emergencia o para empezar a invertir es mucho más fácil con un número concreto.',
      ]},
      { h2: 'Y después, a hacer rendir lo que ahorrás', p: [
        'Una vez que sabés cuánto te sobra, el siguiente paso es que esa plata no se quede quieta. Para eso tenés este comparador: mirá <a href="/billeteras/">las billeteras virtuales</a>, <a href="/plazos-fijos/">los plazos fijos</a> y <a href="/letras/">las letras del Tesoro</a>, o empezá por la guía de <a href="/guias/como-empezar-a-invertir-con-poca-plata/">cómo empezar a invertir con poca plata</a>.',
      ]},
    ],
    faq: [
      { p: '¿Hace falta instalar algo?', r: 'No. Tasita Presupuesto se usa desde el navegador del celular y podés agregarla a la pantalla de inicio para abrirla como cualquier otra app.' },
      { p: '¿Se conecta con mis cuentas bancarias?', r: 'No: vos cargás los movimientos a mano. No te pedimos acceso a tus cuentas ni a tus claves.' },
      { p: '¿Se puede ver todo en dólares?', r: 'Sí, hay un botón para pasar los montos de pesos a dólares y volver, en todas las pantallas.' },
      { p: '¿Es gratis?', r: 'Tiene un período de prueba para que la pruebes sin compromiso. Las condiciones están dentro de la propia aplicación.' },
    ],
    guias: ['como-empezar-a-invertir-con-poca-plata', 'como-protegerse-de-la-inflacion', 'plazo-fijo-vs-billetera-virtual'],
    volver: 'https://presupuesto.tasita.com.ar', volverTexto: 'Abrir Tasita Presupuesto →',
  },
];
