import SystemSoftImg from "./../assets/img/proyects/System-soft.png";
import SystemContImg from "./../assets/img/proyects/system-cont.png";
import SystemPlusImg from "./../assets/img/proyects/system-plus.png";
import GestionMercados from "./../assets/img/proyects/gestion-mercados.jpg";

const projects = [
    { title: "Sistema de Gestión Clínica", place: "Clínica del Pacífico · Chiclayo", image: SystemSoftImg, type: "Gestión de operaciones", tags: ["Laravel", "React", "SQL"] },
    { title: "Sistema de Salud Ocupacional", place: "Clínica del Pacífico · Chiclayo", image: SystemPlusImg, type: "Salud y seguimiento", tags: ["React", "TypeScript", "API REST"] },
    { title: "Sistema Contable y RRHH", place: "Clínica del Pacífico · Chiclayo", image: SystemContImg, type: "Administración empresarial", tags: ["PHP", "Laravel", "MySQL"] },
    { title: "Gestión de Mercados", place: "Municipalidad Provincial de Chiclayo", image: GestionMercados, type: "Gestión pública", tags: ["Web app", "Datos", "Procesos"] },
];

export default function Works() {
    return (
        <section className="page-panel works-panel lg:rounded-2xl">
            <div className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16">
                <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="hero-kicker mb-4">Trabajo seleccionado</p>
                        <h1 className="after-effect">Proyectos</h1>
                        <p className="mt-6 text-lg leading-8 text-[#a6aaa5]">Sistemas y productos digitales creados para ordenar información, agilizar operaciones y ayudar a los equipos a trabajar mejor.</p>
                    </div>
                    <span className="project-count"><strong>04</strong> proyectos destacados</span>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article key={project.title} className={`project-showcase ${index % 2 === 1 ? "project-showcase-offset" : ""}`}>
                            <div className="project-image-wrap">
                                <img src={project.image} alt={`Vista previa de ${project.title}`} />
                                <span className="project-index">0{index + 1}</span>
                            </div>
                            <div className="pt-5">
                                <p className="project-type">{project.type}</p>
                                <h2 className="mt-2 text-2xl font-bold text-white">{project.title}</h2>
                                <p className="mt-2 text-sm text-[#a6aaa5]">{project.place}</p>
                                <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="portfolio-note mt-14">
                    <i className="bx bx-info-circle text-xl text-[#d7f36b]" />
                    <p>Las imágenes son referenciales. Los productos, marcas e interfaces pertenecen a sus respectivos propietarios y se muestran con fines de portafolio profesional.</p>
                </div>
            </div>
            <footer className="site-footer px-5 py-6 text-center text-sm sm:px-8">© 2025 Cristhian Alexander Sandoval Baldera</footer>
        </section>
    );
}
