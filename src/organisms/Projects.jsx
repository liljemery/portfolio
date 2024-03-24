import React from 'react'
import ProjectsSeparator from '../molecules/ProjectsSeparator'

const Projects = () => {
    return (
        <>
        <ProjectsSeparator/>
        <div className="h-screen max-h-screen overflow-scroll w-full bg-red-600">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl  ms-5 w-full">
                Mis Proyectos
            </h1>
            <p className="my-9 text-xl italic leading-none tracking-tight text-white md:text-3xl lg:text-4xl  ms-5 font-italic">
                He desarrollado multiples proyectos, donde muestro mis habilidades técnicas y mis buenas practicas.
            </p>
            <ul  className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 mt-3">
                
                <li className="my-6 ">
                    <h1 className="font-bold p-3 ">
                        Infort International's Web App
                    </h1>
                    <p className="my-3 p-3">
                    Estuve a cargo del diseño, planeación, programación, alojamiento en la nube, manejo del SEO y puesta en funcionamiento de la Página Web de Infort International. 🌐
                    <br /><br />
                    Para este proyecto, utillice: <br /><br />
                    -React.js + React Router<br />
                    -Atomic design para la estructuracion de carpetas y hacerlas de facil legibilidad y acceso, <br />
                    -Bootstrap para el espaciado y CSS Para los estilos, <br />
                    -Animate CSS para transiciones, <br />
                    -Google Lighthouse para el manejo del desempeño de la Web <br />
                    -Funciones serverless hechas con TypeScript.<br />
                    -Firebase para la plataforma DevOps. 🚀
                    </p>
                    <br/>
                    <a className='bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-auto'
                    href="https://infortinternational.com" target="_blank">
                        Visitar el proyecto
                    </a>
                </li>
                <br/>
                <li className="my-7">
                    <h1 className="font-bold">
                        Seguimiento de Clientes para una Tienda de Ropa 👚
                    </h1>
                    <p className="my-3">
                        En este proyecto, pude practicar el manejo de estado de los componentes, los componetnes controlados y los High Order Componentes al mismo tiempo que trabajaba con tailwind. ( Los datos se guardan en el localStorage ).
                        <br />
                        Este esta hosteado tanto en Netlify como en Firebase Hosting, puesto que estuve aprendiendo ambas tecnologias.
                    </p>
                    <br />
                    <a className='bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-auto' 
                    href="https://majestic-centaur-f30aaf.netlify.app/" target="_blank">
                        Visitar el proyecto
                    </a>
                </li>
                <br/><br/>
                <li className="my-6">
                    <h1 className="font-bold">
                    Full Stack Project Made in React + Express + MongoDB 🚀
                    </h1>
                    <p className="my-3">
                        Este fue un proyecto hecho en el Stack MERN alojando sus servicios de autenticacion en Firebase, el deploy de prueba de la misma fue hecho en GCP ( Google Cloud Platform ). Por otra parte, la base de datos fue subida a un cluster de MongoDB y manejada a traves de MongoDB compass y el back end de la misma.
                    </p>
                    <br />
                    <a className='bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-auto' 
                    href="https://github.com/liljemery/FullStackReact" target="_blank">
                        Visitar el proyecto
                    </a>
                </li>
                <br/>
                <li className="my-6">
                    <h1 className="font-bold">
                    Fibonacci's Sequence
                    </h1>
                    <p className="my-3">
                    En este proyecto de JavaScript, aproveché el poder de TypeScript para crear una fórmula de secuencia de Fibonacci. 📈 luego di vida a los datos usando Chart.js, tejiendo un vibrante tapiz de visualizaciones. 🎨
                    <br />
                    ¡Siéntete libre de explorar las maravillas de Fibonacci que hemos creado! 🚀                    </p>
                    <br />
                    <a className='bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-auto' 
                    href="https://codepen.io/liljemeryworks/details/jORNdvj" target="_blank">
                        Visitar el proyecto
                    </a>
                </li>
                <br/>
                <li className="my-6 ">
                    <h1 className="font-bold p-3 ">
                        NexBot: Transformando la Asistencia Financiera 🚀 
                    </h1>
                    <p className="my-3 p-3">
                        NexBot es un proyecto personal que llevo con pasión y dedicación. Se trata de una plataforma innovadora de asistencia financiera diseñada para simplificar la forma en que las personas interactúan con la información financiera.
                        <br/><br/>
                        💡 Tecnología de Vanguardia:
                        <br/>
                        Utilizando tecnologías de punta como React, Tailwind CSS y Firebase, creé una experiencia de usuario intuitiva y atractiva. Además, integré Firebase Hosting y Firebase Auth para garantizar la seguridad y escalabilidad de nuestra plataforma.
                        <br/><br/>
                        🤖 IA Avanzada:
                        <br/>
                        Destacando en el corazón de NexBot está Gemini-Pro, nuestro modelo de inteligencia artificial. Basado en el poderoso API de Gemini, Gemini permite a los usuarios interactuar de manera natural con la plataforma, proporcionando respuestas rápidas y precisas a consultas financieras.
                        <br/><br/>
                        💼 Impacto Positivo:
                        <br />
                        Estoy emocionado por el potencial de NexBot para transformar la vida financiera de las personas. Si bien , el proyecto no está aún terminado, el objetivo es brindar una solución innovadora que haga que la información financiera sea más accesible y comprensible para todos, a la vez aprender en el camino tanto de finanzas, como de inteligencias artificiales.
                    </p>
                    <br/>
                    <a className='bg-red-300 hover:bg-red-200 text-white font-bold py-2 px-4 rounded mx-auto'
                    href="https://financit.web.app/" target="_blank">
                        Visitar el proyecto
                    </a>
                </li>
                </ul>
            <p className=" my-9 text-xl italic leading-none tracking-tight text-white md:text-3xl lg:text-4xl  ms-5 font-italic">
                <a href="https://www.github.com/liljemery" className="font-bold mx-3" target="_blank">
                    Visita mi GitHub
                </a>
                para conocer mas de mi y de las herramientas que he utilizado para cada uno de los proyectos
            </p>
        </div>
        </>
    )
}

export default Projects