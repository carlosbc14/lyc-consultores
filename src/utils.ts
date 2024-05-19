interface Service {
	title: string;
	description: string;
	slug: string;
	htmlContent: string;
}

interface Client {
	name: string;
	slug: string;
}

interface Resource {
	title: string;
	link: string;
	slug: string;
}

export const services: Array<Service> = [
	{
		title: "Expertos en cada área",
		description:
			"Contamos con personal calificado y servicios de ingenieros enfocados en procesos.",
		slug: "experts",
		htmlContent: `
		<h5>Nuestros Profesionales</h5>
		<ul>
			<li>Contadores Auditores</li>
			<li>Ingenieros Comerciales e Industriales</li>
			<li>Abogados Civiles, Tributarios, Laborales</li>
			<li>Prevencionistas de Riesgo</li>
			<li>Ingenieros en TI</li>
			<li>
				Contamos con Profesionales con estudios superiores Magister en:
				<ul>
					<li>Negocio Nacionales e Internacionales</li>
					<li>Finanzas Locales y Corporativas</li>
					<li>
						Planificación Tributaría aplicando la Reforma
						<ul>
							<li>Articulo 14 A - Grandes Contribuyente</li>
							<li>Articulo 14 B ) N°1 D ) N°3 -14 D ) N°8 - Pyme</li>
							<li>Presunta</li>
							<li>Tributación Internacional retenciones de impuestos y aplicación de Tratados para la Doble Tributación</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
		`,
	},
	{
		title: "Asesorías y consultorías",
		description:
			"Trabajamos día y noche para cumplir con las necesidades de nuestros clientes de manera profesional.",
		slug: "advisory-consulting",
		htmlContent: `
		<ul>
			<li>En cambios organizacional y reestructuración de negocios</li>
			<li>Mejora de Procesos productivos</li>
			<li>Mejoras en control y manejo de proyectos</li>
			<li>Mejoras en planes de ventas usando estadísticas y distribuciones de mercado</li>
			<li>Búsqueda de partner, clientes, proveedores y personal estratégico del negocio</li>
			<li>Recomendación y Consultoría a empresas en Quiebra</li>
		</ul>
		`,
	},
	{
		title: "Mejoras empresarial",
		description:
			"El mejor asesoramiento en cuanto a mejora de procesos, rentabilidad y planes de crecimiento controlado.",
		slug: "improvements",
		htmlContent: `
		<ul>
			<li>Mejoras de negocios</li>
			<li>Mejoras en distribución de líneas de negocios</li>
			<li>Mejoras en la distribución de ingresos y costos de la organización</li>
		</ul>
		`,
	},
	{
		title: "Valoración financiera y gestión",
		description:
			"Servicio de valoración de empresas y evaluación de proyectos.",
		slug: "assessment",
		htmlContent: `
		<ul>
			<li>Valoración de empresas para inversiones</li>
			<li>Valoración de proyectos</li>
			<li>Valoración de ingresos y costos según industria </li>
			<li>Valoración de marca y posicionamiento</li>
			<li>Estrategia empresarial y de negocios</li>
			<li>Prospección de nuevos negocios</li>
			<li>Determinación de KPI gestión avanzada</li>
		</ul>
		`,
	},
	{
		title: "Contabilidad y remuneraciones",
		description:
			"Gestión financiera integral y cumplimiento legal.",
		slug: "accounting-remunerations",
		htmlContent: `
		<ul>
			<li>Confección de Balances y Estado de Resultados bajo normas IFRS</li>
			<li>Declaración Mensual de Impuestos</li>
			<li>Confección de Libros exigidos por la norma tributaria libro diario, libro mayor, libro de inventarios y balances</li>
			<li>Confección de los contratos de trabajos y anexos de contratos</li>
			<li>Asesoramiento en la contratación de trabajadores extranjeros</li>
			<li>Generar certificados F30 y F30-1 de la Dirección de Trabajo</li>
			<li>Confección de las liquidaciones de remuneraciones y planillas de imposiciones</li>
			<li>Confección de finiquitos y la correcta aplicación de las causales de despido</li>
		</ul>
		`,
	},
	{
		title: "Servicios tributarios y legales",
		description:
			"Orientados a la empresa (reorganización de patrimonio, gestión de riesgo, optimización tributaria, gestión de trabajadores, entre otros).",
		slug: "legal-services",
		htmlContent: `
		<ul>
			<li>Reclamación al SII por impuestos mal cobrados o en exceso</li>
			<li>Declaración Anual Renta Socios</li>
			<li>Declaración Anual Renta Personas Naturales</li>
			<li>Declaración Anual Renta Personas extranjeras</li>
			<li>Declaración Anual Renta Empresas extranjeras</li>
			<li>Declaración jurada solicitud de devolución de IVA Activo Fijo</li>
			<li>Presentación Anual de Declaraciones Jurada</li>
			<li>Declaración jurada solicitud de devolución de IVA Exportador</li>
			<li>Tributación Internacional y aplicación de tratados</li>
			<li>Términos de Giro</li>
			<li>Defensa Tributaria por impuestos u otros mal aplicados por el estado</li>
			<li>Servicios de cobranzas judicial</li>
			<li>Servicio Legal Laboral</li>
			<li>Servicio Legal Civil por cambios organizacional con escrituras públicas</li>
			<li>Planificación Tributaria aplicando nuevos artículos tributarios anti-elución</li>
			<li>Defensa Municipal por cobros o multas excesivas</li>
			<li>Mejora la eficiencia de Impuestos y Finanzas</li>
			<li>Litigios Civiles y Tributarios</li>
		</ul>
		`,
	},
	{
		title: "Auditorias",
		description:
			"Servicio de auditoria tributaria, financiera, procesos y outsourcing.",
		slug: "audits",
		htmlContent: `
		<ul>
			<li>Auditoria Estados Financieros bajo normas IFRS</li>
			<li>Auditorias de caja y movimientos de efectivo</li>
			<li>Auditoria a Proyectos</li>
			<li>Auditoria y toma de inventarios</li>
			<li>Auditoria de Clientes, Proveedores, Acreedores y cuentas estratégicas del negocio</li>
			<li>Auditorias en Activos Fijos e Inversiones</li>
			<li>Auditoria Tributaria</li>
			<li>Auditoria Procesos y Mejoras de automatización</li>
		</ul>
		`,
	},
	{
		title: "Marketing y ventas",
		description:
			"Impulsa tus Ventas con Estrategias de Marketing.",
		slug: "marketing",
		htmlContent: `
		<ul>
			<li>Análisis de Mercado</li>
			<li>Campañas Publicitarias</li>
			<li>Gestión de Redes Sociales</li>
			<li>Optimización de Conversión</li>
			<li>Desarrollo de Estrategias</li>
		</ul>
		`,
	},
	{
		title: "Servicios de procesos y tecnologías",
		description:
			"Optimización tecnológica para eficiencia empresarial. Desde procesos de IT hasta asesoría en control de stock para logística.",
		slug: "processes",
		htmlContent: `
		<ul>
			<li>Procesos de IT</li>
			<li>Levantamiento de Bodega y Logística en instrumental médico</li>
			<li>Mejora de procedimientos y control de productos</li>
			<li>Mejoras de operación de bodega</li>
			<li>Mejora procesos de Despachos y Retiros</li>
			<li>Asesoría en control de stock para logística</li>
		</ul>
		`,
	},
];

export const clients: Array<Client> = [
	{
		name: "Globalmed SpA (Implantes Médicos e Insumos Médicos)",
		slug: "globalmed",
	},
	{
		name: "Global Implant SpA (Implantes Médicos e Insumos Médicos)",
		slug: "global-implant",
	},
	{
		name: "Ingeniería y Construcción Gamma Spa (Inmobiliaria y Construcción)",
		slug: "gamma",
	},
	{
		name: "Alma-Terra SpA (Movimientos de Tierra)",
		slug: "alma-terra",
	},
	{
		name: "Eco Rental SpA",
		slug: "eco-rental",
	},
	{
		name: "Sociedad Comercial KyrosLtda (Consultores SAP y TI)",
		slug: "kyros",
	},
	{
		name: "Call 2K SpA (Servicio de Call Center)",
		slug: "2call",
	},
	{
		name: "YTD Consultores Ltda (Servicio de Personal)",
		slug: "ytd-consultores",
	},
	{
		name: "ProPipe",
		slug: "propipe",
	},
	{
		name: "ARAS (Servicio Dental)",
		slug: "aras",
	},
	{
		name: "TECNOCAL",
		slug: "tecnocal",
	},
	{
		name: "Transportes AM Escorpio EIRL (Transporte liviano)",
		slug: "transportes-am-escorpio",
	},
	{
		name: "Comercial VyCLtda. (Inversiones e Inmobiliaria)",
		slug: "comercial-vyc",
	},
	{
		name: "Agricola y Cunicola",
		slug: "agricola-y-cunicola",
	},
	{
		name: "KINIMED (Profesionales Kinesiología)",
		slug: "kinimed",
	},
	{
		name: "Inmobiliaria AyA S.A.",
		slug: "aya-inmobiliaria",
	},
	// {
	// 	name: "OTEC Capacítanos (OTEC)",
	// 	slug: "",
	// },
	// {
	// 	name: "Administradora de Fondos de Inversión VyC S.A.",
	// 	slug: "",
	// },
	// {
	// 	name: "Asesoría e Inversiones Trinidad S.A. (Inversiones Internacionales)",
	// 	slug: "",
	// },
	// {
	// 	name: "Crema PublicitariaLtda (Venta de productos Masivos y Servicios de Publicidad)",
	// 	slug: "",
	// },
	// {
	// 	name: "Asociaciones de Agricultores (San Vicente de Tagua Tagua)",
	// 	slug: "",
	// },
	// {
	// 	name: "Constructora Creando SpA (Construcciones y remodelaciones de bienes raíces)",
	// 	slug: "",
	// },
	// {
	// 	name: "KINEMED SpA (Profesionales Kinesiología)",
	// 	slug: "",
	// },
	// {
	// 	name: "Sociedad de Prestaciones Odontológicas AYSLtda (Servicio Dental)",
	// 	slug: "",
	// },
	// {
	// 	name: "Comercial AYUB (Venta de productos Masivos y Servicios de Publicidad)",
	// 	slug: "",
	// },
];

export const resources: Array<Resource> = [
	{
		title: "PREVIRED",
		link: "https://www.previred.com",
		slug: "previred",
	},
	{
		title: "Servicio de Impuestos Internos",
		link: "https://homer.sii.cl",
		slug: "sii",
	},
	{
		title: "Instituto de Previsión Social",
		link: "https://www.ipsenlinea.cl",
		slug: "ips",
	},
	{
		title: "Fonasa",
		link: "https://www.fonasa.cl/sites/fonasa/prestadores2",
		slug: "fonasa",
	},
	{
		title: "SENCE",
		link: "https://sence.gob.cl",
		slug: "sence",
	},
	{
		title: "Dirección del Trabajo",
		link: "https://www.dt.gob.cl/portal/1626/w3-channel.html",
		slug: "dt",
	},
	{
		title: "CORFO",
		link: "https://www.corfo.cl/sites/cpp/homecorfo",
		slug: "corfo",
	},
	{
		title: "Mercado Público",
		link: "https://www.mercadopublico.cl/Home",
		slug: "mercadopublico",
	},
	{
		title: "Comisión para el Mercado Financiero",
		link: "https://www.cmfchile.cl/portal/principal/613/w3-channel.html",
		slug: "cmf",
	},
	{
		title: "Tesorería General de la República",
		link: "https://www.tgr.cl",
		slug: "tgr",
	},
	{
		title: "Poder Judicial República de Chile",
		link: "https://www.pjud.cl/home",
		slug: "pjud",
	},
	{
		title: "Registro Social de Hogares",
		link: "https://registrosocial.gob.cl",
		slug: "registrosocial",
	},
	{
		title: "Red de Protección Social",
		link: "https://www.reddeproteccion.cl/fichas/subsidio_clase_media_para_compra_de_viviendas",
		slug: "reddeproteccion",
	},
	{
		title: "SERVIU",
		link: "https://serviumetropolitana.minvu.gob.cl",
		slug: "serviumetropolitana",
	},
];
