
function About() {
    const details = [
        {
            icon: "🎓",
            title: "Education",
            description: "B.Sc. Mathematics",
        },
        {
            icon: "💻",
            title: "Development",
            description: "MERN Stack",
        },
        {
            icon: "🚀",
            title: "Projects",
            description: "Building web applications",
        },
        {
            icon: "📚",
            title: "Learning",
            description: "Always improving",
        },
    ];

    return (
        <section
            id="about"
            className="py-20 px-5 md:px-8 bg-white scroll-mt-16"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* About Content */}
                <div>
                    <p className="text-violet-600 font-semibold uppercase tracking-widest text-sm">
                        Get to know me
                    </p>

                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                        About Me
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">
                        I'm passionate about building modern web
                        applications and solving real-world problems
                        through technology. I enjoy learning new tools,
                        improving my development skills, and creating
                        intuitive user experiences.
                    </p>

                    <a
                        href="#experience"
                        className="inline-flex mt-6 px-5 py-3 rounded-xl border border-violet-200 text-violet-700 font-semibold hover:bg-violet-50 transition-colors duration-300"
                    >
                        More About Me →
                    </a>
                </div>

                {/* About Details */}
                <div className="grid grid-cols-2 gap-4">
                    {details.map((item) => (
                        <div
                            key={item.title}
                            className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="text-3xl">
                                {item.icon}
                            </span>

                            <h3 className="mt-4 font-bold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default About;
