import { useState } from 'react';
import profileImage from '../../assets/Kanishk_Photo.JPG';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden bg-black text-white">

           
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 px-8 py-16 z-20 max-w-2xl relative">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                    Hi, I'm Kanishk Pandey
                </h1>

                <p className="text-gray-300 text-lg mb-8">
                    I'm an entry-level web developer passionate about crafting responsive, user-friendly digital experiences.
                    I blend clean code with creative problem-solving to build impactful applications. I'm aiming to grow into
                    a full-stack developer capable of architecting elegant solutions to complex challenges.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 transition shadow hover:shadow-blue-400/30">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium hover:bg-blue-500/10 hover:shadow hover:shadow-blue-500/20 transition">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right Column: Image with Gradient Overlay */}
            <div className="w-full md:w-1/2 h-[400px] md:h-screen relative">
                {/* Image */}
                <img
                    src={profileImage}
                    alt="Kanishk"
                    onLoad={handleImageLoad}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ objectPosition: 'center top' }}
                />

                {/* Gradient overlay to blend into text section */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent z-10" />
            </div>
           
        </section>
    );
};