import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Estilo común para los links de navegación con animación de subrayado
    const navLinkClass = "relative text-gray-300 hover:text-accent1 text-sm font-sans transition duration-300 group";
    const underlineClass = "absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent1 transition-all duration-300 group-hover:w-full";

    return (
        <header className="fixed top-0 left-0 w-full bg-dark/70 backdrop-blur-md shadow-lg border-b border-white/10 z-50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20"> {/* Un poco más alto para respirar */}
                    
                    {/* LOGO */}
                    <a href="/" className="text-xl font-bold text-accent1 hover:text-orange-300 transition-all duration-500 flex items-center group cursor-pointer">
                        <span className="text-5xl relative top-2 left-1 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform">L</span>
                        <span className="text-md rotate-180 relative">Z</span>
                        <span className="text-5xl rotate-180 relative bottom-2 right-1 group-hover:-translate-x-2 group-hover:translate-y-1 transition-transform">L</span>
                    </a>

                    {/* NAV DESKTOP */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/home" className={navLinkClass}>
                            Home
                            <span className={underlineClass}></span>
                        </a>
                        <a href="/about" className={navLinkClass}>
                            Sobre mi
                            <span className={underlineClass}></span>
                        </a>
                        <a href="/library" className={navLinkClass}>
                            Recursos
                            <span className={underlineClass}></span>
                        </a>
                        <a href="/tools" className={navLinkClass}>
                            Herramientas
                            <span className={underlineClass}></span>
                        </a>
                        <a href="/exams" className={navLinkClass}>
                            Exámenes
                            <span className={underlineClass}></span>
                        </a>
                    </nav>

                    {/* BOTÓN CONTACTO DESKTOP */}
                    <div className="hidden md:block">
                        <a href="/contact" className="px-5 py-2.5 text-sm font-bold text-dark bg-accent1 rounded-full hover:bg-orange-300 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                            Contacto
                        </a>
                    </div>

                    {/* MENÚ HAMBURGUESA MOBILE */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-accent1 transition duration-300 focus:outline-none p-2"
                        >
                            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* DROPDOWN MOBILE */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
                >
                    <nav className="flex flex-col space-y-4 pt-4 border-t border-white/10 items-center">
                        <a href="/home" className="text-gray-300 hover:text-accent1 text-base font-sans transition-colors">Home</a>
                        <a href="/about" className="text-gray-300 hover:text-accent1 text-base font-sans transition-colors">Sobre mi</a>
                        <a href="/library" className="text-gray-300 hover:text-accent1 text-base font-sans transition-colors">Recursos</a>
                        <a href="/tools" className="text-gray-300 hover:text-accent1 text-base font-sans transition-colors">Herramientas</a>
                        <a href="/exams" className="text-gray-300 hover:text-accent1 text-base font-sans transition-colors">Exámenes</a>
                        <a href="/contact" className="w-full text-center mt-4 px-5 py-3 font-bold text-dark bg-accent1 rounded-full hover:bg-orange-300 transition-colors">
                            Contacto
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;