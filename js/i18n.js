/* EN / ES switch.
   English is the markup default. Every translatable node carries data-i18n="key" (text/HTML),
   data-i18n-alt="key" (image alt) or data-i18n-aria="key" (aria-label); this file holds the Spanish values.
   Keys missing from ES keep their English text (names, brands, tool names...). */
(() => {
  const SWITCH_ENABLED = false; // set to true (and remove the "language switch hidden" block at the end of styles.css) to re-enable ES/EN
  const SIG = '<b>Daniel Bueno Franco</b><small>DISEÑADOR UX/UI SENIOR</small>';
  const MORE = (n) => `Más pantallas del proyecto, ${n} de 5`;
  const ES = {
    /* ---------- portfolio ---------- */
    p001: 'Saltar al contenido', p002: 'Volver arriba', p218: 'Volver arriba',
    p003: SIG, p027: SIG, p071: SIG, p122: SIG, p176: SIG,
    p004: 'Secciones del proyecto',
    p008: '<a href="#otros">Otros<span class="x"> proyectos</span></a>',
    p009: '<a href="#contact">Contacto</a>',
    p010: '<a href="cv.html"><span class="x">Mi </span>CV <span aria-hidden="true" class="ar">→</span></a>',
    p011: '<span class="mask-line"><span>Mi Portfolio.</span></span>',
    p014: 'DISEÑADOR UX/UI SENIOR',
    p015: 'Ver mi CV <span aria-hidden="true">→</span>',
    p016: '<span>Desplázate</span><i></i>',
    p017: 'Trabajos destacados',
    p018: 'Cuatro historias, una forma de diseñar.',
    p020: 'Rediseño de un sitio web transaccional del sector hotelero.',
    p022: 'Proyectos seleccionados para un líder del sector asegurador.',
    p024: 'Liderazgo de un proyecto interno de optimización de procesos.',
    p025: 'Otros proyectos', p177: 'Otros proyectos',
    p026: 'Cofares, Meliá, IESE, Pádel Nuestro y Alsa.',
    /* Barceló */
    p028: 'Proyecto de rediseño de un sitio web transaccional del sector hotelero',
    p029: '<span class="mask-line"><span>Soñar tu viaje es parte</span></span><span class="mask-line" style="--d:.12s"><span>del viaje.</span></span>',
    p030: 'SOBRE EL PROYECTO', p074: 'SOBRE EL PROYECTO', p125: 'SOBRE EL PROYECTO',
    p031: 'Proyecto de rediseño de Barcelo.com',
    p032: '<strong>Barceló Hotel Group</strong>, una de las principales cadenas hoteleras de España, con presencia en más de 30 países, eligió a Flat 101 para liderar el rediseño de su web principal: barcelo.com. El objetivo era <strong>mejorar la experiencia de usuario, aumentar las tasas de conversión y reforzar la identidad de marca.</strong>',
    p033: 'Tras completar con resultados positivos la fase de rediseño acordada, <strong>el cliente decidió incluir el proyecto de rediseño de su web para profesionales</strong> (barcelo.pro), así como una colaboración continua centrada en optimizar el embudo de conversión mediante tests A/B.',
    p034: 'Fecha', p078: 'Fecha', p133: 'Fecha',
    p035: 'Tipo de proyecto', p079: 'Tipo de proyecto', p134: 'Tipo de proyecto',
    p036: 'Rediseño / CRO',
    p037: 'Tareas realizadas', p081: 'Tareas realizadas', p136: 'Tareas realizadas',
    p038: 'Liderazgo del equipo de diseño', p082: 'Liderazgo del equipo de diseño',
    p039: 'Análisis heurístico', p083: 'Análisis heurístico',
    p040: 'Desarrollo de concepto', p041: 'Creación de UI Kit', p042: 'Diseño visual', p043: 'Diseño de tests A/B', p087: 'Diseño de tests A/B',
    p044: 'Barcelo.com en portátil', p045: 'Barcelo.com en móvil',
    p046: 'DESARROLLO DEL PROYECTO', p143: 'DESARROLLO DEL PROYECTO',
    p047: 'Cómo lo hicimos', p144: 'Cómo lo hicimos',
    p048: 'El rediseño de Barceló me permitió participar en todas las fases del proyecto: descubrimiento, conceptualización, definición y validación, aportando mi visión y trabajando por el objetivo común.',
    p049: '<i>1</i>Sesiones de trabajo con el cliente',
    p050: 'Como punto de partida del proyecto, <strong>viajamos a Mallorca</strong> para reunirnos con todos los <strong>stakeholders</strong> durante un taller de dos días. El objetivo era conocer de primera mano las <strong>necesidades, limitaciones y requisitos</strong> del proyecto.',
    p051: '<i>2</i>Investigación y análisis',
    p052: 'El <strong>equipo de Research</strong> llevó a cabo una investigación exhaustiva con métodos como <strong>encuestas</strong>, <strong>tree testing</strong> y <strong>card sorting</strong>.<br/>A partir de los <strong>mapas de calor</strong> obtenidos con Hotjar, aporté un <strong>análisis heurístico</strong> de los principales tipos de página, así como <strong>un estudio comparativo</strong> de algunas funcionalidades clave.',
    p053: 'Entregables de investigación',
    p054: '<i>3</i>Conceptualización', p161: '<i>3</i>Conceptualización',
    p055: 'A partir de los insights obtenidos, empecé a trabajar en la <strong>conceptualización</strong> de las páginas más relevantes del sitio: la home, los listados de producto y las fichas de hotel. Traduje la nueva estructura de estas pantallas en una serie de <strong>wireframes</strong> que compartimos con el cliente, lo que nos permitió alinear los conceptos clave y construir una base sólida antes de empezar con la fase de diseño visual.',
    p057: 'Antes de empezar a diseñar, creé una <strong>estructura básica de UI Kit</strong>. Este documento incluía <strong>paletas de color</strong>, <strong>escalas tipográficas</strong>, <strong>iconografía</strong> y elementos esenciales como <strong>CTAs</strong> y <strong>campos de formulario.</strong> El UI Kit nos permitió diseñar las páginas del alcance de forma eficiente manteniendo la coherencia visual.',
    p060: '<i>5</i>Diseño visual',
    p061: 'Empezamos a <strong>aplicar la capa visual</strong>, implementando los estilos definidos en el UI Kit sobre las estructuras creadas durante la fase de conceptualización. A lo largo de esta etapa, <strong>la comunicación con el cliente fue constante</strong> por la necesidad de presentar y validar avances tanto de diseño como de funcionalidad.',
    p062: '<i>6</i>Tests con usuarios',
    p063: 'Una vez entregados los diseños visuales, se realizaron una serie de <strong>tests con usuarios</strong> para validar la propuesta. Algunos de los problemas detectados se clasificaron como <strong>mejoras de higiene</strong>; otros hallazgos, en cambio, pasaron a <strong>tests A/B</strong> para probar soluciones más específicas, ya que afectaban a funcionalidades clave.',
    p064: 'Diseño visual',
    p065: 'Barceló: ' + MORE(1).toLowerCase(), p066: 'Barceló: ' + MORE(2).toLowerCase(), p067: 'Barceló: ' + MORE(3).toLowerCase(), p068: 'Barceló: ' + MORE(4).toLowerCase(), p069: 'Barceló: ' + MORE(5).toLowerCase(),
    /* MAPFRE */
    p072: 'Proyectos seleccionados para un líder del sector asegurador',
    p073: '<span class="mask-line"><span>Confianza en cada paso.</span></span>',
    p075: 'Proyectos para MAPFRE.es',
    p076: '<strong>MAPFRE</strong> es una de las aseguradoras más importantes de España y de reconocimiento internacional, con presencia en más de 40 países. Nuestras experiencias previas con otras firmas como DKV, Sanitas, Reale, Liberty y RACE —proyectos en los que también estuve muy implicado— atrajeron a MAPFRE a nuestra órbita, y en 2020 pasamos a ser oficialmente uno de sus proveedores.',
    p077: 'Mi trayectoria con MAPFRE me ha permitido desarrollar aún más las habilidades que ya tenía y explorar otras que eran nuevas para mí. <strong>A lo largo de estos cinco años me he implicado a fondo</strong>, trabajando como <strong>diseñador</strong>, <strong>punto de contacto</strong> clave para <strong>clientes</strong> y <strong>líder de equipo</strong>, colaborando en proyectos de temáticas y complejidades muy diversas.',
    p080: 'Análisis / Diseño / CRO / Innovación',
    p084: 'Conceptualización', p167: 'Conceptualización',
    p086: 'Diseño visual para web y apps', p088: 'Diagramas de flujo', p091: 'Animación y prototipado',
    p092: 'Storyboarding y producción audiovisual',
    p093: 'MAPFRE en portátil', p094: 'MAPFRE en móvil',
    p095: 'PROYECTOS DESTACADOS', p096: 'Algunos de mis proyectos para MAPFRE',
    p097: 'A continuación se detallan 3 de los proyectos más relevantes en los que he colaborado durante este tiempo, aunque he participado y sigo participando en muchos otros.',
    p098: '<i>1</i>Calculadoras de presupuesto de Auto y más',
    p099: 'Una de las herramientas clave de conversión en MAPFRE son las <strong>calculadoras de presupuesto de seguros</strong>, que permiten a los usuarios obtener rápidamente un precio estimado de su seguro y, si lo desean, contratarlo online.',
    p100: 'Una parte importante de mi trabajo en MAPFRE se ha centrado en las <strong>calculadoras de presupuesto</strong>, especialmente la de Auto. Para esta herramienta realizamos <strong>análisis heurísticos</strong>, <strong>estudios comparativos</strong>, <strong>prototipos</strong>, <strong>diseños visuales</strong> basados en el Design System de la compañía e incluso <strong>tests A/B</strong> en momentos críticos del proceso.',
    p101: 'Calculadora de presupuesto de Auto',
    p102: '<i>2</i>AFIN, la aplicación financiera de MAPFRE',
    p103: 'Otro proyecto de largo recorrido durante mis años en MAPFRE. La <strong>complejidad de las operaciones</strong> y la <strong>gran cantidad de información</strong> que hay que mostrar sobre productos de <strong>ahorro</strong>, <strong>inversión</strong> y <strong>pensiones</strong> hacen de este proyecto un verdadero reto.',
    p104: 'Partimos de una <strong>versión anterior de la app</strong> y desarrollamos un <strong>UI Kit basado en el sistema de diseño de MAPFRE</strong>. Trabajamos estrechamente con los equipos de finanzas y de experiencia de cliente de MAPFRE para optimizar los procesos existentes y resolver nuevas necesidades que siguen apareciendo hoy.',
    p107: '<i>3</i>AMI, el asistente virtual de MAPFRE',
    p108: 'He tenido la oportunidad de participar en este apasionante proyecto desde el principio, con un <strong>papel clave de liderazgo en la fase de diseño visual</strong> y un papel destacado en las <strong>fases de diseño conversacional:</strong>',
    p109: '<strong>Sesiones de trabajo</strong> con los stakeholders implicados, que ayudaron a definir la <strong>personalidad de AMI</strong>.',
    p110: 'Creación del <strong>naming del asistente virtual</strong>, <strong>diseño</strong> de su imagen y <strong>motion branding</strong>.',
    p111: 'Diseño de un <strong>UI Kit con los componentes básicos</strong> para la interacción de AMI con los usuarios en el chat.',
    p112: '<strong>Guía de redacción</strong>, <strong>voz</strong> y <strong>tono</strong> de AMI.',
    p113: '<strong>Flujos conversacionales</strong> y <strong>UX writing</strong> aplicados a distintas historias de usuario para integrar a AMI en la <strong>app de salud</strong> y en el área privada de MAPFRE. Trabajamos mano a mano con desarrolladores, implementando IA generativa.',
    p114: 'Chat de AMI', p115: 'AMI en móvil',
    p116: 'MAPFRE: ' + MORE(1).toLowerCase(), p117: 'MAPFRE: ' + MORE(2).toLowerCase(), p118: 'MAPFRE: ' + MORE(3).toLowerCase(), p119: 'MAPFRE: ' + MORE(4).toLowerCase(), p120: 'MAPFRE: ' + MORE(5).toLowerCase(),
    /* Flat 101 */
    p123: 'Liderazgo de un proyecto interno de optimización de procesos',
    p124: '<span class="mask-line"><span>Los principios que guían</span></span><span class="mask-line" style="--d:.12s"><span>la experiencia.</span></span>',
    p126: 'Optimización del proceso de análisis heurístico',
    p127: '<strong>Durante mi etapa como manager</strong>, se hizo necesario revisar y mejorar el proceso de realización de análisis heurísticos, con el objetivo de <strong>estandarizar</strong> tanto la <strong>metodología</strong> como los <strong>documentos entregables</strong>. Dada mi experiencia previa con esta técnica, me ofrecí a <strong>liderar el equipo del proyecto</strong>, identificando los siguientes objetivos:',
    p128: 'Realizar una <strong>investigación para entender las metodologías existentes</strong> y analizar los procesos que se seguían entonces en Flat 101.',
    p129: '<strong>Definir</strong> y <strong>formalizar un procedimiento adecuado</strong> para realizar análisis heurísticos.',
    p130: 'Crear una o varias <strong>checklists de insights</strong> para agilizar el proceso de análisis y la preparación de los documentos entregables para el cliente.',
    p131: 'Desarrollar un <strong>flujo de gobernanza</strong> que garantice el mantenimiento y la actualización de las plantillas heurísticas y asegure su uso correcto.',
    p132: '<strong>Evangelizar</strong> y <strong>formar al equipo</strong> mediante una presentación general y la creación de grupos de trabajo específicos para resolver dudas.',
    p135: 'Proyecto metodológico interno',
    p137: 'Gestión y coordinación del proyecto.', p138: 'Definición de objetivos.', p139: 'Definición de hitos y calendario.',
    p140: 'Seguimiento del proyecto.', p141: 'Apoyo al equipo de ejecución.', p142: 'Presentaciones a la Dirección y al equipo.',
    p145: 'Para planificar el trabajo apliqué la metodología Double Diamond y sus cuatro fases: descubrimiento, definición, conceptualización y validación.',
    p147: '<i>1</i>Descubrimiento', p153: 'Descubrimiento',
    p148: 'El equipo realizó una <strong>investigación interna y externa</strong> mediante <strong>encuestas</strong>, <strong>tests</strong> con usuarios, <strong>investigación documental</strong> y <strong>focus groups</strong>, con los siguientes objetivos específicos:',
    p149: 'Descubrir las <strong>técnicas más utilizadas</strong>, evaluando la conveniencia de realizar los análisis de forma individual o en grupo.',
    p150: 'Recopilar la <strong>documentación existente</strong> en Flat 101, procedente de distintos repositorios y equipos.',
    p151: 'Definir qué <strong>herramienta se usaría para listar los aspectos</strong> a analizar durante el proceso: Confluence, hoja de cálculo, etc.',
    p152: 'Elaborar un <strong>listado de clientes categorizado por tipo de negocio</strong> para tener en cuenta el sector en los listados de insights.',
    p154: '<i>2</i>Definición', p160: 'Definición',
    p155: 'En esta fase empezaron a tomar forma el <strong>procedimiento</strong> a seguir y la <strong>estructura del contenido del documento de análisis heurístico</strong>:',
    p156: '<strong>Identificación</strong> de los <strong>pasos</strong> esenciales y opcionales para llevar a cabo el análisis heurístico.',
    p157: '<strong>Revisión</strong> de las <strong>plantillas recopiladas</strong> en la fase anterior y valoración de la necesidad de documentos específicos por sector.',
    p158: '<strong>Organización del contenido de la checklist</strong>, especificando los <strong>aspectos</strong> a analizar, las <strong>recomendaciones</strong> y el <strong>artículo</strong>, <strong>ley</strong> o <strong>principio</strong> en el que se basan esas recomendaciones.',
    p159: 'Creación del <strong>índice de contenidos</strong> del documento entregable.',
    p162: 'Una vez definida la estructura, el equipo se centró en crear los <strong>documentos de trabajo</strong>, los <strong>entregables</strong> para el cliente y el <strong>flujo de gobernanza</strong> de nuestras plantillas heurísticas:',
    p163: 'Creación de la <strong>checklist</strong> de aspectos a evaluar (documento de trabajo) y del <strong>documento entregable</strong>, es decir, la plantilla base para presentar insights y recomendaciones al cliente.',
    p164: 'Creación del <strong>manual de uso</strong>, un documento interno que explica cada paso del proceso.',
    p165: '<strong>Formalización de la recepción de feedback</strong> y de su asimilación mediante la definición del <strong>flujo de gobernanza</strong>. Este proceso es crucial porque nos permite mantener actualizada nuestra base de conocimiento y establecer un ciclo de mejora continua.',
    p166: '<strong>Presentación</strong> del trabajo realizado a la Dirección antes de poner todos los <strong>recursos</strong> creados a disposición del resto del equipo.',
    p168: '<i>4</i>Validación', p174: 'Validación',
    p169: 'Por último, se creó un pequeño comité para supervisar el sistema de análisis heurístico definido. Este equipo se encargaría de tareas como:',
    p170: 'Realizar <strong>encuestas</strong>, <strong>revisiones periódicas</strong> y <strong>recordatorios</strong>.',
    p171: '<strong>Documentar</strong> los posibles <strong>cambios</strong> en Confluence.',
    p172: 'Prestar <strong>apoyo</strong> a las dudas de los compañeros sobre las heurísticas y el propio sistema.',
    p173: '<strong>Proponer</strong> de forma proactiva mejoras de <strong>optimización</strong>.',
    /* Other projects */
    p178: '<span class="mask-line"><span>Compendio de experiencias.</span></span>',
    p181: 'Diseñando el e-commerce de la nueva farmacia online de Cofares.',
    p182: '<strong>Cofares</strong> es el mayor distribuidor nacional de productos farmacéuticos y de parafarmacia, con más de 11.000 farmacias asociadas y almacenes en toda España.',
    p183: 'Acudieron a Flat 101 porque necesitaban <strong>renovar su plataforma de e-commerce</strong> para competir a medio plazo con los principales actores del sector. Mi papel en el proyecto fue el de <strong>design lead</strong>, gestionando la <strong>comunicación con el cliente</strong> y asumiendo la <strong>mayor parte de la carga de diseño.</strong>',
    p184: 'Se llevó a cabo una fase previa de conceptualización con <strong>wireframes</strong> y <strong>arquitectura de la información</strong>. Se creó un <strong>sistema de diseño sencillo pero bien documentado</strong> y se trabajó en el <strong>diseño visual</strong> de las páginas y funcionalidades más relevantes. El cliente quedó satisfecho y decidió encargarnos también <strong>el rediseño del área privada</strong> para farmacias.',
    p185: 'Farmacia online de Cofares',
    p188: 'Optimizando los procesos del Call Center de Meliá.',
    p189: '<strong>Meliá iBlue</strong> es la principal herramienta del <strong>Call Center de Meliá</strong>. Es la plataforma en la que los agentes se apoyan a diario para <strong>atender consultas y crear o modificar reservas individuales y de grupo.</strong>',
    p190: 'El proyecto nació con el objetivo de identificar oportunidades de mejora para <strong>agilizar el trabajo de los agentes</strong>. Tras una colaboración estrecha y prolongada con todos los stakeholders (negocio, agentes, desarrolladores, etc.), se rediseñaron todos los flujos y pantallas de la herramienta y se estableció un sistema de diseño que sirvió de base para otros proyectos internos de la compañía.',
    p191: 'Entre otros logros, el proyecto consiguió simplificar la identificación de clientes, mejorar la navegación y reestructurar el proceso de reserva rápida.',
    p195: 'Liderando el rediseño de IESE Publishing.',
    p196: '<strong>IESE Publishing es la unidad editorial de IESE,</strong> dedicada a la distribución y comercialización de materiales educativos, especialmente enfocados en <strong>dirección y administración de empresas</strong>.',
    p197: 'Me incorporé al proyecto en una situación complicada, ya que no se estaban cumpliendo las expectativas. <strong>Como manager</strong>, me centré en <strong>conceptualizar y validar</strong> las <strong>páginas y flujos más relevantes</strong> para recuperar la confianza del cliente. Superada la crisis, me concentré en liderar, coordinar y defender el trabajo de tres diseñadores en el desarrollo del <strong>UI Kit y la creación de los diseños visuales.</strong>',
    p201: 'Rediseño del e-commerce B2C de Pádel Nuestro.',
    p202: 'Pádel Nuestro es el líder internacional en palas y otros productos para <strong>jugar al pádel</strong>. Nos contactaron para rediseñar los tres sitios web principales de su estrategia digital, empezando por <strong>padelnuestro.com,</strong> orientado a B2C.',
    p203: 'Me incorporé al proyecto cuando la fase de diseño ya había empezado y, aunque no era el lead, aporté toda mi experiencia para sacarlo adelante. Aunque ya había algo de avance en diseño, era necesario <strong>estandarizar estilos</strong> y <strong>componentes</strong> y acercar el diseño a la <strong>identidad de la marca.</strong> Por ello trabajamos en una serie de wireframes de las páginas principales, mejoramos la coherencia mediante la creación de un UI Kit y, finalmente, completamos el diseño visual de las pantallas acordadas.',
    p207: 'Optimización del flujo de venta de billetes y rediseño del área privada.',
    p208: 'Alsa es la principal compañía de autocares de transporte de pasajeros de España, con alcance internacional. Acudieron a Flat 101 con el objetivo de <strong>mejorar la conversión en el flujo de venta de billetes</strong> de su <strong>web</strong> y su <strong>app</strong>, así como de desarrollar una <strong>nueva estrategia para el programa de fidelización de la compañía.</strong>',
    p209: 'Para lograrlo se realizó una fase previa de análisis BECO que identificó varios puntos de fricción en el embudo de ventas. Desde el lado del diseño, recogimos las conclusiones y recomendaciones del estudio y empezamos a <strong>reconceptualizar los flujos</strong> tanto para usuarios con sesión iniciada como sin ella. Creamos un <strong>UI Kit</strong> basado en su marca, modernizando el diseño y aportando soluciones a los <strong>problemas de accesibilidad</strong> presentes en su estilo corporativo. La calidad del trabajo llevó al cliente a solicitar también el rediseño visual del área privada, que no formaba parte del alcance inicial.',
    /* contact + legal */
    p211: 'CONTACTO',
    p212: '<span class="mask-line"><span>Hablemos.</span></span>',
    p213: '¿Te interesa mi trabajo? Me encantará hablar de tu proyecto, tu equipo o una oferta. La forma más rápida es un email.',
    p214: `<a class="btn" href="mailto:danielbueno@outlook.com">Escríbeme <svg class="ico" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></a> <a class="btn ghost" href="https://www.linkedin.com/in/daniel-bueno-franco/" rel="noopener" target="_blank">LinkedIn <img class="ico" src="assets/common/icon-linkedin.svg" alt="" width="20" height="20"></a>`,
    p217: '* Toda la información contenida en este archivo es estrictamente confidencial y solo puede utilizarse para determinar si el autor es idóneo para la oferta de empleo concreta a la que se ha enviado. Solo las personas encargadas del proceso de selección pueden leer su contenido. Queda estrictamente prohibida la distribución parcial o total del archivo a cualquier persona ajena a dicho proceso. Cualquier uso indebido del archivo será bajo tu propia responsabilidad.',

    /* ---------- CV ---------- */
    c001: 'Saltar al contenido', c002: 'Volver arriba', c148: 'Volver arriba',
    c003: '<b>Daniel Bueno Franco</b><small>Diseñador UX/UI Senior</small>',
    c004: 'Páginas', c005c: 'Descargar CV en PDF',
    c008: 'Diseñador UX/UI Senior',
    c009: '01 SOBRE MÍ', c010: 'Resumen',
    c011: 'Aunque estudié diseño gráfico, siempre he orientado mi carrera a la web. A lo largo de <strong>casi 20 años de experiencia profesional</strong> he trabajado en distintos entornos (in-house, agencias y consultoras) y he vivido de primera mano cómo ha evolucionado la industria.',
    c012: 'Pasé la mayor parte de mi carrera como UX Designer en Flat 101, una de las principales compañías de España, donde mi <strong>versatilidad</strong> y <strong>experiencia</strong> me llevaron a asumir responsabilidades de gestión.',
    c013: 'Actualmente trabajo como <strong>Senior Digital Product Designer en Accenture,</strong> donde también asumo algunas responsabilidades de <strong>Team Lead</strong>.',
    c014: '<strong>Logros destacados</strong>',
    c015: 'Seleccionado para <strong>“Future Leaders 2023”</strong>, el programa de talento para managers de Flat 101, impartido por Alquimia y celebrado en las instalaciones de Indra.',
    c016: 'Promocionado a <strong>Design Manager en 2023</strong>, liderando <strong>equipos de 6 a 12 personas</strong> y logrando mejoras en eficiencia técnica, operaciones y compromiso del equipo.',
    c017: 'Miembro del <strong>Comité de Dirección del Departamento de Diseño de Flat 101 desde 2022</strong>, contribuyendo a la planificación estratégica y a la toma de decisiones clave del área.',
    c018: '<strong>Design lead en proyectos importantes</strong> para clientes como MAPFRE, L’Oréal, ALSA e IESE Publishing.',
    c019: 'Replanteamiento del <strong>proceso de análisis heurístico</strong>, optimizando el flujo de trabajo y aumentando la identificación de insights accionables.',
    c020: 'Desarrollo de un <strong>sistema de organización de flujos y estructura de páginas en Figma</strong> que <strong>redujo de forma significativa el tiempo de onboarding</strong> de los stakeholders.',
    c021: 'Creación de una <strong>guía de redacción</strong> para “ami”, el asistente virtual de MAPFRE, donde se define su voz, tono, formatos y reglas editoriales.',
    c022: 'Diseño UX/UI y documentación funcional de una <strong>interfaz conversacional</strong> para <strong>GSK</strong>, como parte de una prueba de concepto sobre <strong>orquestación</strong> de agentes para optimizar procesos de la cadena de suministro.',
    c023: 'Diseño y evolución de la <strong>herramienta interna de GSK</strong> para visualizar <strong>informes basados en KPIs</strong> de distintas unidades de negocio.',
    c024: 'Desarrollo del <strong>Design System</strong> de la nueva web de la <strong>Junta de Extremadura</strong>, definiendo fundamentos, variables, componentes y documentación, con el apoyo de Claude conectado a Figma.',
    c025: '02 CÓMO SOY', c027: 'Versátil y polifacético',
    c028: 'Con casi 20 años de experiencia en diseño de interfaces y de experiencia de usuario, he podido contribuir en todas las fases de un proyecto desde múltiples perspectivas.',
    c029: 'Durante mi etapa en Flat 101 he adquirido experiencia aplicando técnicas como <strong>análisis heurístico, benchmarking, customer journey mapping, wireframing, prototipado, animaciones y microinteracciones, diseño visual, UI kits y sistemas de diseño, UX writing, tests A/B y QA.</strong>',
    c030: 'Orientado al cliente y a los resultados',
    c031: 'En los últimos años he sido el principal punto de contacto del área de Diseño en numerosos proyectos, lo que me ha dado <strong>amplia experiencia en comunicación con clientes y gestión de la relación</strong>.',
    c032: 'Jugador de equipo con capacidad de liderazgo',
    c033: '<strong>Me adapto con facilidad a equipos nuevos</strong>, absorbiendo rápidamente las dinámicas existentes y creando vínculos sólidos con mis compañeros para alcanzar objetivos comunes.',
    c034: '<strong>Como manager,</strong> he liderado tanto equipos de proyecto de cliente como internos, logrando resultados satisfactorios y una excelente sinergia dentro de mi equipo.',
    c035: '03 QUÉ SÉ HACER', c037: 'Diseño de UI',
    c038: 'Diseño visual accesible y responsive', c039: 'Diseño de aplicaciones', c040: 'Diseño de UI Kits y Design Systems',
    c041: 'Microinteracciones', c043: 'Prototipos animados (Figma y Animate)',
    c044: 'Wireframing y prototipado', c045: 'Conceptualización de wireframes', c046: 'Prototipos interactivos.',
    c047: 'Investigación y análisis', c048: 'Análisis heurístico', c050: 'Mapas de customer journey', c051: 'Card sorting y tree testing (Optimal)',
    c052: 'IA aplicada al diseño',
    c053: 'Copilot y Claude como apoyo al proceso de diseño y a la documentación',
    c054: 'Generación de interfaces y prototipado con Claude Code + Figma',
    c055: 'Prototipado interactivo con Claude Code / Figma Make',
    c056: 'Gestión',
    c057: 'Presentación y defensa de propuestas ante la dirección y los clientes',
    c058: 'Documentación de procesos de diseño y de la toma de decisiones',
    c059: 'Priorización del roadmap de diseño',
    c060: 'Asignación y seguimiento de la carga de trabajo del equipo',
    c061: 'Evaluaciones de desempeño y planes de crecimiento individuales',
    c062: 'Gestión de stakeholders',
    c063: 'Onboarding y coaching de perfiles junior, mid y senior',
    c064: 'Revisión y validación de entregables',
    c065: 'Validación y testing', c066: 'Tests A/B e iteración basada en feedback', c067: 'QA visual y funcional',
    c068: 'Arquitectura de la información', c069: 'Organización de contenidos .', c070: 'Diagramas de flujo',
    c073: 'Arquitectura verbal', c074: 'Voz y tono', c075: 'Creación de guías de contenido',
    c076: '04 DÓNDE HE TRABAJADO', c077: 'Experiencia laboral',
    c078: '2025-Actualidad',
    c084: 'Maquetación web, diseño web y multimedia, Wordpress.', c086: 'Maquetación web, diseño web y multimedia.',
    c088: 'Prácticas de diseño web y gráfico en la Universidad de La Habana (Cuba)',
    c090: 'Prácticas de diseño web y gráfico en Buenos Aires (Argentina)',
    c092: 'Diseño gráfico y multimedia.', c094: 'Diseño editorial y gráfico.',
    c095: '05 MI FORMACIÓN', c096: 'Formación',
    c097: 'Certificado de inglés C1',
    c099: '2025-<br/>Actualidad', c100: 'DS Pro - oct. 2025 <small>(en curso)</small>', c101: 'Creación y mantenimiento de sistemas de diseño',
    c103: 'Flat 101 - Programa de talento para managers, celebrado en las instalaciones de Indra (2023)',
    c104: 'Certificado Superior de Diseño Gráfico', c106: 'Curso de Diseño Web y Multimedia (360 h)', c108: 'Estudios Superiores de Diseño Gráfico',
    c110: '06 SOFTWARE QUE USO', c111: 'Herramientas técnicas',
    c112: 'Avanzado', c119: 'Intermedio', c128: 'Básico',
    c135: '<span>Algunos clientes con los que he trabajado</span><i></i>',
    /* CV page links */
    c005a: 'Portfolio <span aria-hidden="true">→</span>',
    c005b: 'PDF <span aria-hidden="true">↓</span>',
  };
  const UI = {
    'Image viewer': 'Visor de imágenes', 'Close': 'Cerrar', 'Previous image': 'Imagen anterior',
    'Next image': 'Imagen siguiente', 'View larger': 'Ampliar',
  };
  const META = {
    index: { es: ['Daniel Bueno Franco — Diseñador UX/UI Senior · Portfolio', 'Portfolio de Daniel Bueno Franco, diseñador UX/UI Senior: Barceló, MAPFRE, Flat 101 y más.'] },
    cv: { es: ['Daniel Bueno Franco — Diseñador UX/UI Senior · CV', 'CV de Daniel Bueno Franco, diseñador UX/UI Senior con casi 20 años de experiencia.'] },
  };

  const html = document.documentElement;
  const page = document.body.classList.contains('cv-page') ? 'cv' : 'index';
  const store = { get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }, set(v) { try { localStorage.setItem('lang', v); } catch (e) { /* private mode */ } } };
  const q = new URLSearchParams(location.search).get('lang');
  let lang = !SWITCH_ENABLED ? 'en' : q === 'es' || q === 'en' ? q : store.get() || (/^es\b/i.test(navigator.language || '') ? 'es' : 'en');

  const nodes = [...document.querySelectorAll('[data-i18n],[data-i18n-alt],[data-i18n-aria]')];
  const orig = new Map(); // el -> {html, alt, aria}
  const title0 = document.title;
  const descEl = document.querySelector('meta[name="description"]');
  const desc0 = descEl && descEl.content;

  const setHTML = (el, value) => {
    const keep = [...el.querySelectorAll('.mask-line')].map((m) => m.classList.contains('in'));
    el.innerHTML = value;
    el.querySelectorAll('.mask-line').forEach((m, i) => keep[i] && m.classList.add('in'));
  };

  function apply(l) {
    lang = l;
    html.lang = l;
    nodes.forEach((el) => {
      const o = orig.get(el) || {};
      const k = el.dataset.i18n, ka = el.dataset.i18nAlt, kr = el.dataset.i18nAria;
      if (k !== undefined) {
        if (o.html === undefined) o.html = el.innerHTML;
        const v = l === 'es' && ES[k] !== undefined ? ES[k] : o.html;
        if (o.cur !== v) { setHTML(el, v); o.cur = v; }
      }
      if (ka !== undefined) {
        if (o.alt === undefined) o.alt = el.getAttribute('alt');
        el.setAttribute('alt', l === 'es' && ES[ka] !== undefined ? ES[ka] : o.alt);
      }
      if (kr !== undefined) {
        if (o.aria === undefined) o.aria = el.getAttribute('aria-label');
        el.setAttribute('aria-label', l === 'es' && ES[kr] !== undefined ? ES[kr] : o.aria);
      }
      orig.set(el, o);
    });
    const m = META[page];
    document.title = l === 'es' ? m.es[0] : title0;
    if (descEl) descEl.content = l === 'es' ? m.es[1] : desc0;
    document.querySelectorAll('[data-lang-toggle]').forEach((b) => {
      b.dataset.lang = l;
      b.setAttribute('aria-label', l === 'es' ? 'Switch to English' : 'Cambiar a español');
      b.setAttribute('lang', l === 'es' ? 'en' : 'es');
    });
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: l } }));
  }

  document.querySelectorAll('[data-lang-toggle]').forEach((b) => b.addEventListener('click', () => {
    const next = lang === 'es' ? 'en' : 'es';
    store.set(next);
    apply(next);
  }));
  window.i18nT = (s) => (lang === 'es' && UI[s]) || s;
  window.i18nLang = () => lang;
  window.i18nDict = ES;
  apply(lang);
})();
