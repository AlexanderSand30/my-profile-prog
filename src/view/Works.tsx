import SystemSoftImg from "./../assets/img/proyects/System-soft.png";
import SystemContImg from "./../assets/img/proyects/system-cont.png";
import SystemPlusImg from "./../assets/img/proyects/system-plus.png";
import GestionMercados from "./../assets/img/proyects/gestion-mercados.jpg";

export default function Works() {
    return (
        <section className="lg:rounded-2xl bg-[#111111]">
            <div className="aos-init aos-animate" data-aos="fade">
                <div className="container mb-8  px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12">
                        <h2 className=" after-effect after:left-52 mt-12 lg:mt-0">Portfolio</h2>
                    </div>
                    <p className="text-md text-gray-400 text-justify">
                        A continuacion se muestra una colección de proyectos destacados en los que he colaborado, mostrando habilidades y experiencia en desarrollo web.
                    </p>
                    <p className="text-xs text-gray-400 text-center">* Las imagenes mostradas son referenciales*</p>
                    <div className="flex -ml-[30px] min-h-[50vh] w-auto">
                        <div className="bg-clip-padding p-[30px] w-1/2">
                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={SystemSoftImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
                                </div>
                                <span className="pt-5 text-[14px] font-normal block text-[#A6A6A6]">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Programación Web
                                        </span>
                                    </span>
                                </span>
                                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] text-white mt-2">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Sistema de Gestion Clínica
                                            <p className="text-xs">Clinica del pacifico - Chiclayo</p>
                                        </span>
                                    </span>
                                </h2>
                            </div>

                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={SystemPlusImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
                                </div>
                                <span className="pt-5 text-[14px] font-normal block text-[#A6A6A6]">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Programación Web
                                        </span>
                                    </span>
                                </span>
                                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] text-white mt-2">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Sistema de Salud Ocupacional
                                            <p className="text-xs">Clinica del pacifico - Chiclayo</p>
                                        </span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="bg-clip-padding p-[30px] w-1/2">
                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={SystemContImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
                                </div>
                                <span className="pt-5 text-[14px] font-normal block text-[#A6A6A6]">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Programación Web
                                        </span>
                                    </span>
                                </span>
                                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] text-white mt-2">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Sistema de Gestion Contable y RRHH
                                            <p className="text-xs">Clinica del pacifico - Chiclayo</p>
                                        </span>
                                    </span>
                                </h2>
                            </div>
                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={GestionMercados} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
                                </div>
                                <span className="pt-5 text-[14px] font-normal block text-[#A6A6A6]">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Programación Web
                                        </span>
                                    </span>
                                </span>
                                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] text-white mt-2">
                                    <span style={{ verticalAlign: 'inherit' }}>
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Gestion Mercados
                                            <p className="text-xs">Municipalidad Chiclayo</p>
                                        </span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-white text-center">
                            <p>
                                Todos los derechos de los productos, marcas e interfaces mostradas pertenecen a sus respectivos propietarios.
                            </p>
                            <p>
                                El contenido se presenta únicamente con fines de portafolio profesional.
                            </p>
                        </span>
                    </div>
                </div>
                <footer className="overflow-hidden rounded-b-2xl" style={{ background: 'transparent' }}>
                    <p className="text-center py-6 text-zinc-400 font-semibold ">© 2025 Todos los derechos reservados
                    </p>
                </footer>
            </div>
        </section>
    )
}
