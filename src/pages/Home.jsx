import React from "react";

const Home = () => {
    // Definimos las animaciones en línea para no depender de un archivo CSS externo por ahora.
    // Lo ideal sería mover esto a tu tailwind.config.js o index.css en el futuro.
    const animationStyles = `
        @keyframes float {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
            66% { transform: translateY(10px) translateX(-10px) rotate(-5deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-medium { animation: float 6s ease-in-out infinite reverse; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        
        /* Clase de utilidad para el fade in escalonado */
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
        <section className="min-h-screen flex items-center relative overflow-hidden bg-dark">
            {/* Inyectamos los estilos de animación */}
            <style>{animationStyles}</style>

            {/* --- FONDO ANIMADO --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Orbe naranja principal */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent1/20 rounded-full mix-blend-screen blur-3xl animate-float-slow filter opacity-70"></div>
                {/* Orbe secundaria más pequeña */}
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-300/10 rounded-full mix-blend-screen blur-3xl animate-float-medium filter opacity-50"></div>
                {/* Luz central sutil */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent1/5 via-transparent to-transparent opacity-40"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* --- COLUMNA IZQUIERDA: TEXTO Y CTA --- */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-8 text-center md:text-left">
                        <h1 
                            className="text-5xl md:text-7xl font-extrabold text-gray-100 tracking-tight leading-tight fade-in-up"
                            style={{ animationDelay: '0.1s' }}
                        >
                            Estudiar <br className="hidden md:block"/> nunca fue tan 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300 relative ml-2">
                                fácil.
                                {/* Subrayado decorativo */}
                                <svg className="absolute bottom-0 left-0 w-full h-3 text-accent1/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
                            </span>
                        </h1>
                        
                        <p 
                            className="text-lg md:text-xl text-gray-300 font-sans max-w-2xl mx-auto md:mx-0 leading-relaxed fade-in-up"
                            style={{ animationDelay: '0.3s' }}
                        >
                            Simplificamos tu aprendizaje universitario. Accedé a una biblioteca curada de formularios, guías de ejercicios, videos explicativos y simulacros de examen. Todo en un solo lugar, pensado para estudiantes como vos.
                        </p>
                        
                        <div 
                            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4 fade-in-up"
                            style={{ animationDelay: '0.5s' }}
                        >
                            {/* Botón Primario: Recursos */}
                            <a
                                href="/library"
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-dark transition-all duration-300 bg-accent1 rounded-full hover:bg-orange-300 hover:shadow-lg hover:shadow-accent1/40 hover:-translate-y-1"
                            >
                                <span className="mr-2">Explorar Recursos</span>
                                {/* Ícono de flecha animado */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            {/* Botón Secundario: Herramientas (ahora Exámenes es más importante, quizás linkear ahí) */}
                            <a
                                href="/exams"
                                className="inline-flex items-center justify-center px-8 py-4 font-bold text-accent1 transition-all duration-300 border-2 border-accent1/50 rounded-full hover:bg-accent1/10 hover:border-accent1 hover:-translate-y-1 backdrop-blur-sm"
                            >
                                <span className="mr-2">Ir a Exámenes</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Elemento Visual Abstracto --- */}
                    <div className="md:col-span-5 hidden md:flex justify-center items-center relative animate-float-slow">
                        {/* Esto es un "placeholder" visual. Idealmente aquí iría una ilustración SVG bonita.
                            Por ahora, creamos una composición abstracta con divs y blur. */}
                        <div className="relative w-80 h-80">
                             {/* Círculo central brillante */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent1 to-orange-200 rounded-full animate-pulse-glow blur-xl opacity-50"></div>
                            
                             {/* Tarjeta estilo "cristal" flotando encima */}
                            <div className="absolute inset-10 bg-dark/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
                                <div className="h-4 w-1/3 bg-accent1/50 rounded-full mb-4"></div>
                                <div className="space-y-2">
                                    <div className="h-3 w-full bg-gray-600/50 rounded-full"></div>
                                    <div className="h-3 w-5/6 bg-gray-600/50 rounded-full"></div>
                                    <div className="h-3 w-4/6 bg-gray-600/50 rounded-full"></div>
                                </div>
                                <div className="flex justify-end mt-4">
                                     <div className="h-8 w-8 rounded-full bg-accent1 flex items-center justify-center text-dark font-bold">A+</div>
                                </div>
                            </div>
                             {/* Elemento decorativo pequeño */}
                             <div className="absolute -top-5 -right-5 w-16 h-16 bg-orange-400/30 rounded-xl backdrop-blur-md border border-white/20 animate-float-medium z-0 transform rotate-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;