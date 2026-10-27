/* Secciones que se suman al final del cuerpo de cada guía (antes del "En resumen").
   Son ejemplos resueltos, errores comunes y checklists: contenido útil, no relleno.
   Todas las cuentas están verificadas. */

export const AMPLIACION = {
  'como-elegir-billetera-virtual': [
    { h2: 'Un caso práctico: cuándo conviene repartir', p: [
      `Julia tiene $1.200.000. La billetera A paga 20% pero solo rinde hasta $750.000; la B paga 18% sin límite. Si pone todo en la B, gana 1.200.000 × 18% = $216.000 al año. Si pone $750.000 en la A y los $450.000 restantes en la B, gana 750.000 × 20% + 450.000 × 18% = 150.000 + 81.000 = <strong>$231.000</strong>.`,
      `Son $15.000 más por año, unos $1.250 por mes, a cambio de manejar dos cuentas. Para Julia puede valer la pena; para alguien con la mitad de ese saldo, probablemente no. Siempre hay que ponerle número a la diferencia antes de complicarse.`,
    ]},
    { h2: 'Checklist de cinco minutos antes de depositar', p: [
      `Antes de mandar plata a una billetera nueva, repasá esto: que la empresa esté registrada ante el Banco Central; que sepas cuál es la tasa hoy y hasta qué monto rinde; que entiendas si podés retirar en el momento; que tengas activada la verificación en dos pasos; y que hayas probado primero con un monto chico. Si algo de esa lista no te cierra, esperá.`,
    ]},
  ],

  'plazo-fijo-vs-billetera-virtual': [
    { h2: 'Tres personas, tres decisiones', p: [
      `<strong>Sofía</strong> cobra el sueldo y lo va gastando durante el mes. Su plata se mueve todos los días, así que lo lógico es una billetera: rinde algo mientras espera, y la tiene disponible.`,
      `<strong>Marcos</strong> cobró un aguinaldo de $800.000 y sabe que no lo va a tocar en dos meses. Un plazo fijo a 30 días, renovado una vez, le asegura la tasa. Con una TNA del 24%, el primer mes le deja 800.000 × 0,24 × 30 ÷ 365 = <strong>$15.781</strong>.`,
      `<strong>Lucía</strong> está armando su fondo de emergencia de $600.000. Necesita que esté disponible, pero también quiere que rinda. Lo pone en una billetera. Cuando el fondo esté completo y sobre plata, recién ahí mirará otras opciones.`,
    ]},
    { h2: 'Tres preguntas para decidir', p: [
      `Si dudás, respondete esto. ¿Puedo necesitar esta plata antes de un mes? Si sí, billetera. ¿Me preocupa que la tasa baje? Si sí, plazo fijo. ¿Es un monto que me dolería perder o que no entiendo bien dónde está? Si sí, elegí la opción más conservadora y conocida que encuentres.`,
    ]},
  ],

  'que-es-una-lecap': [
    { h2: 'Mitos comunes sobre las letras', p: [
      `<strong>"Es como un plazo fijo."</strong> Se parece, pero no es igual: se compra en un broker, puede venderse antes de tiempo y su precio varía. <strong>"No tiene riesgo."</strong> Tiene riesgo de precio si vendés antes y riesgo del emisor. <strong>"Necesito mucha plata."</strong> No: se compran por unidades y se puede empezar con poco. <strong>"La tasa que veo es lo que voy a ganar."</strong> Casi: es lo que ganás antes de restar la comisión de tu broker, que reduce algo el resultado.`,
    ]},
  ],

  'plazo-fijo-uva': [
    { h2: 'Cuánta inflación necesitás para que el UVA gane', p: [
      `Hay una cuenta que ordena todo. Tomemos los mismos 90 días del ejemplo: un plazo fijo tradicional a TNA 24% rinde 24% × 90 ÷ 365 = 5,92%. El UVA te da la inflación del período más su tasa (en el ejemplo, 0,25% en 90 días).`,
      `Para que el UVA empate, la inflación de esos tres meses tiene que ser de alrededor de <strong>5,7%</strong>, o sea unos 1,85% por mes. Si la inflación mensual promedio está por encima, gana el UVA; si está por debajo, gana el plazo fijo común. Con tus propios números, podés repetir este cálculo para decidir.`,
    ]},
    { h2: 'Cómo contratarlo', p: [
      `Se constituye igual que un plazo fijo común: desde el home banking o la aplicación del banco, eligiendo la opción UVA, o en una sucursal. Fijate el plazo mínimo, la tasa que ofrece y si es precancelable. Los bancos que lo ofrecen y sus condiciones están en nuestra <a href="/plazos-fijos-uva/">tabla de plazos fijos UVA</a>.`,
    ]},
    { h2: 'Errores comunes', p: [
      `<strong>Pensar que es siempre mejor.</strong> Si la inflación baja, el plazo fijo común puede ganarle. <strong>Mirar solo la tasa.</strong> En el UVA, la tasa es lo de menos: lo que pesa es el ajuste. <strong>Ponerlo con plata que necesitás pronto.</strong> El plazo mínimo es largo. <strong>Olvidar el costo de oportunidad.</strong> Si ponés plata a 90 días y las tasas suben, no podés aprovecharlo.`,
    ]},
    { h2: 'Qué preguntarle al banco antes de firmar', p: [
      `Antes de constituirlo, conviene tener claras seis cosas. Cuál es el <strong>plazo mínimo</strong> y si podés elegir uno más largo. Si es <strong>precancelable</strong>, y en ese caso desde cuándo y con qué condiciones. Qué <strong>tasa</strong> te pagan por encima del ajuste. Cómo se calcula el <strong>valor de la UVA</strong> al inicio y al final. Si se <strong>renueva solo</strong> al vencimiento o tenés que hacerlo vos. Y si hay un <strong>monto mínimo o máximo</strong>. Con esas respuestas podés hacer la cuenta con tus números y comparar con un plazo fijo común sin sorpresas.`,
    ]},
  ],

  'dolar-mep-como-funciona': [
    { h2: 'Para qué lo usa la gente', p: [
      `Hay quienes usan el dólar MEP para ahorrar en dólares, quienes lo usan para pagar algo en dólares, y quienes lo toman como referencia de precio. En cualquier caso, la clave es la misma: entender que se trata de una operación en el mercado, con comisión, con spread y con reglas que pueden cambiar.`,
    ]},
    { h2: 'Mitos y errores comunes', p: [
      `<strong>"El MEP es un dólar ilegal."</strong> No: es una operación regulada, hecha a través de un broker registrado. <strong>"Siempre cuesta lo mismo en todos lados."</strong> No: varía según el broker y el momento. <strong>"Si lo compro hoy lo vendo igual mañana."</strong> El precio se mueve, y las comisiones restan. <strong>"Cualquiera puede ofrecerme MEP."</strong> Ojo: quien te lo ofrezca por mensaje pidiendo una transferencia personal, probablemente sea una estafa. Operá siempre con entidades autorizadas.`,
    ]},
  ],

  'fci-money-market': [
    { h2: 'Cómo se ve un rendimiento diario', p: [
      `Supongamos que el fondo rinde una TNA del 20%. Por día, eso equivale a 20% ÷ 365 = 0,055% aproximadamente. Si hoy tu cuotaparte vale $1.000, mañana vale alrededor de $1.000,55. Parece poco, pero se acumula: con $500.000 invertidos, en 30 días ganás unos 500.000 × 0,20 × 30 ÷ 365 = <strong>$8.219</strong>.`,
      `Recordá que ese 20% es un ejemplo: el rendimiento real cambia día a día, y por eso el valor de la cuotaparte no sube en línea recta.`,
    ]},
    { h2: 'Cómo elegir un fondo', p: [
      `No te confundas: un money market <strong>no es una cuenta bancaria</strong> ni un plazo fijo, y tampoco es un fondo de "acciones" o de bonos largos, que se mueven mucho más. Es el primo más tranquilo de la familia de fondos. Si vas a invertir directamente en un fondo y no a través de una billetera, mirá cuatro cosas. El <strong>rendimiento de los últimos meses</strong>, que te muestra cómo se comporta, aunque no garantiza lo que vendrá. Los <strong>honorarios</strong>, porque son la comisión que cobra el fondo. El <strong>plazo de rescate</strong>: cuánto tarda en volver a tus manos tu dinero. Y la <strong>sociedad gerente</strong>, que tiene que ser una entidad reconocida y regulada.`,
    ]},
  ],

  'tna-vs-tea': [
    { h2: 'Un ejemplo completo: dos inversiones, ¿cuál rinde más?', p: [
      `Tenés dos opciones. La billetera A anuncia una TNA del 22% y acredita los intereses todos los días. El plazo fijo B anuncia 23% y paga a los 30 días.`,
      `A primera vista, el B gana: 23 contra 22. Pero comparemos las TEA. La billetera A, con reinversión diaria, rinde (1 + 0,22 ÷ 365) elevado a 365, menos 1, que da aproximadamente <strong>24,6%</strong>. El plazo fijo B, renovado cada 30 días, da <strong>25,6%</strong>. Gana el B, pero por un punto, el mismo que se veía en la TNA: acá el efecto de reinversión no cambió el orden.`,
      `Ahora, qué pasa si la billetera A también anunciara 23%. Su TEA sería aproximadamente 25,9%, un poquito más que el 25,6% del plazo fijo. Con la misma TNA, la que reinvierte más seguido rinde más. Es una diferencia mínima, pero demuestra por qué conviene comparar con la misma vara.`,
    ]},
    { h2: 'Errores más comunes', p: [
      `<strong>Comparar una TNA con una TEA.</strong> Son magnitudes distintas: la TEA siempre parece más grande. <strong>Creer que la TNA es lo que ganás en el año.</strong> Lo es solo si no reinvertís, y en la práctica casi siempre reinvertís. <strong>Ignorar el plazo.</strong> Una tasa alta a un plazo muy largo no es comparable con una más baja a 30 días sin pasar todo a la misma escala. <strong>Olvidar la inflación.</strong> Lo que cuenta al final es la tasa real, que explicamos en la guía de <a href="/guias/como-protegerse-de-la-inflacion/">cómo protegerse de la inflación</a>.`,
    ]},
  ],

  'como-empezar-a-invertir-con-poca-plata': [
    { h2: 'Un ejemplo de plan con $100.000 por mes', p: [
      `Ana gasta $300.000 por mes y puede ahorrar $100.000. Su primer objetivo es un fondo de emergencia de tres meses de gastos: $900.000. A $100.000 por mes, lo logra en <strong>nueve meses</strong>. Durante ese tiempo, lo va juntando en una billetera.`,
      `Cuando llega a la meta, sigue ahorrando los mismos $100.000, pero ahora los reparte. Una parte a un plazo fijo o a letras, para un objetivo de mediano plazo; una parte chica a algo con más riesgo, si le interesa. Cada mes el mismo gesto, sin pensar en el momento ideal. No es espectacular, pero funciona, porque es constante.`,
    ]},
    { h2: 'Cuánto tarda en notarse', p: [
      `Con montos chicos, los primeros resultados son modestos, y eso desanima a mucha gente. Pero lo que más cuenta al principio no es cuánto ganás, sino cuánto aprendés y cuánto se fortalece el hábito. Con el tiempo, a medida que el monto crece, los rendimientos empiezan a pesar de verdad.`,
    ]},
  ],

  'que-son-los-cedears': [
    { h2: 'Un ejemplo con números inventados', p: [
      `Supongamos una acción que cotiza a USD 150 en el exterior, un CEDEAR con ratio 10 a 1 y un dólar implícito de $1.500. El valor de la acción en pesos sería 150 × 1.500 = $225.000, y cada CEDEAR vale una décima parte: <strong>$22.500</strong>.`,
      `Si la acción no se mueve pero el dólar implícito sube un 10%, el CEDEAR pasa a valer $24.750. Si la acción sube 10% pero el dólar baja 5%, vale 22.500 × 1,10 × 0,95 = $23.512, una suba del 4,5%. Y si bajan las dos, perdés por los dos lados. Son números inventados para mostrar la mecánica, no una predicción.`,
    ]},
    { h2: 'Antes de comprar tu primer CEDEAR', p: [
      `Preguntate qué empresa o fondo querés tener y por qué; cuánto de tu plata estás dispuesto a ver bajar sin que te afecte; y por cuánto tiempo pensás mantenerlo. Cuanto más largo el plazo, mejor se tolera la volatilidad. Y no te olvides de comparar comisiones antes de elegir broker.`,
    ]},
    { h2: 'Cómo elegir qué comprar', p: [
      `Una regla sencilla para empezar: comprá algo que entiendas. Si usás todos los días el producto de una empresa y sabés cómo gana plata, ya tenés una ventaja sobre alguien que compra un nombre porque lo vio en una red social. Otra opción, para no tener que elegir una sola empresa, son los CEDEARs que replican un <strong>fondo cotizado</strong> con decenas o cientos de empresas: así repartís el riesgo.`,
      `Mirá también la <strong>liquidez</strong>, es decir, cuánto se opera de ese CEDEAR por día. Los que tienen poco movimiento pueden tener una diferencia grande entre el precio de compra y el de venta, lo que te cuesta plata cada vez que entrás y salís. Y desconfiá de las modas: el que sube mucho hoy no necesariamente es el que sube mañana.`,
    ]},
  ],

  'como-protegerse-de-la-inflacion': [
    { h2: 'Checklist rápido para ordenar tu plata', p: [
      `Hacete estas preguntas. ¿Tengo plata quieta sin rendir nada? Si sí, ponela en algo que rinda, aunque sea una billetera. ¿Cuánto de lo que ahorro necesitaré en menos de un año? Esa parte, en opciones conservadoras. ¿Cuánto puedo dejar más tiempo? Ahí caben opciones con ajuste por inflación. ¿Estoy poniendo todo en una sola cosa? Si sí, repartí. ¿Entiendo lo que compré? Si no, no avances hasta entenderlo.`,
    ]},
  ],
};
