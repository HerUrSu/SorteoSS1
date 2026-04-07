window.PORTAL_DATA = {};

window.PORTAL_DATA.SIDEBAR_WIDTHS = {
  closed: 78,
  open: 250
};

window.PORTAL_DATA.statusToneMap = {
  Activa: "danger",
  "En despliegue": "warning",
  Optimizada: "success",
  Seguimiento: "neutral",
  Alta: "danger",
  Media: "warning",
  Baja: "neutral",
  Alto: "danger",
  Medio: "warning",
  Bajo: "neutral",
  Cerrando: "warning",
  Lista: "success"
};

window.PORTAL_DATA.downloadLibrary = {
  opener: {
    title: "Guia de apertura comercial",
    href: "downloads/guia-apertura-comercial.txt",
    meta: "TXT | 1 pagina"
  },
  objections: {
    title: "Checklist de objeciones",
    href: "downloads/checklist-objeciones.txt",
    meta: "TXT | Respuesta rapida"
  },
  agenda: {
    title: "Agenda de capacitaciones",
    href: "downloads/agenda-capacitaciones.csv",
    meta: "CSV | Calendario"
  }
};

window.PORTAL_DATA.channels = {
  "red-sucursales": {
    label: "Red de Sucursales",
    focus: "Atencion presencial, deteccion de necesidad y cierre consultivo en oficina.",
    tags: ["Sucursal", "Cross-sell", "Cierre consultivo"],
    home: {
      focus: "Atencion presencial, deteccion de necesidad y cierre consultivo en oficina."
    },
    capacitaciones: {
      title: "Capacitaciones para piso comercial",
      intro: "Una mesa de trabajo para descargar materiales, revisar videos cortos y tener a la vista las reuniones ya agendadas para sucursal.",
      downloads: [
        { key: "opener", note: "Version para abrir conversacion en caja, fila y piso comercial." },
        { key: "objections", note: "Respuestas cortas para tiempo, precio y postergacion." },
        { key: "agenda", note: "Calendario base con role plays y sesiones de seguimiento." }
      ],
      videos: [
        {
          title: "Como detectar necesidad en una visita transaccional",
          duration: "08:20",
          speaker: "Mesa Comercial",
          summary: "Microcapsula para pasar de una consulta puntual a una recomendacion con sentido."
        },
        {
          title: "Speech corto para oferta combinada",
          duration: "06:45",
          speaker: "Lider Zonal",
          summary: "Bajada comercial para presentar proteccion sin recargar la conversacion."
        },
        {
          title: "Cierre con siguiente paso visible",
          duration: "05:30",
          speaker: "Jefatura de Oficina",
          summary: "Como dejar la oportunidad viva aunque no se cierre en el momento."
        }
      ],
      meetings: [
        { date: "09 Abr", time: "09:00", title: "Role play de objeciones en oficina", format: "Teams", owner: "Mesa Comercial" },
        { date: "10 Abr", time: "08:30", title: "Apertura de jornada con foco familiar", format: "Presencial", owner: "Jefatura Zonal" },
        { date: "12 Abr", time: "17:00", title: "Clinica de cierre consultivo", format: "Teams", owner: "Formacion Comercial" }
      ]
    },
    comunicados: {
      title: "Comunicados operativos para sucursal",
      intro: "Un bloque unico para mostrar los comunicados del dia como carrusel, con foco en lo que cambia, quien lo lidera y que accion se espera del equipo.",
      slides: [
        {
          eyebrow: "Prioridad del dia",
          title: "Refuerzo de oferta combinada en horario punta",
          body: "Se solicita abrir proteccion familiar en atenciones con potencial visible entre 11:00 y 14:00, usando speech corto y cierre con siguiente paso.",
          action: "Aplicar solo cuando la necesidad este identificada.",
          meta: "Actualizado 08:10 | Jefatura Comercial"
        },
        {
          eyebrow: "Operacion",
          title: "Nuevo criterio para derivacion al referente comercial",
          body: "Los casos con interes alto y falta de tiempo deben quedar derivados con contexto minimo: necesidad, objecion y siguiente accion sugerida.",
          action: "Evitar derivaciones sin resumen comercial.",
          meta: "Actualizado 09:15 | Coordinacion Zonal"
        },
        {
          eyebrow: "Seguimiento",
          title: "Callback de clientes no cerrados en visita",
          body: "Se priorizan callbacks dentro de 24 horas cuando el cliente mostro interes pero no pudo revisar detalle en oficina.",
          action: "Registrar hora tentativa antes de terminar la atencion.",
          meta: "Actualizado 10:05 | Lider de Oficina"
        }
      ],
      signals: [
        { label: "Responsable", value: "Jefatura de Oficina", text: "Centraliza apertura de turno y cierre diario." },
        { label: "Prioridad", value: "Oferta combinada", text: "Una sola accion comercial clara en horas de mayor trafico." },
        { label: "Riesgo a evitar", value: "Derivar sin contexto", text: "La oportunidad se enfria cuando no viaja con resumen util." }
      ]
    },
    campanas: {
      title: "Campanas vigentes en oficinas",
      intro: "Listado operativo de campanas con estado, fechas y lectura rapida para que el ejecutivo entienda que ofrecer, a quien y hasta cuando.",
      campaigns: [
        { name: "Proteccion Familiar Express", status: "Activa", audience: "Clientes de alto trafico", detail: "Cobertura simple para recomendar durante atencion presencial.", start: "07 Abr", end: "30 Abr", owner: "Marketing Comercial" },
        { name: "Semana de Cierre Guiado", status: "En despliegue", audience: "Visitas con interes previo", detail: "Rutina de seguimiento corto para clientes que salieron sin cerrar.", start: "08 Abr", end: "18 Abr", owner: "Mesa Comercial" },
        { name: "Oferta Post Caja", status: "Optimizada", audience: "Clientes con gestion transaccional", detail: "Speech de 20 segundos despues de resolver la necesidad principal.", start: "05 Abr", end: "25 Abr", owner: "Gerencia Red" },
        { name: "Proteccion Vuelta a Clases", status: "Seguimiento", audience: "Familias con hijos", detail: "Campana con foco en respaldo familiar y tranquilidad financiera.", start: "01 Abr", end: "20 Abr", owner: "Producto Seguros" }
      ],
      notes: [
        { title: "Regla de oro", text: "Si la campana exige demasiada explicacion, no ayuda al ritmo de sucursal." },
        { title: "Cierre esperado", text: "Venta en linea o derivacion con callback en menos de 24 horas." },
        { title: "Lectura recomendada", text: "Un beneficio principal, un ejemplo simple y un siguiente paso." }
      ]
    },
    noticias: {
      title: "Noticias para ejecutivos de sucursal",
      intro: "Una portada editorial con una noticia principal y luego un carrusel de novedades menores que afectan el discurso comercial del dia.",
      featured: {
        tag: "Noticia principal",
        title: "Nueva bajada comercial para coberturas familiares en atencion presencial",
        summary: "La recomendacion ahora parte desde situacion del cliente y no desde producto, para que la conversacion se sienta mas natural y menos transaccional.",
        meta: "Mesa de Producto | Hoy 08:00",
        bullets: [
          "Cambian las frases de apertura sugeridas para conversaciones en piso.",
          "Se reduce el uso de tecnicismos en la primera recomendacion.",
          "Se incorpora un ejemplo simple para familias con hijos."
        ]
      },
      items: [
        { eyebrow: "Producto", title: "Ajuste en lectura de coberturas complementarias", body: "Resumen ejecutivo con impacto comercial inmediato.", meta: "08 Abr | Producto Seguros" },
        { eyebrow: "Operacion", title: "Nueva minuta de derivacion para visitas sin cierre", body: "Menos campos, mas contexto util para el siguiente ejecutivo.", meta: "08 Abr | Coordinacion Red" },
        { eyebrow: "Comercial", title: "Sube foco en seguimiento de visitas no convertidas", body: "La primera llamada debe ocurrir dentro de 24 horas.", meta: "09 Abr | Gerencia Comercial" },
        { eyebrow: "Calidad", title: "Checklist breve para speech presencial", body: "Se prioriza claridad, beneficio y cierre con agenda.", meta: "09 Abr | Calidad Comercial" }
      ]
    },
    oportunidades: {
      title: "Oportunidades comerciales de la semana",
      intro: "Un tablero para mirar pipeline, siguiente mejor accion y segmentos que hoy tienen mejor probabilidad de cierre dentro de sucursal.",
      metrics: [
        { label: "Oportunidades calientes", value: "28", note: "Visitas con trigger visible en las proximas 24 horas." },
        { label: "Callbacks pendientes", value: "11", note: "Clientes con interes detectado y proximo contacto ya sugerido." },
        { label: "Potencial semanal", value: "$42M", note: "Estimacion agregada sobre cartera priorizada." }
      ],
      priorities: [
        { title: "Clientes en visita por ajuste financiero", tone: "Alta", owner: "Piso comercial", nextStep: "Abrir cobertura asociada antes de cerrar la atencion." },
        { title: "Familias que consultan por continuidad", tone: "Media", owner: "Caja avanzada", nextStep: "Usar ejemplo de respaldo familiar y dejar seguimiento." },
        { title: "Visitas sin cierre de los ultimos 2 dias", tone: "Alta", owner: "Referente comercial", nextStep: "Llamar antes de 17:00 con propuesta resumida." }
      ],
      plays: [
        { title: "Siguiente mejor accion", text: "Priorizar visitas en curso antes de salir a buscar contacto en frio." },
        { title: "Que no hacer", text: "No ofrecer toda la cobertura de una vez; presentar un beneficio y una salida." },
        { title: "Escalamiento sugerido", text: "Si hay interes alto y poco tiempo, derivar con resumen comercial completo." }
      ],
      segments: [
        { name: "Familias con hijos", potential: "Alto", note: "Mejor respuesta cuando se habla de continuidad y proteccion cotidiana." },
        { name: "Clientes con visita transaccional", potential: "Medio", note: "Funcionan mejor con speech muy corto y cierre inmediato." },
        { name: "Callbacks de ultima visita", potential: "Alto", note: "Hay memoria reciente y menor friccion para retomar la conversacion." }
      ]
    }
  }
};

Object.assign(window.PORTAL_DATA.channels, {
  "contact-center": {
    label: "Contact Center",
    focus: "Llamadas entrantes, velocidad de respuesta y deteccion de oportunidad sin friccion.",
    tags: ["Inbound", "Speech", "Resolucion"],
    home: {
      focus: "Llamadas entrantes, velocidad de respuesta y deteccion de oportunidad sin friccion."
    },
    capacitaciones: {
      title: "Capacitaciones para plataforma telefonica",
      intro: "Espacio para speech descargable, videos cortos y reuniones de entrenamiento centradas en llamadas inbound y resolucion con oportunidad.",
      downloads: [
        { key: "opener", note: "Adaptacion del speech base para transiciones desde servicio a recomendacion." },
        { key: "objections", note: "Objeciones de tiempo, comparacion y cierre verbal en llamada." },
        { key: "agenda", note: "Calendario de calibraciones, role plays y sesiones de calidad." }
      ],
      videos: [
        { title: "Como vender sin alargar la llamada", duration: "07:15", speaker: "Calidad Comercial", summary: "Secuencia para resolver primero y abrir recomendacion despues." },
        { title: "Frases puente para speech inbound", duration: "05:40", speaker: "Coach de Plataforma", summary: "Formulas breves para pasar de servicio a oportunidad con naturalidad." },
        { title: "Cierre verbal y callback correcto", duration: "06:05", speaker: "Supervisor de Turno", summary: "Como terminar una llamada dejando accion clara y contexto guardado." }
      ],
      meetings: [
        { date: "09 Abr", time: "11:00", title: "Role play de llamada inbound", format: "Teams", owner: "Calidad Comercial" },
        { date: "11 Abr", time: "15:00", title: "Calibracion de speech de retencion", format: "Teams", owner: "Supervisor de Plataforma" },
        { date: "12 Abr", time: "16:30", title: "Clinica de cierre verbal", format: "Presencial", owner: "Training Center" }
      ]
    },
    comunicados: {
      title: "Comunicados para operacion inbound",
      intro: "Carrusel centralizado para cambios de speech, alertas operativas y ajustes que deben bajar rapido a la siguiente llamada.",
      slides: [
        { eyebrow: "Speech", title: "Orden nuevo para llamadas de retencion", body: "Se resuelve primero, se valida satisfaccion y solo despues se abre oportunidad comercial en lenguaje breve.", action: "No abrir oferta antes de contener la necesidad principal.", meta: "Actualizado 08:20 | Calidad Comercial" },
        { eyebrow: "Operacion", title: "Nuevo registro minimo para callbacks", body: "Toda oportunidad pendiente debe salir con motivo, siguiente paso y frase de cierre utilizada.", action: "Evitar callbacks sin contexto de interes.", meta: "Actualizado 09:05 | Coordinacion Plataforma" },
        { eyebrow: "Foco del turno", title: "Prioridad en llamadas de consulta recurrente", body: "Se activa oportunidad solo en llamadas donde la resolucion quedo clara y el cliente mantiene atencion alta.", action: "Usar speech corto y beneficio unico.", meta: "Actualizado 10:00 | Gerencia Contact Center" }
      ],
      signals: [
        { label: "Responsable", value: "Supervisor de turno", text: "Baja cambios al briefing y revisa adopcion en tiempo real." },
        { label: "Prioridad", value: "Resolver primero", text: "La oportunidad aparece despues de cerrar bien la necesidad base." },
        { label: "Riesgo a evitar", value: "Romper el flujo", text: "Una oferta mal insertada sube friccion y baja escucha." }
      ]
    },
    campanas: {
      title: "Campanas activas para conversaciones entrantes",
      intro: "Tablero operativo para visualizar que campanas siguen activas, cual es su estado y en que llamadas conviene insertarlas.",
      campaigns: [
        { name: "Proteccion Complementaria Inbound", status: "Activa", audience: "Llamadas de servicio recurrente", detail: "Speech corto para ofrecer despues de resolver consulta base.", start: "07 Abr", end: "29 Abr", owner: "Performance Comercial" },
        { name: "Retencion con oferta liviana", status: "En despliegue", audience: "Clientes con senal de baja", detail: "Campana enfocada en beneficio principal y callback ordenado.", start: "06 Abr", end: "22 Abr", owner: "Retencion Seguros" },
        { name: "Cross sell post resolucion", status: "Optimizada", audience: "Clientes satisfechos al cierre", detail: "Se activa solo cuando la llamada termina con feedback positivo.", start: "03 Abr", end: "26 Abr", owner: "Mesa de Producto" },
        { name: "Oferta de continuidad", status: "Seguimiento", audience: "Consultas sobre vigencia y cobertura", detail: "Bajada comercial para clientes con interes latente.", start: "01 Abr", end: "19 Abr", owner: "Marketing Directo" }
      ],
      notes: [
        { title: "Regla de oro", text: "El speech comercial entra solo despues de resolver la necesidad principal." },
        { title: "Cierre esperado", text: "Confirmacion verbal o callback con resumen util." },
        { title: "Lectura recomendada", text: "Beneficio central, transicion suave y salida concreta." }
      ]
    },
    noticias: {
      title: "Noticias para equipos inbound",
      intro: "Una noticia principal para speech telefonico y un carrusel de cambios menores que afectan plataforma, producto y resolucion.",
      featured: {
        tag: "Noticia principal",
        title: "Nueva forma de explicar coberturas en llamadas breves",
        summary: "La bajada comercial ahora va por capas: primer beneficio claro y detalle solo si el cliente profundiza.",
        meta: "Producto y Calidad | Hoy 07:50",
        bullets: [
          "Se reducen tecnicismos en la primera explicacion.",
          "Se recomienda confirmar escucha antes de entrar al detalle.",
          "La plantilla nueva ya esta disponible para supervisor y calidad."
        ]
      },
      items: [
        { eyebrow: "Speech", title: "Nueva frase puente para cierre de servicio", body: "Disena una salida mas natural hacia la oportunidad.", meta: "08 Abr | Calidad" },
        { eyebrow: "Operacion", title: "Cambio en minuta de callback", body: "Ahora exige motivo y siguiente accion sugerida.", meta: "08 Abr | Plataforma" },
        { eyebrow: "Producto", title: "Ajuste en forma de explicar exclusiones", body: "Se mantiene foco en beneficio y detalle bajo demanda.", meta: "09 Abr | Producto" },
        { eyebrow: "Comercial", title: "Sube prioridad en clientes con consulta recurrente", body: "Mayor apertura cuando la llamada ya trae atencion sostenida.", meta: "09 Abr | Gerencia" }
      ]
    },
    oportunidades: {
      title: "Oportunidades comerciales en llamadas entrantes",
      intro: "Vista para ordenar llamadas con mejor probabilidad, acciones sugeridas y segmentos que hoy conviene atacar dentro de inbound.",
      metrics: [
        { label: "Llamadas con oportunidad", value: "34", note: "Interacciones marcadas para oferta contextual." },
        { label: "Callbacks con contexto", value: "19", note: "Pendientes con motivo y speech ya usado." },
        { label: "Potencial semanal", value: "$37M", note: "Valor estimado sobre pipeline inbound priorizado." }
      ],
      priorities: [
        { title: "Consultas de vigencia con escucha alta", tone: "Alta", owner: "Plataforma inbound", nextStep: "Abrir oferta al cierre usando un solo beneficio." },
        { title: "Llamadas resueltas con feedback positivo", tone: "Media", owner: "Supervisor de turno", nextStep: "Insertar cross sell antes del cierre verbal final." },
        { title: "Callbacks de retencion ya agendados", tone: "Alta", owner: "Equipo de seguimiento", nextStep: "Retomar con motivo guardado y speech reducido." }
      ],
      plays: [
        { title: "Siguiente mejor accion", text: "Priorizar llamadas donde ya existe escucha y confianza despues de la resolucion." },
        { title: "Que no hacer", text: "No abrir oportunidad si el cliente sigue en friccion o molestia." },
        { title: "Escalamiento sugerido", text: "Cuando el cliente pide detalle, dejar derivacion con resumen y horario ideal." }
      ],
      segments: [
        { name: "Consultas recurrentes", potential: "Alto", note: "Hay mayor espacio para recomendacion si la llamada ya tuvo buena resolucion." },
        { name: "Retencion preventiva", potential: "Medio", note: "Conviene usar speech muy corto y tono de ayuda." },
        { name: "Clientes satisfechos", potential: "Alto", note: "Mejor probabilidad cuando terminan con necesidad resuelta." }
      ]
    }
  }
});

Object.assign(window.PORTAL_DATA.channels, {
  telemarketing: {
    label: "Telemarketing",
    focus: "Prospeccion saliente, primer minuto de llamada y recuperacion de leads tibios.",
    tags: ["Outbound", "Primer minuto", "Seguimiento"],
    home: {
      focus: "Prospeccion saliente, primer minuto de llamada y recuperacion de leads tibios."
    },
    capacitaciones: {
      title: "Capacitaciones para prospeccion saliente",
      intro: "Seccion pensada para aperturas, objeciones tempranas y secuencias de seguimiento sobre bases outbound.",
      downloads: [
        { key: "opener", note: "Speech de apertura para ganar permiso en el primer minuto." },
        { key: "objections", note: "Matriz corta para precio, tiempo y desinteres temprano." },
        { key: "agenda", note: "Agenda ejemplo con clinics de primer minuto y callbacks." }
      ],
      videos: [
        { title: "Primer minuto que no suena a guion", duration: "07:50", speaker: "Supervisor Outbound", summary: "Como abrir con claridad sin sonar mecanico ni invasivo." },
        { title: "Objeciones antes de la propuesta", duration: "06:20", speaker: "Training Comercial", summary: "Respuestas cortas para mantener la llamada viva sin discutir demasiado." },
        { title: "Secuencia correcta de callback", duration: "05:10", speaker: "Lead Manager", summary: "Como retomar una conversacion tibia con contexto y urgencia sana." }
      ],
      meetings: [
        { date: "09 Abr", time: "10:00", title: "Clinica de aperturas outbound", format: "Teams", owner: "Supervisor Outbound" },
        { date: "10 Abr", time: "15:30", title: "Recontacto de leads tibios", format: "Teams", owner: "Lead Manager" },
        { date: "12 Abr", time: "09:30", title: "Laboratorio de objeciones", format: "Presencial", owner: "Formacion Remota" }
      ]
    },
    comunicados: {
      title: "Comunicados para equipos outbound",
      intro: "Carrusel de instrucciones diarias sobre base priorizada, speech activo y ajustes de secuencia para telemarketing.",
      slides: [
        { eyebrow: "Base del dia", title: "Priorizar leads con ultimo contacto menor a 72 horas", body: "La primera salida del dia va sobre contactos tibios con memoria fresca del intento anterior.", action: "No abrir bases frias antes de terminar la lista priorizada.", meta: "Actualizado 08:00 | Lider de Campana" },
        { eyebrow: "Speech", title: "Nueva apertura para reducir objecion de tiempo", body: "Se reemplaza el saludo largo por motivo directo, beneficio y pregunta de permiso en una sola secuencia.", action: "Eliminar frases de relleno del inicio.", meta: "Actualizado 08:45 | Training Comercial" },
        { eyebrow: "Seguimiento", title: "Callbacks solo con motivo especifico", body: "Toda recontactacion debe salir con nota concreta sobre interes, objecion o promesa de envio.", action: "No reagendar sin contexto.", meta: "Actualizado 09:30 | Gerencia Remota" }
      ],
      signals: [
        { label: "Responsable", value: "Lider de Campana", text: "Baja speech y orden de base al iniciar la jornada." },
        { label: "Prioridad", value: "Lead tibio", text: "Insistir mejor donde ya existe una senal real." },
        { label: "Riesgo a evitar", value: "Apertura larga", text: "Si se pierde el primer minuto, se pierde la llamada." }
      ]
    },
    campanas: {
      title: "Campanas activas en prospeccion saliente",
      intro: "Vista de campanas con foco en reactivacion, beneficios simples y cierres medibles para outbound.",
      campaigns: [
        { name: "Reactivacion de Leads Tibios", status: "Activa", audience: "Leads con ultimo contacto reciente", detail: "Campana con beneficio principal y CTA de seguimiento corto.", start: "07 Abr", end: "28 Abr", owner: "Marketing Directo" },
        { name: "Primer Minuto Express", status: "En despliegue", audience: "Bases frias de mejor contactabilidad", detail: "Speech experimental mas directo para ganar permiso rapido.", start: "08 Abr", end: "16 Abr", owner: "Supervisor Outbound" },
        { name: "Callback de Valor", status: "Optimizada", audience: "Clientes con interes previo", detail: "Secuencia de recontacto con contexto y urgencia sana.", start: "04 Abr", end: "24 Abr", owner: "Lead Management" },
        { name: "Oferta de Cierre Ligero", status: "Seguimiento", audience: "Llamadas con objecion de tiempo", detail: "Campana pensada para dejar paso siguiente y no vender todo en una llamada.", start: "02 Abr", end: "18 Abr", owner: "Performance" }
      ],
      notes: [
        { title: "Regla de oro", text: "El valor debe entenderse antes del segundo minuto o el lead se cae." },
        { title: "Cierre esperado", text: "Continuar, reagendar o cortar con contexto claro." },
        { title: "Lectura recomendada", text: "Motivo directo, beneficio unico y microcompromiso." }
      ]
    },
    noticias: {
      title: "Noticias para telemarketing",
      intro: "Una noticia central para speech y segmentacion, seguida de un carrusel con ajustes menores para base, horario y seguimiento.",
      featured: {
        tag: "Noticia principal",
        title: "Nuevo orden de trabajo para bases con mejor contactabilidad",
        summary: "Se recalibra la secuencia diaria para priorizar leads tibios y horarios con mejor tasa de respuesta antes de abrir trafico frio.",
        meta: "Analitica Comercial | Hoy 08:15",
        bullets: [
          "La primera ventana de gestion se concentra en memoria reciente.",
          "Se reduce tiempo perdido en aperturas de baja probabilidad.",
          "Se ajusta la pauta de callback para tardanza y no respuesta."
        ]
      },
      items: [
        { eyebrow: "Segmentacion", title: "Suben los leads con contacto en 48 horas", body: "Mejor respuesta si se retoma con motivo claro.", meta: "08 Abr | Analitica" },
        { eyebrow: "Speech", title: "Nueva apertura para objecion de tiempo", body: "Se acorta el saludo y se refuerza beneficio temprano.", meta: "08 Abr | Training" },
        { eyebrow: "Operacion", title: "Callback ahora exige motivo y fecha", body: "La secuencia pierde eficiencia cuando se reintenta sin contexto.", meta: "09 Abr | Lider de Campana" },
        { eyebrow: "Comercial", title: "Mejor horario para base B", body: "La ventana de 18:00 a 19:30 sube respuesta efectiva.", meta: "09 Abr | Performance" }
      ]
    },
    oportunidades: {
      title: "Oportunidades comerciales para outbound",
      intro: "Tablero para elegir mejor a quien llamar, con que accion y en que orden, sin volver a caer en volumen sin contexto.",
      metrics: [
        { label: "Leads tibios priorizados", value: "46", note: "Lista del dia con mejor probabilidad de escucha." },
        { label: "Callbacks listos", value: "22", note: "Con motivo concreto y franja horaria sugerida." },
        { label: "Potencial semanal", value: "$31M", note: "Valor estimado sobre pipeline outbound activo." }
      ],
      priorities: [
        { title: "Leads con contacto menor a 72 horas", tone: "Alta", owner: "Base A", nextStep: "Retomar con referencia directa al ultimo intercambio." },
        { title: "Clientes que pidieron llamar mas tarde", tone: "Alta", owner: "Supervisor", nextStep: "Cumplir ventana prometida con speech acortado." },
        { title: "Segmento frio con buen horario", tone: "Media", owner: "Base B", nextStep: "Abrir solo tras cerrar lista tibia principal." }
      ],
      plays: [
        { title: "Siguiente mejor accion", text: "Retomar primero donde ya existe memoria o permiso implicito." },
        { title: "Que no hacer", text: "No gastar speech largo en contactos frios de baja respuesta." },
        { title: "Escalamiento sugerido", text: "Si el lead pide detalle, reagendar con motivo y promesa concreta." }
      ],
      segments: [
        { name: "Leads tibios", potential: "Alto", note: "Mejor combinacion entre recuerdo reciente y apertura a callback." },
        { name: "No contactados de horario premium", potential: "Medio", note: "Convienen solo despues del bloque tibio." },
        { name: "Rechazo por tiempo", potential: "Alto", note: "Funcionan si el recontacto cumple exactamente la promesa hecha." }
      ]
    }
  }
});

Object.assign(window.PORTAL_DATA.channels, {
  consumer: {
    label: "Santander Consumer",
    focus: "Venta apalancada en credito, concesionarios y ofertas ligadas al financiamiento.",
    tags: ["Credito", "Concesionario", "Paquete"],
    home: {
      focus: "Venta apalancada en credito, concesionarios y ofertas ligadas al financiamiento."
    },
    capacitaciones: {
      title: "Capacitaciones para negocio asociado a credito",
      intro: "Una vista para bajar material descargable, videos y reuniones que ayuden a vender proteccion como parte natural del financiamiento.",
      downloads: [
        { key: "opener", note: "Bajada para unir cuota, plazo y proteccion en un solo relato." },
        { key: "objections", note: "Objeciones de precio cuando el cliente ya esta mirando cuota." },
        { key: "agenda", note: "Agenda de sesiones para concesionario, mesa y seguimiento." }
      ],
      videos: [
        { title: "Como integrar seguro dentro del credito", duration: "09:10", speaker: "Coordinacion Consumer", summary: "Explica cobertura como parte del paquete y no como anexo separado." },
        { title: "Discurso para derivacion desde concesionario", duration: "06:15", speaker: "Mesa Consumer", summary: "Bajada corta para retomar contexto sin perder la narrativa financiera." },
        { title: "Cierre por tranquilidad financiera", duration: "05:50", speaker: "Training Negocio", summary: "Como hablar de continuidad y respaldo sin caer en tecnicismos." }
      ],
      meetings: [
        { date: "09 Abr", time: "12:00", title: "Venta integrada con credito", format: "Teams", owner: "Coordinacion Consumer" },
        { date: "11 Abr", time: "10:30", title: "Derivacion efectiva desde concesionario", format: "Presencial", owner: "Mesa Consumer" },
        { date: "12 Abr", time: "16:00", title: "Clinica de objeciones por cuota", format: "Teams", owner: "Training Negocio" }
      ]
    },
    comunicados: {
      title: "Comunicados para negocio asociado",
      intro: "Carrusel centralizado para alinear equipos de credito y seguro con mensajes cortos, responsables claros y siguiente accion visible.",
      slides: [
        { eyebrow: "Derivacion", title: "Nueva minuta para casos enviados desde concesionario", body: "Los casos ahora deben llegar con bien financiado, etapa de decision y principal objecion del cliente.", action: "No derivar sin contexto financiero minimo.", meta: "Actualizado 08:10 | Coordinacion Consumer" },
        { eyebrow: "Speech", title: "Cambio de relato para clientes enfocados en cuota", body: "La cobertura se presenta como continuidad y respaldo del financiamiento, no como venta separada.", action: "Hablar de paquete antes de detalle de producto.", meta: "Actualizado 09:00 | Mesa de Producto" },
        { eyebrow: "Seguimiento", title: "Prioridad en cotizaciones con decision en 48 horas", body: "Se acelera contacto sobre clientes que ya comparan opciones y estan cerca del cierre.", action: "Retomar con propuesta completa y no por partes.", meta: "Actualizado 10:20 | Gerencia Consumer" }
      ],
      signals: [
        { label: "Responsable", value: "Coordinacion Consumer", text: "Alinea mesa, concesionario y seguimiento." },
        { label: "Prioridad", value: "Propuesta integrada", text: "Credito y proteccion deben sonar como una sola oferta." },
        { label: "Riesgo a evitar", value: "Venta separada", text: "Cuando se presenta como anexo, cae la percepcion de valor." }
      ]
    },
    campanas: {
      title: "Campanas ligadas a financiamiento",
      intro: "Listado operativo de campanas con fechas, estado y lectura rapida para equipos que trabajan cuota, plazo y proteccion asociada.",
      campaigns: [
        { name: "Paquete de Tranquilidad Financiera", status: "Activa", audience: "Clientes en decision de cuota", detail: "Proteccion presentada como continuidad del financiamiento.", start: "07 Abr", end: "30 Abr", owner: "Marketing Consumer" },
        { name: "Movilidad con Respaldo", status: "En despliegue", audience: "Cotizaciones vehiculares", detail: "Campana para unir uso del activo y cobertura asociada.", start: "08 Abr", end: "20 Abr", owner: "Mesa Consumer" },
        { name: "Cierre de Primer Auto", status: "Optimizada", audience: "Clientes de primera compra", detail: "Relato comercial simple con foco en seguridad y continuidad.", start: "04 Abr", end: "24 Abr", owner: "Producto Seguros" },
        { name: "Proteccion de Continuidad", status: "Seguimiento", audience: "Clientes con decision cercana", detail: "Oferta para clientes que ya comparan opciones y necesitan empuje final.", start: "02 Abr", end: "18 Abr", owner: "Gerencia Negocio" }
      ],
      notes: [
        { title: "Regla de oro", text: "La mejor campana es la que se siente parte del credito y no una venta aparte." },
        { title: "Cierre esperado", text: "Paquete presentado completo antes de entrar al detalle fino." },
        { title: "Lectura recomendada", text: "Cuota, continuidad, proteccion y proximo paso en un solo relato." }
      ]
    },
    noticias: {
      title: "Noticias para equipos de Consumer",
      intro: "Una noticia principal para la propuesta integrada y luego un carrusel con cambios menores de producto, discurso y seguimiento.",
      featured: {
        tag: "Noticia principal",
        title: "Se actualiza la propuesta de valor para clientes financiados",
        summary: "La comunicacion comercial cambia de foco: primero tranquilidad financiera y luego detalle de cobertura, para reforzar percepcion de paquete completo.",
        meta: "Producto Consumer | Hoy 08:05",
        bullets: [
          "Se simplifica la forma de explicar continuidad del pago.",
          "Se ajusta speech para clientes enfocados en cuota mensual.",
          "Concesionario y mesa comercial usan la misma estructura de relato."
        ]
      },
      items: [
        { eyebrow: "Producto", title: "Nuevo ejemplo para paquete vehicular", body: "Ayuda a explicar cobertura con uso real del activo.", meta: "08 Abr | Producto" },
        { eyebrow: "Operacion", title: "Derivacion ahora exige etapa de cotizacion", body: "Permite retomar mejor el contexto comercial.", meta: "08 Abr | Coordinacion" },
        { eyebrow: "Comercial", title: "Mayor foco en clientes de decision cercana", body: "Se acelera seguimiento sobre cotizaciones maduras.", meta: "09 Abr | Gerencia" },
        { eyebrow: "Speech", title: "Cambio en frase de apertura para cuota", body: "Se habla primero de continuidad y respaldo.", meta: "09 Abr | Training" }
      ]
    },
    oportunidades: {
      title: "Oportunidades comerciales para Consumer",
      intro: "Un tablero para priorizar clientes en decision, ordenar acciones y leer donde hoy conviene empujar mas fuerte la propuesta integrada.",
      metrics: [
        { label: "Cotizaciones maduras", value: "18", note: "Clientes cerca de decision final en el corto plazo." },
        { label: "Derivaciones completas", value: "13", note: "Casos con contexto suficiente para retomar rapido." },
        { label: "Potencial semanal", value: "$55M", note: "Valor estimado sobre pipeline asociado a financiamiento." }
      ],
      priorities: [
        { title: "Clientes que ya comparan cuota final", tone: "Alta", owner: "Mesa Consumer", nextStep: "Presentar paquete completo antes de discutir detalle separado." },
        { title: "Derivaciones desde concesionario con decision proxima", tone: "Alta", owner: "Coordinacion", nextStep: "Retomar dentro de 24 horas con foco en continuidad." },
        { title: "Primera compra vehicular", tone: "Media", owner: "Equipo asociado", nextStep: "Usar ejemplo de tranquilidad y respaldo del bien financiado." }
      ],
      plays: [
        { title: "Siguiente mejor accion", text: "Empujar donde cuota y decision ya estan maduras." },
        { title: "Que no hacer", text: "No separar credito y proteccion en relatos distintos." },
        { title: "Escalamiento sugerido", text: "Si el cliente pide comparacion, responder desde valor total del paquete." }
      ],
      segments: [
        { name: "Decision cercana", potential: "Alto", note: "Conviene presentar la propuesta completa sin fragmentarla." },
        { name: "Primera compra", potential: "Medio", note: "Responde mejor a ejemplos simples y cotidianos." },
        { name: "Derivacion desde concesionario", potential: "Alto", note: "Hay mejor conversion cuando llega con contexto financiero claro." }
      ]
    }
  }
});
