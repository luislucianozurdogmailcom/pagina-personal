import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="col-span-2 w-full bg-accent1 text-dark font-extralight py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl pb-2 border-dark border-b-2 w-full">Contacto</h3>
            <a href='mailto:luislucianozurdo@gmail.com' className="flex items-start justify-start hover:text-accent2 transition duration-300 text-xs">
              <FaEnvelope className="mr-2" /> <br></br>
              <p>luislucianozurdo@gmail.com</p>
            </a>
            <a href='mailto:llzurdo@campus.ungs.edu.ar' className="flex items-start justify-start hover:text-accent2 transition duration-300 text-xs">
              <FaEnvelope className="mr-2" /> <br></br>
              <p>llzurdo@campus.ungs.edu.ar</p>
            </a>
          </div>
          
          {/* Enlaces */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl pb-2 border-b-2 border-dark w-full">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-dark text-xs hover:text-accent2 transition duration-300">Home</a></li>
              <li><a href="/library" className="text-dark text-xs hover:text-accent2 transition duration-300">Library</a></li>
              <li><a href="/about" className="text-dark text-xs hover:text-accent2 transition duration-300">About Me</a></li>
              <li><a href="/contact" className="text-dark text-xs hover:text-accent2 transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Redes Sociales */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl pb-2 border-b-2 border-dark w-full">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/luislucianozurdogmailcom" target="_blank" rel="noopener noreferrer" 
                 className="text-2xl text-dark hover:text-accent2 transition duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/luis-luciano-zurdo/" target="_blank" rel="noopener noreferrer" 
                 className="text-2xl text-dark hover:text-accent2 transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t-2 border-dark text-center">
          <p className="text-dark text-xs">&copy; {currentYear} Luciano Zurdo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;