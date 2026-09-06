import data from "./../data/Resumen.json";
import dataSkills from "./../data/Skills.json";

export default function Resume() {
    const { educations = [], experiences = [], others_studies: otherStudies = [] } = data;
    const { skills = [], knowledge = [] } = dataSkills;
    const timelineGroups = [
        { title: "Educación", icon: "bxs-graduation", items: educations.map((item) => ({ id: item.id, date: item.dates, name: item.profession, place: item.study_place })) },
        { title: "Experiencia", icon: "bx-briefcase-alt-2", items: experiences.map((item) => ({ id: item.id, date: item.dates, name: item.occupation, place: item.place })) },
        { title: "Especialización", icon: "bx-certification", items: otherStudies.map((item) => ({ id: item.id, date: item.dates, name: item.name, place: item.place })) },
    ];

    return (
        <section className="page-panel resume-panel lg:rounded-2xl">
            <div className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="mb-12 max-w-2xl">
                    <p className="hero-kicker mb-4">Trayectoria y herramientas</p>
                    <h1 className="after-effect">Resumen</h1>
                    <p className="mt-6 text-lg leading-8 text-[#a6aaa5]">Una vista rápida de mi experiencia, formación y las tecnologías que utilizo para convertir necesidades en soluciones.</p>
                </div>

                <div className="resume-timeline-grid">
                    {timelineGroups.map((group) => (
                        <section key={group.title}>
                            <div className="resume-section-heading"><span><i className={`bx ${group.icon}`} /></span><h2>{group.title}</h2></div>
                            <div className="resume-timeline">
                                {group.items.map((record) => (
                                    <article key={record.id} className="resume-entry">
                                        <span className="resume-entry-dot" />
                                        <p className="resume-date">{record.date}</p>
                                        <h3>{record.name}</h3>
                                        <p className="resume-place">{record.place}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            <div className="resume-skills-band px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
                    <div>
                        <p className="hero-kicker mb-3">Fortalezas técnicas</p>
                        <h2 className="mb-8 text-3xl font-bold text-white">Habilidades laborales</h2>
                        <div className="grid gap-6">
                            {skills.map((skill) => (
                                <div key={skill.id}>
                                    <div className="mb-2 flex justify-between gap-4 text-sm font-semibold"><span className="text-[#f5f3ed]">{skill.name}</span><span className="text-[#a6aaa5]">{skill.percent}%</span></div>
                                    <div className="resume-progress"><span style={{ width: `${skill.percent}%`, backgroundColor: skill.color }} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="hero-kicker mb-3">Stack de trabajo</p>
                        <h2 className="mb-8 text-3xl font-bold text-white">Conocimientos</h2>
                        <div className="flex flex-wrap gap-3">
                            {knowledge.map((item) => <span key={item.id} className="resume-skill-tag">{item.name.trim()}</span>)}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="site-footer px-5 py-6 text-center text-sm sm:px-8">© 2025 Cristhian Alexander Sandoval Baldera</footer>
        </section>
    );
}
