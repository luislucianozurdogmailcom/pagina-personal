import React, { useState } from "react";
import LiveExam from "../components/exam-components/LiveExam";
import { allExams } from "../data/parcialesData";

const Exams = () => {
    const [selectedExam, setSelectedExam] = useState(null);

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
        <section className="relative w-full min-h-screen bg-dark py-20 overflow-hidden">
            <style>{animationStyles}</style>

            {/* Fondos Decorativos */}
            <div className="absolute top-40 left-10 w-72 h-72 bg-accent1/10 rounded-full mix-blend-screen blur-[100px] animate-float-slow pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
                {!selectedExam ? (
                    // --- VISTA 1: MENÚ DE EXÁMENES ---
                    <>
                        <div className="text-center mb-16 fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <h2 className="text-accent1 text-sm font-bold uppercase tracking-widest mb-2">Evaluación Continua</h2>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                                Simulacros de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300">Exámenes</span>
                            </h1>
                            <p className="text-gray-400 font-sans mt-4 max-w-2xl mx-auto">
                                Poné a prueba tus conocimientos con estos exámenes interactivos. Resolvé los ejercicios en papel, marcá tus respuestas y evaluá tu nivel antes de rendir.
                            </p>
                        </div>

                        {/* Grilla de tarjetas */}
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
                            {allExams.map((exam) => (
                                <div 
                                    key={exam.id} 
                                    onClick={() => !exam.disabled && setSelectedExam(exam)}
                                    className={`group bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl
                                        ${exam.disabled ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white/10 hover:border-accent1/50 hover:-translate-y-1 cursor-pointer'}
                                    `}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="bg-white/10 border border-white/20 text-gray-300 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                Física General (CBC)
                                            </span>
                                            {!exam.disabled && (
                                                <span className="text-accent1 group-hover:translate-x-1 transition-transform text-lg">→</span>
                                            )}
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 group-hover:text-accent1 transition-colors leading-tight">
                                            {exam.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm font-sans mb-8 leading-relaxed">
                                            {exam.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <button 
                                            disabled={exam.disabled}
                                            className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 
                                                ${exam.disabled 
                                                    ? 'bg-white/5 text-gray-500 border border-white/5' 
                                                    : 'bg-accent1 text-dark hover:bg-orange-400 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)]'}
                                            `}
                                        >
                                            {exam.disabled ? 'Próximamente' : 'Comenzar Simulacro'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    // --- VISTA 2: EXAMEN ACTIVO ---
                    <div className="w-full animate-fade-in fade-in-up">
                        {/* Botón para volver al menú */}
                        <button 
                            onClick={() => setSelectedExam(null)}
                            className="mb-8 flex items-center text-gray-400 hover:text-accent1 transition-colors font-sans group w-fit"
                        >
                            <span className="mr-2 text-xl group-hover:-translate-x-1 transition-transform">←</span> 
                            Volver al listado de exámenes
                        </button>
                        
                        <LiveExam examData={selectedExam} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Exams;