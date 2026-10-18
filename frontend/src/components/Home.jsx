    import profile from '../assets/images/profile.png'; 

    function Home() {
        return (
            <section id="home" className="scroll-mt-24 min-h-[85vh] bg-gradient-to-br from-white via-violet-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 flex flex-wrap justify-center lg:justify-between gap-8 items-center">

                    <div className="w-full max-w-xl space-y-6">
                        <div className="space-y-3">
                            <p className="text-gray-600 font-medium text-lg">Hi, I'm</p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">Selvakumar</h1>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">MERN Stack{" "}<span className="text-violet-600">Developer</span></h2>
                        </div>

                        <p className="max-w-xl mx-auto md:mx-0 text-gray-600 leading-8 text-base sm:text-lg">
                            I build modern, responsive, and user-friendly web
                            applications using React, Node.js, Express.js, and
                            MongoDB. I enjoy turning ideas into meaningful
                            digital experiences.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-1 transition-all duration-300">View My Projects<span>→</span></a>
                            <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:border-violet-500 hover:text-violet-600 hover:-translate-y-1 transition-all duration-300"> Download Resume
                                <span>↓</span>
                            </a>
                        </div>

                        <div className="flex justify-center md:justify-start gap-4 pt-3">
                            <a
                                href="https://github.com/selvakumar-d-byte"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="group flex items-center gap-2 h-11 px-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-violet-600 hover:border-violet-300 transition-all duration-300"
                            >
                                <i className="fa-brands fa-github text-xl"></i>
                                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-20 group-hover:opacity-100">GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/selvakumar-d"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="group flex items-center gap-2 h-11 px-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-violet-600 hover:border-violet-300 transition-all duration-300"
                            >
                                <i className="fa-brands fa-linkedin text-xl"></i>

                                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:items-center text-center">
                        <div className="w-80 h-96 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-200">
                            <img src={profile} alt="Selva" className="w-full h-full object-cover"/>
                        </div>
                    </div>

                </div>
            </section>
        );
    }

    export default Home;
