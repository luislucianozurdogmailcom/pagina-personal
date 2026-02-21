import React from "react";
import PdfDownloadButton from "../components/labrary-components/PdfDownloadButton";
import { FiFileText, FiBookOpen, FiExternalLink } from "react-icons/fi";

const PDFs_formularios = [
    {
        id: 1,
        title: "Física - Nivel CBC - Cinemática",
        fileName: "Física - Nivel CBC - Cinemática",
        fileUrl: "/Formularios/Formulario_Cinemática.pdf",
    },
    {
        id: 2,
        title: "Física - Estática",
        fileName: "Física - Estática",
        fileUrl: "/Formularios/Formulario_Estatica.pdf",
    },
    {
        id: 3,
        title: "Física - Dinámica",
        fileName: "Física - Dinámica",
        fileUrl: "/Formularios/Formulario_dinámica.pdf",
    },
    {
        id: 4,
        title: "Física - Trabajo y Energía",
        fileName: "Física - Trabajo y Energía",
        fileUrl: "/Formularios/Formulario_dinámica.pdf",
    },
    {
        id: 5,
        title: "Matemática - Vectores",
        fileName: "Matemática - Vectores",
        fileUrl: "/Formularios/Formulario_Vectores.pdf",
    },
    {
        id: 6,
        title: "Matemática - Identidades Trigonométricas",
        fileName: "Matemática - Identidades Trigonométricas",
        fileUrl: "/Formularios/Formulario_IdentidadesTrigonometricas.pdf",
    },
    {
        id: 7,
        title: "Matemática - Derivadas",
        fileName: "Matemática - Derivadas",
        fileUrl: "/Formularios/Formulario_Derivadas.pdf",
    }
];

const PDFs_parciales = [
    {
        id: 1,
        title: "1er Parcial de física - Nivel CBC",
        fileName: "Parcial n°1 de física nivel CBC.",
        fileUrl: "/Parciales/parcial-1-fisica-cbc.pdf",
    },
    {
        id: 2,
        title: "1er Parcial de física - Nivel CBC",
        fileName: "Parcial n°1 de física nivel CBC",
        fileUrl: "/Parciales/parcial_fisica_cbc.pdf",
    },
    {
        id: 3,
        title: "1er Parcial de física - Movimiento Circular",
        fileName: "1er Parcial de física - Movimiento Circular - Nivel CBC",
        fileUrl: "/Parciales/2026-02-11-Resolucion_ejercicio_parcial_movimiento_circular_variado.pdf",
    },
    {
        id: 4,
        title: "1er Parcial de física - Movimiento Relativo",
        fileName: "1er Parcial de física - Movimiento Relativo - Nivel CBC",
        fileUrl: "/Parciales/2026-02-11-Resolucion_ejercicio_parcial_movimiento_circular_variado.pdf",
    }
];

const links_recursos = [
    {
        id: 1,
        title: "Cálculo de caída astronauta estratósfera",
        description: "Código en python para correr en google colab",
        url: "https://colab.research.google.com/drive/1NLRqPJ9vwCq5LurZHQOixCSPt-YxagRb?usp=sharing", 
        tag: "Google Colab",
    }
];

const Labrary = () => {
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
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent1/10 rounded-full mix-blend-screen blur-[100px] animate-float-slow pointer-events-none"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
                
                {/* Encabezado Principal */}
                <div className="text-center mb-16 fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-accent1 text-sm font-bold uppercase tracking-widest mb-2">Material de Estudio</h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                        Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-orange-300">Biblioteca</span>
                    </h1>
                    <p className="text-gray-400 font-sans mt-4 max-w-2xl mx-auto">
                        Descargá formularios, resoluciones de parciales y accedé a recursos online gratuitos para potenciar tu aprendizaje.
                    </p>
                </div>

                {/* SECCIÓN 1: Formularios */}
                <div className="mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-1 bg-accent1 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-gray-100">Formularios y Resúmenes</h3>
                    </div>
                    
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {PDFs_formularios.map((pdf) => (
                            <div key={pdf.id} className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent1/50 transition-all duration-300 shadow-lg flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 mb-4 bg-accent1/10 rounded-xl flex items-center justify-center text-accent1 group-hover:bg-accent1 group-hover:text-dark transition-colors duration-300 shadow-[0_0_15px_rgba(251,146,60,0.1)] group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                                        <FiBookOpen className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-200 mb-2 leading-tight">{pdf.title}</h4>
                                    <p className="text-xs text-gray-500 font-mono mb-6 truncate" title={pdf.fileName}>{pdf.fileName}</p>
                                </div>
                                <div className="mt-auto">
                                    {/* El componente PdfDownloadButton maneja su propio renderizado, lo envolvemos para mantener la estructura */}
                                    <PdfDownloadButton fileUrl={pdf.fileUrl} fileName={pdf.fileName}>
                                        <span className="font-semibold text-sm">Descargar PDF</span>
                                    </PdfDownloadButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN 2: Parciales Resueltos */}
                <div className="mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-1 bg-accent1 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-gray-100">Parciales Resueltos</h3>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {PDFs_parciales.map((pdf) => (
                            <div key={pdf.id} className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent1/50 transition-all duration-300 shadow-lg flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 mb-4 bg-accent1/10 rounded-xl flex items-center justify-center text-accent1 group-hover:bg-accent1 group-hover:text-dark transition-colors duration-300 shadow-[0_0_15px_rgba(251,146,60,0.1)] group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                                        <FiFileText className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-200 mb-2 leading-tight">{pdf.title}</h4>
                                    <p className="text-xs text-gray-500 font-mono mb-6 truncate" title={pdf.fileName}>{pdf.fileName}</p>
                                </div>
                                <div className="mt-auto">
                                    <PdfDownloadButton fileUrl={pdf.fileUrl} fileName={pdf.fileName}>
                                        <span className="font-semibold text-sm">Descargar PDF</span>
                                    </PdfDownloadButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN 3: Recursos Online */}
                <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-1 bg-accent1 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-gray-100">Recursos Online</h3>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {links_recursos.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent1/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-accent1/10 rounded-xl flex items-center justify-center text-accent1 group-hover:bg-accent1 group-hover:text-dark transition-colors duration-300 shadow-[0_0_15px_rgba(251,146,60,0.1)] group-hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                                            <FiExternalLink className="text-2xl" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-gray-300 px-3 py-1.5 rounded-full">
                                            {link.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-accent1 transition-colors">{link.title}</h4>
                                    <p className="text-gray-400 text-sm font-sans mb-4">{link.description}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-accent1 font-medium text-sm">
                                    <span>Abrir recurso</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Labrary;