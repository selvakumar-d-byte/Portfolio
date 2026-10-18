
function Home() {
    return (
        <section
            id="home"
            className="scroll-mt-24 min-h-[85vh] bg-gradient-to-br from-white via-violet-50 to-blue-50"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left">
                    <div className="space-y-3">
                        <p className="text-gray-600 font-medium text-lg">
                            Hi, I'm
                        </p>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
                            Selvakumar
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
                            MERN Stack{" "}
                            <span className="text-violet-600">
                                Developer
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-xl mx-auto md:mx-0 text-gray-600 leading-8 text-base sm:text-lg">
                        I build modern, responsive, and user-friendly web
                        applications using React, Node.js, Express.js, and
                        MongoDB. I enjoy turning ideas into meaningful
                        digital experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-1 transition-all duration-300"
                        >
                            View My Projects
                            <span>→</span>
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:border-violet-500 hover:text-violet-600 hover:-translate-y-1 transition-all duration-300"
                        >
                            Download Resume
                            <span>↓</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 pt-3">
                        {/* GitHub */}
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="group flex items-center gap-2 h-11 px-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-violet-600 hover:border-violet-300 transition-all duration-300"
                        >
                            <i className="fa-brands fa-github text-xl"></i>

                            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-20 group-hover:opacity-100">
                                GitHub
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="group flex items-center gap-2 h-11 px-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-violet-600 hover:border-violet-300 transition-all duration-300"
                        >
                            <i className="fa-brands fa-linkedin text-xl"></i>

                            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100">
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Profile Card */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-[2rem] bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 p-1 shadow-2xl shadow-violet-200">
                        <div className="w-full h-full rounded-[1.8rem] bg-white/95 flex flex-col items-center justify-center p-6 text-center">

                            {/* Profile Image Placeholder */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 border-4 border-white shadow-lg flex items-center justify-center">
                                <i className="fa-solid fa-user text-7xl text-violet-500"></i>
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-gray-900">
                                Selva
                            </h3>

                            <p className="mt-1 text-violet-600 font-medium">
                                MERN Stack Developer
                            </p>

                            <div className="mt-5 flex flex-wrap justify-center gap-2">
                                {["React", "Node.js", "MongoDB"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;
