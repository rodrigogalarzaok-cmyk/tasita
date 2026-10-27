/* Guías 1 a 4: billeteras, plazo fijo vs billetera, LECAP y plazo fijo UVA.
   Los números de los ejemplos son redondos e inventados a propósito (no son la tasa de hoy)
   y las cuentas están verificadas. */

export const GUIAS_1 = [
  /* ─────────────────────────────────────────────  1. ELEGIR BILLETERA  */
  {
    slug: 'como-elegir-billetera-virtual',
    titulo: 'Cómo elegir una billetera virtual en Argentina — Tasita',
    descripcion: 'Qué mirar antes de elegir una billetera virtual: tasa, límites, disponibilidad, seguridad y costos. Una guía simple para no equivocarte.',
    h1: 'Cómo elegir una billetera virtual',
    resumen: 'Qué mirar además de la tasa para no equivocarte.',
    cta: ['/billeteras/', 'Ver el ranking de billeteras de hoy →'],
    intro: [
      `Hoy hay más de una docena de billeteras virtuales que te pagan un rendimiento por tener la plata ahí, y todas se promocionan como "la que más paga". Si abrís cada app para comparar vas a perder media hora, y al día siguiente las tasas ya cambiaron. Entonces, ¿cómo elegís bien?`,
      `Te lo explico como se lo explicaría a un amigo: la tasa importa, pero es solo una parte. Hay cinco cosas más que pesan igual o más, y la mayoría de la gente las ignora hasta que le toca un problema.`,
    ],
    secciones: [
      { h2: '1. La tasa, pero entendiéndola', p: [
        `La tasa que anuncian las billeteras es una <strong>TNA</strong>, tasa nominal anual. Es la forma estándar de comparar: te dice cuánto rendiría tu plata en un año si la tasa no se moviera. Pero se mueve. En las billeteras la tasa cambia seguido, a veces todos los días, porque depende de cómo rinden las inversiones que hay detrás.`,
        `Por eso, un error clásico es elegir la billetera que hoy paga un punto más y quedarse ahí para siempre. Esa diferencia puede desaparecer en una semana. Lo sensato es mirar el ranking cada tanto y cambiar solo si la diferencia es grande y sostenida.`,
        `Para tener una idea de lo que está en juego: dos puntos de TNA de diferencia sobre $500.000 son $10.000 al año, alrededor de $830 por mes. Está bien tenerlo en cuenta, pero no vale la pena perder tiempo ni asumir riesgos por eso.`,
      ]},
      { h2: '2. El límite de monto', p: [
        `Muchas billeteras pagan su tasa más alta solamente hasta cierto monto. Si tu saldo es mayor que ese tope, lo que sobra rinde menos o no rinde. Una billetera que paga 20% con un límite de $750.000 puede convenirte menos que otra que paga 18% sin límite, si vos tenés $2.000.000.`,
        `La cuenta es simple: calculá cuánto ganás en cada caso considerando solo la parte que rinde. Si tenés mucha plata, a veces conviene repartirla entre dos billeteras, poniendo en cada una el monto que cubre su tope.`,
      ]},
      { h2: '3. Cuánto tardás en usar tu plata', p: [
        `Una de las grandes ventajas de la billetera frente al plazo fijo es que la plata está disponible. Pero esa disponibilidad puede variar de una a otra: en algunas la tenés al instante, en otras puede haber demoras para rescatar. Si es plata que podés necesitar de un día para el otro, confirmá cómo funciona antes de depositar.`,
      ]},
      { h2: '4. Que sea una empresa seria', p: [
        `Esto es lo que más importa y lo que menos se mira. Antes de poner plata en cualquier billetera, fijate que la empresa esté registrada ante el Banco Central como proveedor de servicios de pago, y que tenga un historial. Una tasa altísima de una aplicación que nadie conoce no es una oportunidad: es una alarma.`,
        `Un criterio práctico: si una billetera te promete un rendimiento muy por encima de todas las demás, preguntate de dónde sale. Nadie regala plata. Si no entendés cómo gana la empresa para pagarte tanto, desconfiá.`,
        `Y un detalle importante: lo que rinde una billetera <strong>no es un plazo fijo bancario ni está garantizado por el Estado</strong>. Es una inversión con sus propias condiciones. Leelas.`,
      ]},
      { h2: '5. La seguridad de tu cuenta', p: [
        `Una billetera con la mejor tasa del mundo no sirve si te vacían la cuenta. Activá siempre la verificación en dos pasos, usá una clave que no repitas en otros lados y no compartas nunca códigos que te lleguen por mensaje, aunque quien te los pida diga ser de la empresa. Las estafas por mensaje y por llamada son la forma más común de perder plata, y ninguna tasa te compensa.`,
      ]},
      { h2: '6. La comodidad y los extras', p: [
        `Si vas a usarla todos los días, importa que la aplicación sea clara y rápida, que tenga buena atención cuando algo sale mal y, si te interesa, beneficios como tarjeta o descuentos. Son cosas que no figuran en el ranking de tasas, pero que hacen que una billetera te resulte cómoda o te la hagas odiar.`,
      ]},
    ],
    conclusion: [
      `En resumen: usá el ranking para saber quién paga más hoy, y después filtrá con el límite, la disponibilidad, la seriedad de la empresa y tu comodidad. Si dos billeteras están parejas, elegí la que te inspire más confianza, no la que paga una décima más.`,
      `Y recordá que no tenés que casarte con ninguna: podés tener plata en más de una y moverla cuando la diferencia lo justifique. Lo importante es que esa plata no esté quieta en una cuenta que no rinde nada.`,
    ],
    faq: [
      { p: '¿Puedo tener plata en varias billeteras a la vez?', r: 'Sí. Es habitual repartir el saldo para aprovechar los topes de monto de cada una. Solo tené en cuenta que manejar más cuentas exige más atención.' },
      { p: '¿Qué pasa si la tasa de mi billetera baja?', r: 'Como la tasa de las billeteras varía, puede bajar. Si la diferencia con otra opción es grande, podés mover tu plata. Mirá el ranking de vez en cuando.' },
      { p: '¿Es seguro dejar mucha plata en una billetera?', r: 'Depende de la empresa. Para montos grandes conviene elegir entidades registradas ante el Banco Central y conocer sus condiciones. Y para plata que no vas a tocar por un tiempo, evaluá un plazo fijo.' },
    ],
    relacionadas: ['plazo-fijo-vs-billetera-virtual', 'fci-money-market', 'tna-vs-tea'],
  },

  /* ─────────────────────────────────────────────  2. PLAZO FIJO VS BILLETERA  */
  {
    slug: 'plazo-fijo-vs-billetera-virtual',
    titulo: 'Plazo fijo o billetera virtual: cuál conviene y cuándo — Tasita',
    descripcion: 'Comparamos plazo fijo y billetera virtual: rendimiento, liquidez, riesgo y para qué sirve cada una. Con ejemplos de cuentas y una estrategia para combinarlas.',
    h1: 'Plazo fijo o billetera virtual: ¿cuál conviene?',
    resumen: 'Cuándo sirve cada una y cómo usarlas juntas.',
    cta: ['/plazos-fijos/', 'Ver las tasas de plazo fijo de hoy →'],
    intro: [
      `Es la pregunta que más me hacen: "¿Dónde pongo mi plata, en un plazo fijo o en una billetera?". La respuesta honesta es que <strong>depende de para qué la necesites</strong>. No son competidoras: son herramientas distintas, y muchas veces lo mejor es usar las dos.`,
      `Vamos a compararlas en lo que importa de verdad: cuánto rinden, qué tan disponible está la plata, qué tan fija es la tasa y qué riesgos tiene cada una.`,
    ],
    secciones: [
      { h2: 'La diferencia de fondo', p: [
        `El <strong>plazo fijo</strong> es un acuerdo: le prestás tu plata al banco por un tiempo (generalmente 30 días) y el banco te garantiza una tasa. A cambio, no podés tocar esa plata hasta el vencimiento. Sabés exactamente cuánto vas a cobrar desde el día uno.`,
        `La <strong>billetera virtual</strong> funciona al revés: tu plata está disponible en todo momento, pero la tasa que te pagan puede cambiar. No hay un compromiso de plazo, pero tampoco hay una tasa asegurada.`,
        `En una frase: el plazo fijo te da <em>certeza</em> a cambio de <em>libertad</em>; la billetera te da <em>libertad</em> a cambio de <em>certeza</em>.`,
      ]},
      { h2: 'Cuánto ganás en cada una: un ejemplo', p: [
        `Imaginemos que tenés $1.000.000 por un mes. Un plazo fijo a 30 días con una TNA del 24% te da: 1.000.000 × 0,24 × 30 ÷ 365 = <strong>$19.726</strong>.`,
        `Una billetera que hoy paga una TNA del 22% te rendiría, en el mismo mes: 1.000.000 × 0,22 × 30 ÷ 365 = <strong>$18.082</strong>. Una diferencia de unos $1.600 en el mes.`,
        `Fijate qué chica es la diferencia: $1.600 sobre un millón. Lo que sí es grande es la diferencia en flexibilidad. Con la billetera podés sacar la plata mañana si te surge algo; con el plazo fijo, no. Y además la tasa de la billetera puede subir o bajar durante el mes, así que ese número es solo una foto.`,
      ]},
      { h2: 'Cuándo conviene el plazo fijo', p: [
        `Cuando tenés plata que <strong>sabés que no vas a necesitar</strong> durante el plazo, y querés asegurarte una tasa. También cuando pensás que las tasas pueden bajar: con el plazo fijo, la tuya queda congelada hasta el vencimiento. Y cuando querés la tranquilidad de un depósito bancario, que además está cubierto por el seguro de garantía de depósitos hasta el monto que define el Banco Central.`,
      ]},
      { h2: 'Cuándo conviene la billetera', p: [
        `Cuando la plata es para el día a día o puede hacerte falta pronto: el sueldo hasta que lo gastás, el fondo de emergencia, lo que juntás para una compra próxima. También si querés empezar con montos chicos o si las tasas están subiendo, porque en la billetera te beneficiás de la suba enseguida.`,
      ]},
      { h2: 'La estrategia que más me gusta: usar las dos', p: [
        `Pensá tu plata en tres cajones. El primero es el <strong>dinero de uso inmediato</strong>: lo que vas a gastar este mes. Ahí va la billetera, o directamente la cuenta del banco. El segundo es el <strong>fondo de emergencia</strong>: unos meses de gastos, que tiene que estar disponible pero que idealmente rinde algo. Ahí también va la billetera. El tercero es el <strong>ahorro que no vas a tocar</strong> por un tiempo, y ahí sí podés usar el plazo fijo, o mirar las <a href="/letras/">letras del Tesoro</a> si te animás a algo un poco más avanzado.`,
        `Así no tenés toda la plata encerrada ni toda suelta, y cada pesito trabaja en el lugar que le corresponde.`,
      ]},
      { h2: 'Los riesgos de cada una', p: [
        `El riesgo del plazo fijo es el <strong>costo de oportunidad</strong>: si las tasas suben durante el mes, vos te quedás con la tuya. Y el de la inflación: si los precios suben más que tu tasa, perdés poder de compra, algo que pasa con cualquier inversión a tasa fija.`,
        `El riesgo de la billetera es que la tasa baje, y que, como no es un depósito bancario, sus condiciones y su respaldo dependen de la empresa. Por eso conviene elegir bien: tenemos una guía sobre <a href="/guias/como-elegir-billetera-virtual/">cómo elegir una billetera virtual</a>.`,
      ]},
    ],
    conclusion: [
      `No hay una ganadora absoluta. Si necesitás la plata pronto, billetera. Si querés una tasa asegurada y podés esperar, plazo fijo. Y si tenés suficiente, usá las dos. Lo único que casi nunca conviene es dejar la plata quieta en una cuenta que no rinde nada.`,
    ],
    faq: [
      { p: '¿Cuál rinde más, el plazo fijo o la billetera?', r: 'Depende del momento: a veces el plazo fijo paga un poco más, a veces la billetera. Las diferencias suelen ser chicas. Lo que más cambia es la flexibilidad.' },
      { p: '¿Puedo tener un plazo fijo y una billetera a la vez?', r: 'Sí, y es una buena idea: la billetera para la plata que podés necesitar y el plazo fijo para la que no vas a tocar.' },
      { p: '¿Qué pasa si necesito la plata de un plazo fijo antes de tiempo?', r: 'En un plazo fijo tradicional no podés retirarla antes del vencimiento. Por eso conviene poner solo plata que no vas a necesitar.' },
    ],
    relacionadas: ['como-elegir-billetera-virtual', 'tna-vs-tea', 'como-protegerse-de-la-inflacion'],
  },

  /* ─────────────────────────────────────────────  3. LECAP  */
  {
    slug: 'que-es-una-lecap',
    titulo: 'Qué es una LECAP y cómo funciona (guía simple) — Tasita',
    descripcion: 'Qué es una LECAP (letra capitalizable del Tesoro), cómo se calcula su rendimiento, cómo se compra y qué riesgos tiene. Explicado paso a paso y con ejemplos.',
    h1: 'Qué es una LECAP y cómo funciona',
    resumen: 'Cómo se calcula lo que ganás y cómo se compra, paso a paso.',
    cta: ['/letras/', 'Ver el rendimiento de las letras hoy →'],
    intro: [
      `Si miraste inversiones en Argentina, seguro escuchaste hablar de las LECAP. Suenan complicadas, pero la idea de fondo es muy simple. Te la voy a explicar sin vueltas.`,
      `Una <strong>LECAP</strong> (Letra Capitalizable del Tesoro) es un título de deuda del Estado argentino, en pesos y a tasa fija. Vos le prestás plata al Estado por un tiempo, y el Estado te la devuelve con intereses en una fecha determinada. Es como un plazo fijo, pero con el Estado como deudor y con la posibilidad de comprar y vender en el mercado.`,
    ],
    secciones: [
      { h2: 'Cómo funciona, con un ejemplo', p: [
        `Imaginá que hay una letra que vence en 60 días y que hoy cuesta $100. Esa letra te promete pagar $104 al vencimiento. Si la comprás hoy y la mantenés hasta el final, cobrás $104: tu ganancia es de $4 sobre $100.`,
        `A esa ganancia total se la llama <strong>ganancia directa</strong>: 4%. Es lo más claro de todo, porque te dice cuánto vas a ganar si esperás hasta el final. No depende de que la tasa suba o baje después de que compraste: el monto a cobrar ya está definido.`,
        `Como son letras que se compran con descuento (pagás menos de lo que vas a cobrar), no hay un "interés" que cobrás cada mes: el rendimiento está todo en la diferencia entre el precio de compra y el de vencimiento. Y como "capitalizable" significa que los intereses se suman al capital y se cobran juntos al final, no hay pagos intermedios.`,
      ]},
      { h2: 'Cómo leer TNA, TEM y días', p: [
        `Una letra de 30 días y otra de 200 días no se pueden comparar mirando solo la ganancia directa, porque una te hace esperar mucho más. Por eso se las lleva a una misma escala.`,
        `La <strong>TNA</strong> lleva la ganancia a un año. En el ejemplo, un 4% en 60 días equivale a una TNA de 4% × 365 ÷ 60 = <strong>24,3%</strong> aproximadamente. La <strong>TEM</strong> la lleva a un mes, considerando la capitalización: el 4% en 60 días son unos 1,98% por mes. Con esas dos cifras ya podés compararla con un plazo fijo o una billetera.`,
        `Los <strong>días</strong> son lo que falta hasta cobrar, contando fines de semana. Es el dato que más te importa si pensás en cuándo vas a necesitar la plata.`,
      ]},
      { h2: 'LECAP y BONCAP', p: [
        `Vas a ver dos familias. Las <strong>LECAP</strong> (letras) suelen ser de plazos más cortos. Las <strong>BONCAP</strong> (bonos capitalizables) tienen plazos más largos. Funcionan igual: pagás hoy, cobrás todo junto al vencimiento.`,
        `Los nombres de cada una tienen un código que te dice cuándo vencen: por ejemplo, S30N6 es una letra que vence el 30 de noviembre de 2026, y T30J7 es un bono que vence el 30 de junio de 2027. Las letras del mes son: E enero, F febrero, M marzo, A abril, Y mayo, J junio, L julio, G agosto, S septiembre, O octubre, N noviembre y D diciembre. El número final es el último dígito del año.`,
      ]},
      { h2: 'Cómo se compran', p: [
        `Se compran como cualquier otro título: necesitás una cuenta en un <strong>broker</strong> (una sociedad de bolsa o agente registrado), transferirle pesos, buscar el código de la letra y dar la orden de compra. Muchos brokers lo permiten desde una aplicación en pocos pasos.`,
        `Hay que tener en cuenta que la compra no se acredita el mismo día: se liquida al día hábil siguiente. Esto importa porque el plazo para vos arranca ese día, y por eso la TNA que ves se calcula desde ahí. También cada broker cobra una comisión, que reduce un poco tu ganancia.`,
      ]},
      { h2: 'Qué pasa al vencimiento, y qué riesgos hay', p: [
        `Al vencimiento, el Estado paga y el dinero se acredita en tu cuenta del broker. Desde ahí podés retirarlo o reinvertirlo en otra letra.`,
        `Los riesgos hay que conocerlos. Si mantenés la letra hasta el final, cobrás lo pactado. Pero si necesitás vender antes, vas a recibir el <strong>precio de mercado de ese día</strong>, que puede ser mayor o menor que el que pagaste. El precio se mueve con las tasas y con la confianza que haya en el Estado. Y siempre existe el riesgo de que el emisor, en este caso el Estado, no cumpla. Por eso no es una inversión "sin riesgo", aunque suele considerarse de las más conservadoras dentro del mercado de capitales.`,
      ]},
      { h2: 'LECAP o plazo fijo: ¿cuál conviene?', p: [
        `Depende de las tasas del momento y de tu comodidad. Las letras pueden pagar más que un plazo fijo, y permiten vender antes si lo necesitás, algo que el plazo fijo no deja. A cambio, requieren abrir una cuenta en un broker, tienen comisión y su precio puede variar. Podés ver cómo están hoy en <a href="/letras/">nuestra tabla de letras</a>, y compararlas con los <a href="/plazos-fijos/">plazos fijos</a>.`,
      ]},
    ],
    conclusion: [
      `Una LECAP es, en esencia, un préstamo corto al Estado con un resultado que se conoce desde el principio. La clave es entender la ganancia directa, mirar el plazo y recordar que los números que ves casi nunca incluyen la comisión del broker. Si querés practicar los cálculos, en nuestra página principal tenés un simulador: ponés cuánta plata invertirías y te dice cuánto ganarías con cada letra.`,
    ],
    faq: [
      { p: '¿Qué significa que sea "capitalizable"?', r: 'Que los intereses no se pagan mes a mes sino que se suman al capital y se cobran todos juntos al vencimiento.' },
      { p: '¿Puedo perder plata con una LECAP?', r: 'Si la mantenés hasta el vencimiento y el Estado cumple, cobrás lo pactado. Si la vendés antes, el precio puede ser menor al que pagaste. Y siempre existe el riesgo del emisor.' },
      { p: '¿Con cuánta plata puedo empezar?', r: 'Se compran por unidades de valor bajo, así que se puede empezar con montos chicos. Considerá que la comisión del broker pesa más en operaciones pequeñas.' },
    ],
    relacionadas: ['como-empezar-a-invertir-con-poca-plata', 'tna-vs-tea', 'plazo-fijo-vs-billetera-virtual'],
  },

  /* ─────────────────────────────────────────────  4. PLAZO FIJO UVA  */
  {
    slug: 'plazo-fijo-uva',
    titulo: 'Plazo fijo UVA: qué es, cómo funciona y cuándo conviene — Tasita',
    descripcion: 'Todo sobre el plazo fijo UVA: qué es una UVA, cómo se ajusta por inflación, ejemplos de cuentas y cuándo conviene frente al plazo fijo tradicional.',
    h1: 'Plazo fijo UVA: cómo funciona y cuándo conviene',
    resumen: 'Qué es una UVA y cuándo le gana al plazo fijo común.',
    cta: ['/plazos-fijos-uva/', 'Ver las opciones de plazo fijo UVA →'],
    intro: [
      `El plazo fijo tradicional tiene un problema: te promete una tasa, pero no te garantiza que esa tasa le gane a la inflación. Si los precios suben más rápido que tu tasa, al final del plazo tenés más pesos pero podés comprar menos cosas. El <strong>plazo fijo UVA</strong> nació para resolver justamente eso.`,
    ],
    secciones: [
      { h2: 'Qué es una UVA', p: [
        `UVA significa <strong>Unidad de Valor Adquisitivo</strong>. Es una unidad de cuenta que el Banco Central actualiza todos los días, siguiendo la evolución de la inflación. Dicho simple: su valor en pesos sube a medida que suben los precios.`,
        `Cuando constituís un plazo fijo UVA, tu dinero se convierte a esa unidad, y al vencimiento se vuelve a convertir a pesos. Si la UVA subió, tu capital en pesos subió con ella. Además, el banco te paga una tasa, generalmente baja, por encima del ajuste.`,
      ]},
      { h2: 'Un ejemplo con números', p: [
        `Pongamos $1.000.000 por 90 días. Supongamos que en ese período la inflación fue del 3% mensual, o sea que la UVA subió un 9% en total.`,
        `Tu capital ajustado pasa a ser $1.090.000. Sobre eso se aplica la tasa pactada: si fuera del 1% anual, serían unos $2.700 más en 90 días. Cobrás aproximadamente <strong>$1.092.700</strong>.`,
        `Un plazo fijo tradicional a TNA 24% por 90 días te daría: 1.000.000 × 0,24 × 90 ÷ 365 = $59.178, o sea <strong>$1.059.178</strong>. En este escenario, de inflación alta, el UVA gana por mucho.`,
        `Ahora el escenario contrario: si la inflación hubiera sido del 1% mensual (3% en los 90 días), tu capital UVA sería $1.030.000, más la tasa: unos <strong>$1.032.500</strong>. El plazo fijo tradicional, con los mismos $1.059.178, ganaría. Moraleja: el UVA conviene cuando la inflación es alta o se espera que suba.`,
      ]},
      { h2: 'El plazo mínimo y la precancelación', p: [
        `Los plazos fijos UVA suelen exigir un plazo mínimo mayor que el tradicional. Por eso en nuestra tabla ves el plazo mínimo de cada uno. Es plata que tenés que estar dispuesto a dejar quieta.`,
        `Existen variantes <strong>precancelables</strong>, que permiten retirar el dinero antes del vencimiento, después de un período mínimo, aunque con condiciones distintas a las del plazo completo. Es una ventaja si te da miedo quedar encerrado, pero conviene leer qué ajuste y qué tasa te corresponden si cancelás antes.`,
      ]},
      { h2: 'Cuándo conviene el plazo fijo UVA', p: [
        `Conviene si tu preocupación principal es no perder contra la inflación, si la inflación esperada es alta o incierta, y si podés dejar la plata quieta durante todo el plazo. Funciona como un seguro parcial contra una suba de precios más fuerte de lo previsto.`,
      ]},
      { h2: 'Cuándo no conviene', p: [
        `No conviene si necesitás la plata pronto, si la inflación viene bajando claramente, o si el plazo fijo tradicional te paga mucho más que la UVA. Tampoco si te incomoda el hecho de que, al ser un ajuste, no sepas de antemano cuántos pesos vas a cobrar: en el UVA <strong>lo que cobrás depende de la inflación</strong>, y eso se conoce recién al final.`,
        `Lo mejor es comparar dos escenarios antes de decidir, como hicimos en el ejemplo, y ver cuál te deja mejor parado según lo que esperes.`,
      ]},
    ],
    conclusion: [
      `El plazo fijo UVA es una herramienta para proteger el poder de compra de tu plata en plazos de varios meses. No es mejor ni peor que el tradicional: es distinto, y su conveniencia depende de la inflación. Si querés profundizar en el tema, leé también cómo <a href="/guias/como-protegerse-de-la-inflacion/">protegerte de la inflación</a>, con otras opciones además de esta.`,
    ],
    faq: [
      { p: '¿El plazo fijo UVA siempre le gana a la inflación?', r: 'Ajusta tu capital por la inflación, así que mantiene tu poder de compra y suma una tasa. Pero cuánto ganás en términos reales depende de esa tasa y de cómo se comporte la UVA.' },
      { p: '¿Qué pasa si la inflación baja?', r: 'Si baja mucho, el ajuste por UVA es chico y el plazo fijo tradicional puede rendir más.' },
      { p: '¿Puedo retirar antes de que venza?', r: 'Solo en las variantes precancelables, después de un período mínimo y con condiciones propias. En las tradicionales, no.' },
    ],
    relacionadas: ['como-protegerse-de-la-inflacion', 'plazo-fijo-vs-billetera-virtual', 'tna-vs-tea'],
  },
];
