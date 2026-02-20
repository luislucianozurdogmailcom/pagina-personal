import React, { useState } from "react";
import LiveExam from "../components/exam-components/LiveExam"; // Ajustá la ruta según donde guardes el componente
import { parcialFisica03 } from "../data/parcialesData"; // Ajustá la ruta donde guardes el JSON de datos
import { allExams } from "../data/parcialesData";

const Exams = () => {
    // Por ahora inicializa directamente con el parcial que armamos, 
    // pero a futuro podés hacer que esto cambie según lo que elija el usuario.
    // Inicializamos en null para que arranque mostrando el menú
    const [selectedExam, setSelectedExam] = useState(null);

   return (
        <div className="container mx-auto px-4 py-8 mt-20">
            {!selectedExam ? (
                // --- VISTA 1: MENÚ DE EXÁMENES ---
                <>
                    <h1 className="text-4xl font-extralight font-sans mb-8 text-center text-stone-900 bg-accent1 p-2">
                        Simulacros de Exámenes
                    </h1>
                    <div className="flex justify-center mb-10">
                        <p className="text-gray-300 text-center max-w-2xl font-sans text-sm md:text-base">
                            Poné a prueba tus conocimientos con estos exámenes interactivos. 
                            Resolvé los ejercicios en papel, marcá tus respuestas y evaluá tu nivel antes de rendir.
                        </p>
                    </div>

                    {/* Grilla de tarjetas al estilo Labrary */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {allExams.map((exam) => (
                            <div 
                                key={exam.id} 
                                onClick={() => !exam.disabled && setSelectedExam(exam)}
                                className={`group border-2 border-stone-200 rounded-xl p-6 bg-accent1 shadow-sm flex flex-col justify-between transition-all duration-300 
                                    ${exam.disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-orange-400 cursor-pointer'}
                                `}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-1 rounded">
                                            Física General (CBC)
                                        </span>
                                        {!exam.disabled && (
                                            <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-semibold text-stone-900 mb-2">{exam.title}</h2>
                                    <p className="text-stone-700 text-sm font-sans">{exam.description}</p>
                                </div>
                                <div className="mt-6 text-center">
                                    <button 
                                        disabled={exam.disabled}
                                        className="bg-dark text-white px-4 py-2 rounded-lg text-sm hover:bg-stone-800 transition-colors w-full disabled:opacity-50"
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
                <div className="w-full animate-fade-in">
                    {/* Botón para volver al menú */}
                    <button 
                        onClick={() => setSelectedExam(null)}
                        className="mb-6 flex items-center text-gray-300 hover:text-orange-400 transition-colors font-sans"
                    >
                        <span className="mr-2 text-xl">←</span> Volver al listado de exámenes
                    </button>
                    
                    <LiveExam examData={selectedExam} />
                </div>
            )}
        </div>
    );
};

export default Exams;