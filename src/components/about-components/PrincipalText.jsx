import React, { useState, useEffect } from 'react';
import {FaWhatsapp, FaYoutube} from 'react-icons/fa';

const PrincipalText = () => {
    
    const [text2, setText2] = useState('');

    const fullText2 = `
    Soy Ingeniero Electromecánico, investigador de CONICET y actualmente curso mi Doctorado en Ciencia y Tecnología. Mi carrera me ha llevado por empresas como Mercado Libre y Datalytics, pero mi verdadera vocación está en las aulas.

Con más de 5 años de experiencia docente —desde clases de Física 1 hasta la cátedra de Automatización Avanzada—, mi objetivo es que dejes de memorizar fórmulas y empieces a entender la lógica detrás de los problemas. Mi paso por la industria y la investigación me permite darte ejemplos reales de cómo se aplica lo que estudiamos en el mundo del Machine Learning, la Simulación Numérica (OpenFOAM) y el Análisis de Datos.

En mis clases, combinamos el rigor académico con las herramientas digitales que hoy exige la profesión.
    `;

    useEffect(() => {
        let index           = 0;
        var texto_cambiante = '';
        const interval = setInterval(() => {
            if (index < fullText.length) {

                texto_cambiante += fullText[index];
                setText(texto_cambiante);                
                index++;
            } else {
                clearInterval(interval);
            }
            }
        , 20); // Velocidad de escritura (en milisegundos)

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        let index2           = 0;
        var texto_cambiante2 = '';
        const interval2 = setInterval(() => {
            if (index2 < fullText2.length) {

                texto_cambiante2 += fullText2[index2];
                setText2(texto_cambiante2);                
                index2++;
            } else {
                clearInterval(interval2);
            }
            }
        , 20); // Velocidad de escritura (en milisegundos)

        return () => clearInterval(interval2); // Limpia el intervalo al desmontar el componente
    }, [])
    
    return (
        <div id='about' className=' bg-dark text-gray-300 md:col-span-1 col-span-2 text-2xl rounded-lg flex flex-col items-center justify-center min-h-screen'>    
            <h1 className='py-20 text-5xl font-extralight font-sans text-justify'>Sobre <span className='text-accent1'>Mi</span></h1>
            <p className='text-sm font-sans text-justify'>{text2}</p>
            <div className='grid grid-cols-2 gap-4 w-full'>
                <a 
                    href="https://wa.me/+541135621000" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="overflow-hidden col-span-2 flex items-center justify-center mt-4 text-accent1 border-2 border-rounded-xl |  hover:text-principalGreen transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg bg-gradient-to-l from-dark hover:from-violet-500 to-violet-700 hover:to-accent2"
                    >
                    <FaWhatsapp className="text-6xl mx-5 min-w-8" /> <span className='hidden lg:block'>¿Empezamos?</span>
                </a>
                {/*
                <a 
                    href="https://www.youtube.com/watch?v=DpRC2Bo3T6c&ab_channel=LucianoZurdo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="overflow-hidden flex items-center justify-center mt-4 text-accent1 border-2 border-rounded-xl |  hover:text-red-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg bg-gradient-to-l from-dark hover:from-violet-900 to-violet-700 hover:to-dark"
                    >
                    <FaYoutube className="text-6xl mx-5" /> <span className='hidden lg:block'>Te cuento un poco</span>
                </a>
                */}
            </div>
        </div>
    );
};

export default PrincipalText;