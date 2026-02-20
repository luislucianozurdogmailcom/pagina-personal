import React from "react";
import Graph from "../components/tools/Graph";
import Graph3D from "../components/tools/Graph3D"; // <-- Importamos el nuevo 3D
import Calculator from "../components/tools/Calculator";

const Tools = () => {
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

            <div className="absolute top-40 left-10 w-72 h-72 bg-accent1/10 rounded-full mix-blend-screen blur-[100px] animate-float-slow pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
                
                <div className="text-center mb-16 fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-accent1 text-sm font-bold uppercase tracking-widest mb-2">Workspace</h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                        Tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300">Herramientas</span>
                    </h1>
                    <p className="text-gray-400 font-sans mt-4 max-w-2xl mx-auto">
                        Resolvé cálculos complejos y visualizá funciones matemáticas en 2D y 3D directamente desde el navegador. Sin instalar nada.
                    </p>
                </div>

                {/* Grid principal */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch fade-in-up" style={{ animationDelay: '0.3s' }}>
                    
                    {/* Fila 1: Calculadora y Gráfico 2D */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col h-full hover:border-accent1/30 transition-colors">
                        <Calculator />
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col h-full hover:border-accent1/30 transition-colors overflow-hidden">
                        <Graph />
                    </div>

                    {/* Fila 2: Gráfico 3D (Ocupa ambas columnas en pantallas grandes) */}
                    <div className="xl:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col h-full hover:border-accent1/30 transition-colors overflow-hidden mt-4">
                        <Graph3D />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tools;