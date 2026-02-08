import { Link, Outlet, useLocation } from "react-router-dom";

export default function LayoutApp() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="bg-page bg-black min-h-screen md:pb-16 w-full">
            <div className="z-50">
                <div className="xl:mx-32">
                    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[999999]">
                        <div className="flex justify-between w-full px-4 lg:bg-transparent">
                            <div className="flex items-center justify-between w-full space-x-4 lg:my-8 my-5">
                                <a href="#" className="text-4xl font-semibold">
                                    <span className="text-red-400">Alexander dev</span>
                                </a>
                                <div className="flex items-center">
                                    <span className="lg:opacity-0 lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer text-white">
                                        <i className='bx bx-menu text-2xl'></i>
                                    </span>
                                </div>
                            </div>

                            <nav className="hidden lg:block text-sm">
                                <ul className="flex my-12">
                                    <li>
                                        <Link
                                            to={'/'}
                                            className={`rounded-md cursor-pointer font-poppins text-white bg-[#212425] flex items-center mx-2.5 py-2.5 md:px-4 xl:px-5 transition-all duration-300 ease-in-out  ${currentPath === '/' ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] mx-2.5 hover:text-white '}`}
                                        ><i className='bx bx-home-alt-2 text-xl mr-2 leading-0' ></i>
                                            <span className="font-medium">Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/about'}
                                            className={`rounded-md cursor-pointer font-poppins text-white bg-[#212425] flex items-center mx-2.5 py-2.5 md:px-4 xl:px-5 transition-all duration-300 ease-in-out  ${currentPath === '/about' ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] mx-2.5 hover:text-white '}`}
                                        ><i className='bx bx-user text-xl mr-2 leading-0' ></i>
                                            <span className="font-medium">About</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/resume'}
                                            className={`rounded-md cursor-pointer font-poppins text-white bg-[#212425] flex items-center mx-2.5 py-2.5 md:px-4 xl:px-5 transition-all duration-300 ease-in-out  ${currentPath === '/resume' ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] mx-2.5 hover:text-white '}`}
                                        ><i className='bx bx-news text-xl mr-2 leading-0' ></i>
                                            <span className="font-medium">Resume</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/works'}
                                            className={`rounded-md cursor-pointer font-poppins text-white bg-[#212425] flex items-center mx-2.5 py-2.5 md:px-4 xl:px-5 transition-all duration-300 ease-in-out  ${currentPath === '/works' ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] mx-2.5 hover:text-white '}`}
                                        ><i className='bx bx-code-block text-xl mr-2 leading-0' ></i>
                                            <span className="font-medium">Works</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={'/contact'}
                                            className={`rounded-md cursor-pointer font-poppins text-white bg-[#212425] flex items-center mx-2.5 py-2.5 md:px-4 xl:px-5 transition-all duration-300 ease-in-out  ${currentPath === '/contact' ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] mx-2.5 hover:text-white '}`}
                                        ><i className='bx bxs-id-card text-xl mr-2 leading-0' ></i>
                                            <span className="font-medium">Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <Outlet />

                </div>
            </div>
        </div>
    )
}
