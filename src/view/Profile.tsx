import { Link } from "react-router-dom";
import miImagen from './../assets/img/yo.jpg';
import curriculumPDF from './../assets/documents/Curriculum-CristhianAlexander.pdf';

export default function Profile() {
    return (
        <section className="home-hero grid min-h-[calc(100vh-92px)] items-center py-12 lg:grid-cols-[1fr_390px] lg:gap-20 lg:py-20">
            <div className="order-2 lg:order-1">
                <div className="mb-5 flex items-center gap-3">
                    <span className="status-dot" />
                    <p className="hero-kicker">Disponible para nuevos retos</p>
                </div>
                <h1 className="max-w-3xl text-5xl font-bold leading-[.95] tracking-[-.07em] text-white sm:text-7xl lg:text-8xl">
                    Creo productos digitales que <span className="accent-text">resuelven.</span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[#a6aaa5]">
                    Soy Cristhian Alexander, desarrollador especializado en construir experiencias web robustas con Laravel, React y TypeScript.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link to="/works" className="flex items-center gap-2 rounded-full bg-[#d7f36b] px-6 py-3 font-bold text-[#101313] transition hover:-translate-y-1">
                        Ver proyectos <i className="bx bx-right-arrow-alt text-xl" />
                    </Link>
                    <a href={curriculumPDF} download="Curriculum-Cristhian Alexander.pdf" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-[#d7f36b] hover:text-[#d7f36b]">
                        Descargar CV <i className="bx bx-download text-xl" />
                    </a>
                </div>
                <div className="mt-12 flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/cristhian-sandoval-baldera-is/" title="LinkedIn" target="_blank" rel="noreferrer"><span className="socialbtn text-[#63a9e8]"><i className="bx bxl-linkedin text-xl" /></span></a>
                    <a href="https://www.instagram.com/cristhian_1930/" title="Instagram" target="_blank" rel="noreferrer"><span className="socialbtn text-[#f5a0c4]"><i className="bx bxl-instagram text-xl" /></span></a>
                    <span className="ml-2 text-xs uppercase tracking-[.18em] text-[#a6aaa5]">Mochumi, Perú</span>
                </div>
            </div>
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="hero-visual">
                    <div className="hero-orbit hero-orbit-one" />
                    <div className="hero-orbit hero-orbit-two" />
                    <img
                        src={miImagen}
                        className="hero-image relative z-10 h-64 w-64 rounded-[35%] object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-80 sm:w-80"
                        alt="Cristhian Alexander Sandoval Baldera"
                    />
                    <div className="hero-badge">
                        <span className="text-2xl font-bold text-[#d7f36b]">4+</span>
                        <span className="text-[.65rem] uppercase tracking-widest text-[#a6aaa5]">años creando</span>
                    </div>
                    <div className="hero-stack">
                        <span>Laravel</span><span>React</span><span>TypeScript</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
