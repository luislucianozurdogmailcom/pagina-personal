import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Sumé FaInstagram

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="col-span-2 w-full bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 relative overflow-hidden z-10">
      
      {/* Brillo decorativo sutil en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-accent1/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Columna 1: Contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 flex items-center justify-center md:justify-start">
              <span className="w-8 h-1 bg-accent1 rounded-full mr-3"></span>
              Contacto
            </h3>
            <div className="space-y-4">
              <a href='mailto:luislucianozurdo@gmail.com' className="flex items-center justify-center md:justify-start text-gray-400 hover:text-accent1 transition duration-300 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent1/10 transition-colors mr-3">
                    <FaEnvelope className="text-lg" />
                </div>
                luislucianozurdo@gmail.com
              </a>
              <a href='mailto:llzurdo@campus.ungs.edu.ar' className="flex items-center justify-center md:justify-start text-gray-400 hover:text-accent1 transition duration-300 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent1/10 transition-colors mr-3">
                    <FaEnvelope className="text-lg" />
                </div>
                llzurdo@campus.ungs.edu.ar
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces */}
          <div className="space-y-6 flex flex-col items-center md:items-start md:pl-12">
            <h3 className="text-xl font-bold text-gray-100 flex items-center">
              <span className="w-8 h-1 bg-accent1 rounded-full mr-3"></span>
              Navegación
            </h3>
            <ul className="space-y-3 w-full">
              <li><a href="/" className="text-gray-400 text-sm hover:text-accent1 hover:pl-2 transition-all duration-300 flex items-center justify-center md:justify-start">Home</a></li>
              <li><a href="/library" className="text-gray-400 text-sm hover:text-accent1 hover:pl-2 transition-all duration-300 flex items-center justify-center md:justify-start">Recursos</a></li>
              <li><a href="/exams" className="text-gray-400 text-sm hover:text-accent1 hover:pl-2 transition-all duration-300 flex items-center justify-center md:justify-start">Exámenes</a></li>
              <li><a href="/about" className="text-gray-400 text-sm hover:text-accent1 hover:pl-2 transition-all duration-300 flex items-center justify-center md:justify-start">Sobre mí</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Redes Sociales */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-gray-100 flex items-center">
              <span className="w-8 h-1 bg-accent1 rounded-full mr-3"></span>
              Conectemos
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Seguime en mis redes para ver más proyectos, recursos y novedades.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/luislucianozurdo/" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/5 text-gray-300 rounded-xl hover:bg-accent1 hover:text-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://github.com/luislucianozurdogmailcom" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/5 text-gray-300 rounded-xl hover:bg-accent1 hover:text-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/luis-luciano-zurdo/" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/5 text-gray-300 rounded-xl hover:bg-accent1 hover:text-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Luciano Zurdo. Todos los derechos reservados.
          </p>
          <div className="text-gray-500 text-xs flex space-x-4">
             <span>Desarrollado con React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;