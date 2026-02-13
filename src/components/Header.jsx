import React, {useState} from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };
    
    return (
        <header className="fixed top-0 left-0 w-full  bg-opacity-40 backdrop-blur-lg shadow-md z-50 hover:shadow-accent1 transition-shadow duration-300 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-accent1 hover:text-light transition-all duration-500 font-normal flex">
                        <span className=" text-3xl relative top-2 left-1">L</span>
                        <span className=" text-sm rotate-180 relative bottom-2 ">Z</span>
                        <span className=" text-3xl rotate-180 relative bottom-2 right-1">L</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/home" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                            Home
                        </a>
                        <a href="/about" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                            Sobre mi
                        </a>
                        <a href="/library" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                            Recursos
                        </a>
                        <a href="/tools" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                            Herramientas
                        </a>
                        <a href="/contact" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                            Contacto
                        </a>
                    </nav>
                    <a href="/contact" className="text-dark hover:text-gray-300 border-2 hover:border-accent1 rounded-2xl p-2 font-sans bg-accent1 hover:bg-dark transition duration-400">
                        Contacto
                    </a>
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => toggleMenu()}
                            className="text-gray-300 hover:text-accent1 transition duration-400 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                    <div className={"md:hidden transition duration-400  bg-opacity-70 backdrop-blur-lg shadow-md"}>
                        <nav className={isMenuOpen ? "flex flex-col justify-center items-center space-y-4 p-4" : "hidden"}>
                            <a href="/home" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                                Home
                            </a>
                            <a href="/about" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                                Sobre mi
                            </a>
                            <a href="/library" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                                Recursos
                            </a>
                            <a href="/tools" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                                Herramientas
                            </a>
                            <a href="/contact" className="text-gray-300 hover:text-accent1 text-xs font-sans">
                                Contacto
                            </a>
                        </nav>
                    </div>
            </div>
        </header>
    );
};

export default Header;