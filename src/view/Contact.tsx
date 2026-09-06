const contactItems = [
    {
        label: "Teléfono",
        value: "+51 995 154 293",
        href: "tel:+51995154293",
        icon: "bx-phone-call",
        color: "contact-icon-lime",
    },
    {
        label: "Correo electrónico",
        value: "alexandersandovalbaldera@gmail.com",
        href: "mailto:alexandersandovalbaldera@gmail.com",
        icon: "bx-envelope",
        color: "contact-icon-coral",
    },
    {
        label: "Ubicación",
        value: "Mochumi, Lambayeque, Perú",
        href: "https://www.google.com/maps/search/?api=1&query=Mochumi+Lambayeque+Peru",
        icon: "bx-map",
        color: "contact-icon-blue",
    },
];

export default function Contact() {
    return (
        <section className="page-panel contact-panel lg:rounded-2xl">
            <div className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="mb-10 max-w-2xl">
                    <p className="hero-kicker mb-4">Hablemos de tu próximo producto</p>
                    <h1 className="after-effect">Contacto</h1>
                    <p className="mt-6 text-lg leading-8 text-[#a6aaa5]">
                        ¿Tienes una idea, un proyecto en marcha o un reto técnico? Cuéntame qué necesitas y conversemos sobre cómo puedo ayudarte.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                    <div>
                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {contactItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                    className="contact-card group"
                                >
                                    <span className={`contact-icon ${item.color}`}><i className={`bx ${item.icon}`} /></span>
                                    <span className="min-w-0">
                                        <span className="contact-label">{item.label}</span>
                                        <span className="contact-value">{item.value}</span>
                                    </span>
                                    <i className="bx bx-right-arrow-alt contact-arrow" />
                                </a>
                            ))}
                        </div>
                        <div className="contact-note mt-6">
                            <i className="bx bx-time-five text-2xl text-[#d7f36b]" />
                            <div>
                                <p className="font-semibold text-white">Tiempo de respuesta</p>
                                <p className="mt-1 text-sm leading-6 text-[#a6aaa5]">Normalmente respondo dentro de las próximas 24 horas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap">
                        <div className="mb-8">
                            <p className="text-sm uppercase tracking-[.16em] text-[#d7f36b]">Escríbeme</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">Cuéntame sobre tu proyecto</h2>
                        </div>
                        <form action="mailto:alexandersandovalbaldera@gmail.com" method="post" encType="text/plain" className="grid gap-6">
                            <label className="contact-field">
                                <span>Nombre</span>
                                <input type="text" name="name" autoComplete="name" placeholder="Tu nombre" required />
                            </label>
                            <label className="contact-field">
                                <span>Correo electrónico</span>
                                <input type="email" name="email" autoComplete="email" placeholder="tu@email.com" required />
                            </label>
                            <label className="contact-field">
                                <span>Mensaje</span>
                                <textarea name="message" placeholder="¿En qué puedo ayudarte?" rows={5} required />
                            </label>
                            <button type="submit" className="contact-submit">
                                Enviar mensaje <i className="bx bx-send text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
