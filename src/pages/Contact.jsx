import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi"; // Sumé FiInstagram

const contactMethods = [
    {
        icon: <FiPhone className="text-2xl" />,
        title: "WhatsApp / Teléfono",
        value: "+54 9 11 3562-1000",
        link: "https://wa.me/5491135621000",
    },
    {
        icon: <FiInstagram className="text-2xl" />,
        title: "Instagram",
        value: "@luislucianozurdo",
        link: "https://www.instagram.com/luislucianozurdo/",
    },
    {
        icon: <FiMail className="text-2xl" />,
        title: "Email Personal",
        value: "luislucianozurdo@gmail.com",
        link: "mailto:luislucianozurdo@gmail.com",
    },
    {
        icon: <FiMail className="text-2xl" />,
        title: "Email Institucional",
        value: "llzurdo@campus.ungs.edu.ar",
        link: "mailto:llzurdo@campus.ungs.edu.ar",
    },
    {
        icon: <FiLinkedin className="text-2xl" />,
        title: "LinkedIn",
        value: "luis-luciano-zurdo",
        link: "https://www.linkedin.com/in/luis-luciano-zurdo/",
    },
];

const Contact = () => {
    const animationStyles = `
        @keyframes float {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-15px) translateX(8px) rotate(2deg); }
            66% { transform: translateY(10px) translateX(-8px) rotate(-2deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
    `;

    return (
        <section className="relative w-full min-h-screen bg-dark py-20 overflow-hidden flex flex-col justify-center">
            <style>{animationStyles}</style>

            {/* Fondos Decorativos */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent1/10 rounded-full mix-blend-screen blur-[100px] animate-float-slow pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 md:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Texto y Llamado a la acción */}
                    <div className="flex flex-col space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div>
                            <h2 className="text-accent1 text-sm font-bold uppercase tracking-widest mb-2">Conectemos</h2>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                                ¿En qué te puedo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300">ayudar?</span>
                            </h1>
                        </div>
                        
                        <div className="text-gray-400 font-sans text-lg leading-relaxed space-y-4">
                            <p>
                                Ya sea que necesites preparar los parciales de <strong>Física</strong>, <strong>Matemática</strong> o <strong>Programación</strong>, estés atascado con un proyecto de <strong>automatización</strong>, o busques colaborar en desarrollo y datos, estoy a disposición.
                            </p>
                            <p>
                                Elegí el canal que te resulte más cómodo. Suelo responder más rápido a través de WhatsApp o Instagram para coordinar clases o resolver dudas expréss.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Grilla de Tarjetas de Contacto */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent1/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col items-start"
                            >
                                {/* Ícono con glow naranja al hacer hover */}
                                <div className="w-12 h-12 mb-4 bg-accent1/10 rounded-xl flex items-center justify-center text-accent1 group-hover:bg-accent1 group-hover:text-dark transition-colors duration-300 shadow-[0_0_15px_rgba(251,146,60,0.1)] group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                                    {method.icon}
                                </div>
                                
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">{method.title}</h3>
                                    <p className="text-base text-gray-100 font-mono text-sm break-all group-hover:text-accent1 transition-colors">
                                        {method.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;