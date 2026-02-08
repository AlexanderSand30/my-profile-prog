import { Link } from "react-router-dom";
import AboutMeImg from "./../assets/img/aboutme.jpg"

export default function About() {
    return (
        <section>
            <div className="lg:rounded-2xl bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20 ">
                <div className="aos-init aos-animate" data-aos="fade">
                    <div className="py-12">
                        <h2 className=" after-effect after:left-52 mt-12 lg:mt-0">Sobre Mi</h2>
                        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                            <div className="col-span-12 md:col-span-4">
                                <img src={AboutMeImg} className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0" alt="" />
                            </div>
                            <div className="col-span-12 md:col-span-8 space-x-2.5">
                                <div className="md:mr-12 xl:mr-16">
                                    <h3 className="text-2xl font-medium text-white mb-2.5">
                                        ¿Quien soy?
                                    </h3>
                                    <p className="text-gray-400 leading-7 text-lg">
                                        Soy desarrollador full stack con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como Laravel, React, TypeScript.
                                        A lo largo de mi trayectoria he participado en proyectos relacionados con gestión clínica, sistemas contables y salud ocupacional,
                                        desarrollando APIs robustas, interfaces eficientes y optimizando procesos clave.
                                    </p>
                                    <p className="text-gray-400 leading-7 text-lg mt-2.5">
                                        Me considero una persona comprometida, orientada a soluciones, con capacidad de adaptación y enfoque en escribir código limpio,
                                        mantenible y escalable.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-white my-5">
                                        Informacion Personal
                                    </h3>
                                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex">
                                            <span className="text-pink-600 bg-[#212425] shadow mr-2.5 flex items-center justify-center rounded-md text-lg w-12">
                                                <i className='bx bx-mobile-alt text-3xl' ></i>
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-300">Télefono</p>
                                                <h6 className="font-medium text-white">
                                                    <span className="hover:text-[#FA5252] duration-300 transition">
                                                        +51 995 154 293
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="text-red-600 bg-[#212425] shadow mr-2.5 flex items-center justify-center rounded-md text-lg w-12">
                                                <i className='bx bx-map text-3xl' ></i>
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-300">Ubicación</p>
                                                <h6 className="font-medium text-white">
                                                    <span className="font-medium">
                                                        Mochumi, Lambayeque, Peru
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="text-cyan-600 bg-[#212425] shadow mr-2.5 flex items-center justify-center rounded-md text-lg w-12">
                                                <i className='bx bx-envelope text-3xl' ></i>
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-300">Correo Electrónico</p>
                                                <h6 className="font-medium text-white">
                                                    <Link to={'mailto:alexandersandovalbaldera@gmail.com'} className="hover:text-cyan-600 duration-300 transition">
                                                        alexandersandovalbaldera@gmail.com
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="text-purple-500 bg-[#212425] shadow mr-2.5 flex items-center justify-center rounded-md text-lg w-12">
                                                <i className='bx bx-calendar text-3xl' ></i>
                                            </span>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-300">Cumpleaños</p>
                                                <h6 className="font-medium text-white">
                                                    <span className="font-medium">
                                                        30 de Abril de 1999
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-12">
                        <h3 className="text-[35px] dark:text-white font-medium pb-5">¡Lo que hago!</h3>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                            <div className="about-box dark:bg-transparent" style={{ background: 'transparent' }}>
                                <i className='bx bx-layout text-sky-400 text-6xl'></i>
                                <div className="space-y-2 ">
                                    <h3 className="text-white text-xl font-semibold">Desarrollo web</h3>
                                    <p className=" leading-8 text-[#A6A6A6]">
                                        Creo aplicaciones modernas, funcionales y escalables utilizando tecnologías como Laravel (PHP) para el backend y React para el frontend
                                    </p>
                                </div>
                            </div>
                            <div className="about-box dark:bg-transparent" style={{ background: 'transparent' }}>
                                <i className='bx bx-code-alt text-yellow-500 text-6xl'></i>
                                <div className="space-y-2 ">
                                    <h3 className="text-white text-xl font-semibold">Api Rest</h3>
                                    <p className=" leading-8 text-[#A6A6A6]">
                                        Utilizo buenas prácticas para crear endpoints seguros, eficientes y fáciles de consumir por aplicaciones frontend (como React) o móviles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="overflow-hidden rounded-b-2xl" style={{ background: 'transparent' }}>
                        <p className="text-center py-6 text-zinc-400 font-semibold ">© 2025 Todos los derechos reservados
                        </p>
                    </footer>
                </div>
            </div>
        </section>
    )
}
