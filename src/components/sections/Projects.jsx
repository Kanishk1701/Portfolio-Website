import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Movie App</h3>
            <p className="text-gray-400 mb-4">
              Developed a responsive Movie Application using React.js with a polished UI and Firebase Authentication for secure user login/logout. Integrated real-time data fetching from the TMDB API to display dynamic movie content, detailed information, and trailer playback via YouTube. Utilized React Router for smooth navigation and modern state management for an intuitive user experience.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["React.js", "Firebase", "TMDB API", "YouTube API Integration"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Kanishk1701/movieflix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project ➡️ {" "}
              </a>
            </div>

          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Face Detector</h3>
            <p className="text-gray-400 mb-4">
              Developed a real-time facial recognition system in Python capable of detecting and tracking multiple faces simultaneously via the device’s camera. Utilized OpenCV for efficient video processing and robust face detection under varying lighting conditions. Designed a smooth, intuitive interface with bounding boxes around faces, optimized for performance on standard hardware.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "OpenCV", "NumPy", "Dlib"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Kanishk1701/Face-Detector"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project ➡️ {" "}
              </a>
            </div>

          </div>


        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}