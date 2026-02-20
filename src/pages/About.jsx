import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mi_foto from '../assets/7.png';

const About = () => {
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

    // Array de experiencias laborales (solo texto)
    const experiences = [
        {
            company: "Datalytics / Lovelytics",
            role: "Ingeniería de Datos | Analytics",
            description: "Desarrollo de soluciones de datos en Databricks, optimización de procesos y automatización de pipelines para facilitar la toma de decisiones."
        },
        {
            company: "Mercado Libre",
            role: "Analytics",
            description: "Participación en el desarrollo de métricas, creando KPIs escalables y orientados a la detección de fraude."
        },
        {
            company: "Gobierno De La Ciudad",
            role: "Ingeniero de Datos | Backend",
            description: "Análisis de requerimientos técnicos, automatización de tareas y despliegue APIs para consumo interno/externo."
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
            <div style={{ bottom: "-40px" }}>
                <ul className="m-0 p-0 flex justify-center space-x-2"> {dots} </ul>
            </div>
        ),
    };

    const skills = ["Python", "React", "C++", "OpenFOAM", "Odoo", "KiCad", "Física", "Automatización"];

    return (
        <section className="relative w-full min-h-screen bg-dark py-20 overflow-hidden flex flex-col justify-center">
            <style>{animationStyles}</style>

            {/* Fondos Decorativos */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent1/10 rounded-full mix-blend-screen blur-[100px] animate-float-slow pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
                    
                    {/* COLUMNA TEXTO Y BIO (En celular va primero: order-1. En PC va a la derecha: lg:order-2) */}
                    <div className="flex flex-col space-y-6 fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.1s' }}>
                        <div>
                            <h2 className="text-accent1 text-sm font-bold uppercase tracking-widest mb-2">Conoceme un poco más</h2>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300">Luciano Zurdo</span>
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 font-light">Ingeniero Electromecánico & Desarrollador</p>
                        </div>

                        <div className="space-y-4 text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                            <p>
                                Me apasiona resolver problemas complejos y compartir lo que aprendo. Actualmente estoy cursando mi <strong>Doctorado en Ciencia y Tecnología</strong>, combinando la investigación con mi vocación por la docencia.
                            </p>
                            <p>
                                Como ex ayudante de cátedra en Física 1 y actual de Automatización Avanzada, conozco de primera mano los desafíos que enfrentan los estudiantes al preparar parciales y entender conceptos duros. Por eso decidí armar este espacio: para darte una mano con recursos, clases particulares y herramientas interactivas.
                            </p>
                            <p>
                                En el mundo del código y la ingeniería, me muevo entre el desarrollo frontend/backend, las simulaciones fluidodinámicas con OpenFOAM y el diseño de circuitos, buscando siempre automatizar y simplificar procesos.
                            </p>
                        </div>

                        {/* Etiquetas de Skills */}
                        <div className="pt-4">
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">Tecnologías y Conocimientos</p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-sans hover:bg-accent1 hover:text-dark hover:border-accent1 transition-colors cursor-default shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA IMAGEN (En celular va abajo: order-2. En PC va a la izquierda: lg:order-1) */}
                    <div className="relative flex justify-center lg:justify-end fade-in-up order-2 lg:order-1 mt-10 lg:mt-0" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                            {/* Brillo detrás de la foto */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent1 to-orange-300 rounded-[2rem] md:rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-60 blur-lg"></div>
                            
                            {/* Contenedor de la foto */}
                            <div className="absolute inset-0 bg-stone-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl z-10">
                                <img 
                                    src={mi_foto} 
                                    alt="Luciano Zurdo" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Insignia Flotante */}
                            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-dark/80 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20 animate-float-slow max-w-[200px] md:max-w-none">
                                <p className="text-accent1 font-bold text-xs md:text-sm uppercase tracking-wider">Ayudante Automatización Avanzada</p>
                                <p className="text-gray-300 text-[10px] md:text-xs mt-1">UNGS</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SECCIÓN INFERIOR: Carrusel de Empresas (Solo texto) */}
                <div className="mt-24 md:mt-32 mb-10 max-w-4xl mx-auto fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
                        {/* Brillo interno de la tarjeta */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent1/10 rounded-full mix-blend-screen blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-200 mb-8 md:mb-12">
                            Empresas e instituciones donde <span className="text-accent1">trabajé</span>
                        </h3>
                        
                        <div className="px-2 md:px-8">
                            <Slider {...sliderSettings}>
                                {experiences.map((exp, index) => (
                                    <div key={index} className="outline-none">
                                        <div className="flex flex-col items-center justify-center text-center space-y-3 cursor-grab active:cursor-grabbing">
                                            <h4 className="text-2xl md:text-3xl font-bold text-gray-100">{exp.company}</h4>
                                            <span className="inline-block bg-accent1/10 text-accent1 px-3 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase border border-accent1/20">
                                                {exp.role}
                                            </span>
                                            <p className="text-gray-400 font-sans max-w-lg mx-auto text-sm md:text-base mt-4">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;