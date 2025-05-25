import React from "react";
import { useState } from "react";
import PdfDownloadButton from "../components/labrary-components/PdfDownloadButton";

const videos = [
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
];

const PDFs = [
    {
        id: 1,
        title: "Formulario de física - Nivel CBC",
        fileName: "Formulario de física para el nivel CBC.",
        fileUrl: "/Formularios/Fisica-CBC-Formulario.pdf",
    }
];

const Labrary = () => (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extralight font-sans mb-8 text-center mt-15 text-stone-100 bg-accent1 p-2 text-center ">Biblioteca Gráfica</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video) => (
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
            ))}
            {PDFs.map((pdf) => (
                <PdfDownloadButton 
                    key={pdf.id}
                    fileUrl={pdf.fileUrl}
                    fileName={pdf.fileName}
                >
                    {pdf.fileName}
                </PdfDownloadButton>
            ))}
        </div>

    </div>
);

export default Labrary;