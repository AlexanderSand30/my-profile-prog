import { Link } from "react-router-dom";
import miImagen from './../assets/img/yo.jpg';
import curriculumPDF from './../assets/documents/Curriculum-CristhianAlexander.pdf';

export default function Profile() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh]">
                <img
                    src={miImagen}
                    className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] border-4 border-[#1E293B] shadow-lg shadow-[#3d4c62] transform hover:scale-110 transition-transform duration-300 ease-in-out hover:rotate-2"
                    alt="Profile Picture"
                />
                <h3 className="mt-6 mb-1 text-3xl font-semibold text-white text-center">
                    Cristhian Alexander Sandoval Baldera
                </h3>
                <p className="mb-4 text-[#7B7B7B]">
                    Programador Full-Stack
                </p>
                <div className="flex space-x-3">
                    <Link to={'https://www.facebook.com/cristhianalexander.sandovalbaldera'} title="Facebook" target="_blank">
                        <span className="socialbtn text-[#1773EA] hover:text-white">
                            <i className='bx bxl-facebook text-xl' ></i>
                        </span>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/cristhian-sandoval-baldera-is/'} title="Linkedink" target="_blank">
                        <span className="socialbtn text-[#0a66c2] hover:text-white">
                            <i className='bx bxl-linkedin  text-xl' ></i>
                        </span>
                    </Link>
                    <Link to={'https://www.instagram.com/cristhian_1930/'} title="Instagram" target="_blank">
                        <span className="socialbtn text-[#c13584] hover:text-white">
                            <i className='bx bxl-instagram text-2xl' ></i>
                        </span>
                    </Link>
                </div>
                <div>
                    <a
                        href={curriculumPDF}
                        download="Curriculum-Cristhian Alexander.pdf"
                        className="flex items-center bg-gradient-to-r from-[#FA5252] hover:to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l hover:from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
                    >
                        <i className='bx bx-download text-2xl mr-2 animate-bounce'></i>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
