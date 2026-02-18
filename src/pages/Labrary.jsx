import React from "react";
import { useState } from "react";
import PdfDownloadButton from "../components/labrary-components/PdfDownloadButton";

/*const videos = [
    {
        id: 1,
        title: "Segunda Ley de Newton - Fuerzas y Movimiento",
        description: "Aprende sobre la segunda ley de Newton y su aplicación en la física.",
        thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
        tag: "Física",
    },
    {
        id: 2,
        title: "Como descomponer fuerzas",
        description: "Aprende a descomponer fuerzas en sus coordenadas 'x' e 'y'",
        thumbnail: "https://img.youtube.com/vi/UBOj6rqRUME/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
        tag: "Física",
    },
    {
        id: 3,
        title: "Ecuaciones Horarias (MRU)",
        description: "Aprende la teoria detras de las ecuaciones horarias del movimiento rectilineo uniforme.",
        thumbnail: "https://img.youtube.com/vi/f687hBjwFcM/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=f687hBjwFcM",
        tag: "Física",
    },
    {
        id: 4,
        title: "Ecuaciones Horarias (MRUV)",
        description: "Aprende la teoria detras de las ecuaciones horarias del movimiento rectilineo uniformemente variado.",
        thumbnail: "https://img.youtube.com/vi/f687hBjwFcM/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=f687hBjwFcM",
        tag: "Física",
    }
    // Agrega más videos aquí si lo deseas
];*/

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
        title: "1er Parcial de física - Movimiento Circular - Nivel CBC",
        fileName: "1er Parcial de física - Movimiento Circular - Nivel CBC",
        fileUrl: "/Parciales/2026-02-11-Resolucion_ejercicio_parcial_movimiento_circular_variado.pdf",
    },
    {
        id: 4,
        title: "1er Parcial de física - Movimiento Circular - Nivel CBC",
        fileName: "1er Parcial de física - Movimiento Relativo - Nivel CBC",
        fileUrl: "/Parciales/2026-02-11-Resolucion_ejercicio_parcial_movimiento_circular_variado.pdf",
    }
]


const links_recursos = [
{
        id: 1,
        title: "Cálculo de caida astronauta estratósfera",
        description: "Código en python para correr en google colab",
        url: "https://colab.research.google.com/drive/1NLRqPJ9vwCq5LurZHQOixCSPt-YxagRb?usp=sharing", 
        tag: "Google Colab",
    }
]

const Labrary = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extralight font-sans mb-8 text-center mt-15 text-stone-900 bg-accent1 p-2 text-center ">Formularios</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/*videos.map((video) => (
                <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent1 rounded-lg shadow hover:shadow-xl shadow-orange-400 transition-shadow duration-200 overflow-hidden flex flex-col"
                >
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="text-stone-100 rounded-2xl bg-stone-700 mx-auto p-2 mt-2">{video.tag}</div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h2 className="text-xl text-center font-semibold font-sans text-stone-800 mb-2">{video.title}</h2>
                        <p className="text-stone-600 text-sm font-sans flex-1 text-center">{video.description}</p>
                    </div>
                </a>
            ))*/}
            {PDFs_formularios.map((pdf) => (
                <PdfDownloadButton 
                    key={pdf.id}
                    fileUrl={pdf.fileUrl}
                    fileName={pdf.fileName}
                >
                    {pdf.fileName}
                </PdfDownloadButton>
            ))}
        </div>

        <h1 className="text-4xl font-extralight font-sans mb-8 text-center mt-15 text-stone-900 bg-accent1 p-2 text-center ">Parciales Resueltos</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {PDFs_parciales.map((pdf) => (
                <PdfDownloadButton 
                    key={pdf.id}
                    fileUrl={pdf.fileUrl}
                    fileName={pdf.fileName}
                >
                    {pdf.fileName}
                </PdfDownloadButton>
            ))}
        </div>

        {/* SECCIÓN NUEVA: RECURSOS Y LINKS */}
        <h1 className="text-4xl font-extralight font-sans mb-8 text-center mt-20 text-stone-900 bg-accent1 p-2">Recursos Online</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {links_recursos.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-stone-200 rounded-xl p-6 hover:border-orange-400 transition-all duration-300 bg-accent1 shadow-sm flex flex-col justify-between"
                >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-1 rounded">
                                {link.tag}
                            </span>
                            <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                        <h2 className="text-xl font-semibold text-stone-900 mb-2">{link.title}</h2>
                        <p className="text-stone-700 text-sm font-sans">{link.description}</p>
                    </div>
                    <div className="mt-4 text-orange-100 font-medium text-sm">Abrir recurso</div>
                </a>
            ))}
        </div>
    </div>
);

export default Labrary;