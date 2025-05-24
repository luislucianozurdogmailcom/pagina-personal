import React from 'react';
import { useInView } from 'react-intersection-observer';

const Services = ({ title, sections }) => {

    const { ref, inView } = useInView({
        //triggerOnce: true, // Solo activa la animación una vez
        threshold: 0.2,    // Porcentaje visible para activar (20%)
    });

    return (
        <div 
        id='services' 
        ref={ref}
        className={`bg-dark p-2 col-span-2 md:col-span-1 md:mx-1 mb-10 transition-transform duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
        }`}
        >
            <h1 className="text-4xl font-extralight font-sans text-accent1 h-20 mb-4 text-center">
                {title}
            </h1>
            
            {sections.map((section, index) => (
                <div key={index} className='index my-5 rounded-2xl px-5 bg-gray-800 border-accent1 border-1 overflow-hidden'> 
                    
                    <p className="text-dark text-left my-10 px-6 py-1 text-lg font-sans font-light leading-relaxed bg-accent1 rounded-l-3xl translate-x-10">
                        {section.title}
                    </p>
                    <div className='w-full lg:flex lg:flex-row grid grid-cols-1 gap-5 justify-around my-10'>
                        {section.items.map((item, idx) => (
                            <a href={item.link} 
                               target='blank' 
                               key={idx} 
                               className={`shadow-accent1 text-lg flex flex-col items-center justify-center text-center w-full h-30 rounded-2xl 
                               p-2 hover:shadow-none transition-shadow duration-200 ${item.isActive ? 'shadow-md text-accent1' : 'shadow-none text-gray-600'}`}>
                                {React.createElement(item.icon)}
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;