import data from "./../data/Resumen.json";
import dataSkills from "./../data/Skills.json";

export default function Resume() {
    const { educations = [], experiences = [], others_studies: otherStudies = [] } = data;
    const { skills = [], knowledge = [] } = dataSkills;

    return (
        <section className="lg:rounded-2xl bg-[#111111]">
            <div className="aos-init aos-animate" data-aos="fade">
                <div className="px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="py-12">
                        <h2 className=" after-effect after:left-52 mb-[40px] mt-12 lg:mt-0">Resumen</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className='bx bxs-graduation text-3xl text-[#F95054]'></i>
                                    <h4 className="text-3xl text-white font-medium">
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Educación
                                        </span>
                                    </h4>
                                </div>
                                {educations.map(education => (
                                    <div key={education.id} className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" style={{ background: 'transparent' }}>
                                        <span className="text-sm font-medium text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {education.dates}
                                            </span>
                                        </span>
                                        <h3 className="text-xl font-medium text-white">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {education.profession}
                                            </span>
                                        </h3>
                                        <p className="text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {education.study_place}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className='bx bxs-graduation text-3xl text-[#F95054]'></i>
                                    <h4 className="text-3xl text-white font-medium">
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Experiencia
                                        </span>
                                    </h4>
                                </div>
                                {experiences.map(experience => (
                                    <div key={experience.id} className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" style={{ background: 'transparent' }}>
                                        <span className="text-sm font-medium text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {experience.dates}
                                            </span>
                                        </span>
                                        <h3 className="text-xl font-medium text-white">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {experience.occupation}
                                            </span>
                                        </h3>
                                        <p className="text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {experience.place}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className='bx bxs-graduation text-3xl text-[#F95054]'></i>
                                    <h4 className="text-3xl text-white font-medium">
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            Especialización
                                        </span>
                                    </h4>
                                </div>
                                {otherStudies.map(studie => (
                                    <div key={studie.id} className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" style={{ background: 'transparent' }}>
                                        <span className="text-sm font-medium text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {studie.dates}
                                            </span>
                                        </span>
                                        <h3 className="text-xl font-medium text-white">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {studie.name}
                                            </span>
                                        </h3>
                                        <p className="text-[#b7b7b7]">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {studie.place}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>


                <div className="bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <h4 className="text-3xl text-white font-bold mb-6">
                                <span style={{ verticalAlign: 'inherit' }}>
                                    Habilidades laborales
                                </span>
                            </h4>
                            {skills.map(skill => (
                                <div key={skill.id} className="mb-7">
                                    <div className="flex justify-between py-1">
                                        <span className="text-base text-[#A6A6A6] font-semibold ">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                <span style={{ verticalAlign: 'inherit' }}>
                                                    {skill.name}
                                                </span>
                                            </span>
                                        </span>
                                        <span className="text-base text-[#A6A6A6] font-semibold pr-5">
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                <span style={{ verticalAlign: 'inherit' }}>
                                                    {skill.percent}
                                                </span>
                                            </span>
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                <span style={{ verticalAlign: 'inherit' }}>
                                                    %
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="relative w-full h-1 bg-zinc-700 rounded-2xl overflow-hidden">
                                        <div className={`absolute top-0 left-0 h-full rounded-2xl`} style={{ width: skill.percent + '%', backgroundColor: skill.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-3xl text-white font-bold mb-6">
                                <span style={{ verticalAlign: 'inherit' }}>
                                    Conocimientos
                                </span>
                            </h4>
                            <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                                {knowledge.map(item => (
                                    <button key={item.id} className="resume-btn">
                                        <span style={{ verticalAlign: 'inherit' }}>
                                            <span style={{ verticalAlign: 'inherit' }}>
                                                {item.name}
                                            </span>
                                        </span>
                                    </button>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="overflow-hidden rounded-b-2xl" style={{ background: 'transparent' }}>
                <p className="text-center py-6 text-zinc-400 font-semibold ">© 2025 Todos los derechos reservados
                </p>
            </footer>
        </section>
    )
}
