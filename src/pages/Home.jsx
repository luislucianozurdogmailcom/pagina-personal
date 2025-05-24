import React from 'react';
import PrincipalText from '../components/home-components/PrincipalText';
import ImagePrincipal from '../components/home-components/ImagePrincipal';
import image from '../assets/7.png'
import bulbo from '../assets/light-bulb-4297600_1920.jpg'

//import image from '../assets/3.jpg'
import Services from '../components/home-components/Services';
import { useInView } from 'react-intersection-observer';
import {FaSatellite, 
        FaPython, 
        FaDatabase, 
        FaReact, 
        FaRobot, 
        FaCalculator, 
        FaCuttlefish, 
        FaSquareRootAlt,
        FaPager,
        FaCalendar,
        FaImages,
        FaToolbox,
        FaWind,
        FaChartBar,
        FaUserCheck} from 'react-icons/fa';


const Home = () => {

  const { ref, inView } = useInView({
    //triggerOnce: true, // Solo activa la animación una vez
    threshold: 0.2,    // Porcentaje visible para activar (20%)
  });
  
  const enseñanza = [
    {
      title: 'Lenguajes de programación',
      items: [
        { name: 'C++', icon: FaCuttlefish, link: 'https://wa.me/+541135621000?text=Hola quiero aprender Cpp! Por favor dejame información sobre horarios y modalidades', isActive: true},
        { name: 'Python', icon: FaPython, link: 'https://wa.me/+541135621000?text=Hola quiero aprender Python! Por favor dejame información sobre horarios y modalidades', isActive: true },
        { name: 'MATLAB', icon: FaCalculator, link: 'https://wa.me/+541135621000?text=Hola quiero aprender MATLAB! Por favor dejame información sobre horarios y modalidades', isActive: true },
      ],
    },
    {
      title: 'Data',
      items: [
        { name: 'IA', icon: FaRobot, link: 'https://wa.me/+541135621000?text=Hola quiero aprender IA! Por favor dejame información sobre horarios y modalidades', isActive: true},
        { name: 'Big Data', icon: FaSatellite, link: 'https://wa.me/+541135621000?text=Hola quiero aprender Big Data! Por favor dejame información sobre horarios y modalidades', isActive: true },
        { name: 'SQL', icon: FaDatabase, link: 'https://wa.me/+541135621000?text=Hola quiero aprender SQL! Por favor dejame información sobre horarios y modalidades', isActive: true },
      ],
    },
    {
      title: 'Materias Universitarias',
      items: [
        { name: 'Física', icon: FaReact, link: 'https://wa.me/+541135621000?text=Hola quiero aprender Física! Por favor dejame información sobre horarios y modalidades', isActive: true},
        { name: 'Matemáticas', icon: FaSquareRootAlt, link: 'https://wa.me/+541135621000?text=Hola quiero aprender Matemáticas! Por favor dejame información sobre horarios y modalidades', isActive: true },
      ],
    }
  ];

  const servicios = [
    {
      title: 'Data',
      items: [
        { name: 'Analisis de Datos', icon: FaDatabase, link:'', isActive: false },
        { name: 'Ingeniería de Datos', icon: FaCalendar, link:'', isActive: false },
      ],
    },

    {
      title: 'IA',
      items: [
        { name: 'Machine Learning', icon: FaDatabase, link:'', isActive: false },
        { name: 'Ciencia de Datos', icon: FaChartBar, link:'', isActive: false },
      ],
    },

    {
      title: 'CFD (Computational Fluids Dynamics)',
      items: [
        { name: 'Validación de Soluciones', icon: FaUserCheck, link: '', isActive: false },
        { name: 'Blog de CFD en español', icon: FaWind, link: 'https://foamfatalerror.netlify.app/', isActive: true },
      ],
    },
  ];
  
  return (
    <div className='px-6 col-span-2 bg-dark grid grid-cols-2 gap-4 max-w-7xl min-h-screen mx-auto'>
      <PrincipalText />
      <ImagePrincipal src={bulbo} alt={'asd'} />
      <div
        ref={ref}
        className={`w-full h-auto p-3 my-10 col-span-2 bg-gradient-to-r from-violet-500 via-accent1 to-dark transition-all duration-500 rounded-xl text-center opacity-100 animate-gradient-from`}>
      <h1 className='text-4xl font-bold text-dark font-sans font-extralight'>Enseñanza</h1>
    </div>
      <Services title={'Enseñanza uno a uno'} sections={enseñanza}/>
      <Services title={'Futuros Cursos Asincrónicos'} sections={servicios}/>
    </div>
  );
};

export default Home;