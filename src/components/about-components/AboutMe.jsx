import React from 'react';
import { useInView } from 'react-intersection-observer';
//import { FaPython, FaReact} from 'react-icons/fa'; // Example icons
import '../../styles/AboutMe.css'; // Import custom CSS for animations
import mercadoLibre from '../../assets/mercadolibre.svg';
import datalytics from '../../assets/datalytics-lovelytics_light-1536x392.png'

const AboutMe = () => {

    const { ref, inView } = useInView({
        //triggerOnce: true, // Solo activa la animación una vez
        threshold: 0.2,    // Porcentaje visible para activar (20%)
    });

    return (
        <div 
        id='about' 
        ref={ref}
        className={`bg-accent1 shadow-lg rounded-xl p-8 col-span-2 md:col-span-1 md:mx-10 mb-10 transition-transform duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
        }`}
        >
            <h1 className="text-4xl font-bold text-gray-500 mb-4">
                <span className="text-dark">S</span>obre Mi
            </h1>
            <p className="text-dark text-lg font-extralight font-sans leading-relaxed ">
            🚀 Ingeniero, investigador y apasionado por la enseñanza. Doctorando y becario CONICET, 
            con experiencia en empresas como Mercado Libre y organismos gubernamentales como el Ministerio de Educación (CABA).
            <br />
            <br /> 
            Hace 5 años desarrollo simulaciones numéricas, enseño programación y ciencia de datos. 
            Si querés aprender Física, Python, C++, MATLAB, SQL o Machine Learning… ¡estás en el lugar correcto!
            </p>
            <div className="flex space-x-4 mt-6">
                <a href='https://www.mercadolibre.com.ar/' className='w-1/4 h-auto p-4 rounded-full text-6xl text-accent1 animate-float bg-accent2'>
                    <img src={mercadoLibre} className="object-contain" />
                </a>
                <a href='https://www.datalytics.com/' className='w-1/4 flex justify-center h-auto p-4 rounded-full text-6xl text-accent1 animate-float bg-accent2'>
                    <img src={datalytics} className='object-contain'/>
                </a>
                {/*<FaReact className="w-1/4 h-auto p-2 rounded-full text-6xl text-accent1 animate-float bg-accent2" />*/}
                {/* Add more icons here */}
            </div>
        </div>
    );
};

export default AboutMe;