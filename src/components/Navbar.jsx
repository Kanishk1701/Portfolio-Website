import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {" "}
                        Kanishk's <span className="text-blue-500">Portfolio</span>{" "}
                    </a>
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={toggleMenu}
                    >
                        &#9776;
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            {" "}Home{" "}
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            {" "}About{" "}
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            {" "}Projects{" "}
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            {" "}Contact{" "}
                        </a>
                    </div>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 border-b border-white/10 py-4">
                            <div className="flex flex-col space-y-4 px-4">
                                <a 
                                    href="#home" 
                                    className="text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a 
                                    href="#about" 
                                    className="text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </a>
                                <a 
                                    href="#projects" 
                                    className="text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </a>
                                <a 
                                    href="#contact" 
                                    className="text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};