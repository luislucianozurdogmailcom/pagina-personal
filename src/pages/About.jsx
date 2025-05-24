import React from 'react';
import AboutMe from '../components/about-components/AboutMe';
import PrincipalText from '../components/about-components/PrincipalText';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from '../assets/datalytics-lovelytics_light-1536x392.png';
import imagen2 from '../assets/mercadolibre.svg';
import imagen3 from '../assets/gdlc.jpg';
import mi_foto from '../assets/7.png';
import ImagePrincipal from '../components/about-components/ImagePrincipal';

const About = () => {
    const carouselItems = [
        <img src={imagen1} alt="Slide 1" className="object-contain" />,
        <img src={imagen2} alt="Slide 2" className="object-contain" />,
        <img src={imagen3} alt="Slide 3" className="object-contain" />,
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className='px-6 col-span-2 bg-dark grid grid-cols-2 gap-4 max-w-7xl min-h-screen mx-auto'>

            {/* Content */}
            <PrincipalText />
            <ImagePrincipal src={mi_foto} alt={'asd'} />
            {/* 
            <div className='lg:min-h-screen flex flex-col items-center justify-center col-span-2 lg:col-span-1'>

                
                <div className="w-3/4 h-auto m-20 bg-accent1 rounded-4xl p-10">
                    <h1 className='font-sans text-2xl text-center text-light my-4 px-4 py-6 bg-dark rounded-2xl shadow-2xl'>
                        <span className='text-accent1'>Empresas</span> en donde trabajé
                    </h1>
                    
                    <Slider {...sliderSettings} className='my-auto'>
                        {carouselItems.map((item, index) => (
                            <div key={index} className="">
                                {item}
                            </div>
                        ))}
                    </Slider>
                     
               
                </div>
                   
            </div>
            */}
        </div>
    );
};

export default About;