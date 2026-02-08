import clipasoftImg from "./../assets/img/proyects/clipasoft.png";
import clipacontImg from "./../assets/img/proyects/clipacont.png";
import clipaPlusImg from "./../assets/img/proyects/clipaplus.png";
import GestionMercados from "./../assets/img/proyects/gestion-mercados.jpg";

export default function Works() {
    return (
        <section className="lg:rounded-2xl bg-[#111111]">
            <div className="aos-init aos-animate" data-aos="fade">
                <div className="container mb-8  px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12">
                        <h2 className=" after-effect after:left-52 mt-12 lg:mt-0">Portfolio</h2>
                    </div>
                    <p className="text-md text-gray-400">
                        Una colección de proyectos destacados en los que he colaborado, mostrando habilidades y experiencia en desarrollo web.
                    </p>
                    <div className="flex -ml-[30px] min-h-[50vh] w-auto">
                        <div className="bg-clip-padding p-[30px] w-1/2">
                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={clipasoftImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
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
                                        <span style={{ verticalAlign: 'inherit' }}>Clipasoft</span>
                                    </span>
                                </h2>
                            </div>

                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={clipaPlusImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
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
                                        <span style={{ verticalAlign: 'inherit' }}>ClipacPlus</span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="bg-clip-padding p-[30px] w-1/2">
                            <div className="rounded-lg p-6 border-[2px] border-[#212425] bg-transparent mb-8">
                                <div className="overflow-hidden rounded-lg">
                                    <img src={clipacontImg} className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" alt="" />
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
                                        <span style={{ verticalAlign: 'inherit' }}>Clipacont</span>
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
                                        <span style={{ verticalAlign: 'inherit' }}>Gestion Mercados</span>
                                    </span>
                                </h2>
                            </div>
                        </div>
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
