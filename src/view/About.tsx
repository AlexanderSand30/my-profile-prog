import AboutMeImg from "./../assets/img/aboutme.jpg";

const personalInfo = [
    { label: "Ubicación", value: "Mochumi, Lambayeque, Perú", icon: "bx-map", href: "https://www.google.com/maps/search/?api=1&query=Mochumi+Lambayeque+Peru" },
    { label: "Correo", value: "alexandersandovalbaldera@gmail.com", icon: "bx-envelope", href: "mailto:alexandersandovalbaldera@gmail.com" },
    { label: "Teléfono", value: "+51 995 154 293", icon: "bx-phone-call", href: "tel:+51995154293" },
];

const capabilities = [
    {
        title: "Productos web",
        description: "Construyo interfaces claras y rápidas con React, TypeScript y Tailwind CSS, cuidando cada detalle de la experiencia.",
        icon: "bx-layout",
        accent: "about-icon-lime",
    },
    {
        title: "APIs y backend",
        description: "Diseño APIs REST mantenibles con Laravel y PHP, conectando reglas de negocio, autenticación y datos de forma segura.",
        icon: "bx-code-alt",
        accent: "about-icon-coral",
    },
    {
        title: "Procesos eficientes",
        description: "Transformo tareas manuales en sistemas útiles para equipos de salud, contabilidad y operaciones.",
        icon: "bx-line-chart",
        accent: "about-icon-blue",
    },
];

export default function About() {
    return (
        <section className="page-panel about-panel lg:rounded-2xl">
            <div className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="mb-12">
                    <p className="hero-kicker mb-4">Perfil profesional</p>
                    <h1 className="after-effect">Sobre mí</h1>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                    <div className="about-photo-wrap">
                        <img src={AboutMeImg} className="about-photo" alt="Cristhian Alexander trabajando como desarrollador" />
                        <span className="about-photo-label"><i className="bx bx-code-curly" /> Full-stack developer</span>
                    </div>
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[.16em] text-[#d7f36b]">Quién soy</p>
                        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">Desarrollo soluciones digitales que hacen más simple el trabajo.</h2>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a6aaa5]">
                            Soy desarrollador full-stack con experiencia creando aplicaciones web para resolver necesidades reales de negocio. Trabajo con Laravel, React y TypeScript para convertir procesos complejos en productos claros, mantenibles y escalables.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-[#a6aaa5]">
                            Me caracterizan el pensamiento orientado a soluciones, la comunicación con equipos y el cuidado por escribir código limpio que pueda crecer junto al producto.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="about-tag">Laravel</span><span className="about-tag">React</span><span className="about-tag">TypeScript</span><span className="about-tag">REST APIs</span>
                        </div>
                    </div>
                </div>

                <div className="about-info-grid mt-14">
                    {personalInfo.map((item) => (
                        <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="about-info-item">
                            <span className="about-info-icon"><i className={`bx ${item.icon}`} /></span>
                            <span className="min-w-0"><span className="about-info-label">{item.label}</span><span className="about-info-value">{item.value}</span></span>
                        </a>
                    ))}
                </div>

                <div className="mt-16">
                    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="hero-kicker mb-3">Cómo puedo aportar</p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Lo que hago mejor</h2>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-[#a6aaa5]">Una combinación de producto, ingeniería y atención al detalle.</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {capabilities.map((capability) => (
                            <article key={capability.title} className="about-capability">
                                <span className={`about-capability-icon ${capability.accent}`}><i className={`bx ${capability.icon}`} /></span>
                                <h3 className="mt-5 text-xl font-semibold text-white">{capability.title}</h3>
                                <p className="mt-3 leading-7 text-[#a6aaa5]">{capability.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="site-footer px-5 py-6 text-center text-sm sm:px-8">© 2025 Cristhian Alexander Sandoval Baldera</footer>
        </section>
    );
}
