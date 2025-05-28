export const About = () => {

    const frontendSkils = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
    const backendSkils = ["Next.js", "FireBase", "NextAuth.js", "Third-Party API Integration"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate entry-level developer with experienceinbuilding scalable web applications and creating innovative solutions
                </p>

                <div className="grid grid-cols-1 md::grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkils.map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2_px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                            
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkils.map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2_px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:traslate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                 <li>
                    <strong> B-Tech. in Computer Science </strong> - Birla Institute Of Applied Sciences(2022-2026)
                 </li>
                 <li>
                    Relevant Coursework: Data Structures & Algorithms, Web Development, Database Management...
                 </li>
                 <li>
                    Secondary and Senior Secondary Education from Sherwood College, Nainital (2012-2022)
                 </li>
                </ul>
                </div>

                 <div className="p-6 rounded-xl border-white/10 border hover:traslate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="list-disc list-inside text-gray-300 space-y-2 ">
                 <div>
                    <h4>Built Websites of local businesses and hotels</h4>
                    <p>
                        Assisted in building front-end components for web applications using React and Tailwind CSS and integration of APIs
                    </p>
                 </div>
                </div>
                </div>

            </div>

        </div>
    </section>


}