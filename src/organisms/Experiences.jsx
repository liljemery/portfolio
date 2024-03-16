import React from 'react'
import ExperiencesSeparator from '../molecules/ExperienciesSeparator'
const Experiences = () => {
    return (
        <>
        <ExperiencesSeparator/>
        <div className="h-screen mt-9 max-h-screen overflow-scroll">
                <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  ms-5">
                    Mis Experiencias
                </h1>
                <h2 className=" mb-6 text-4xl italic leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl  ms-5">
                    ¿En qué he trabajado?
                </h2>
                <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 mt-3">
                    He trabajado en multiples sitios donde he tenido la capacidad de desarrollar muchas de mis habilidades, tal que la estructuracion de datos, la administracion de sistemas, gestion de proyectos, automatizacion y desarrollo web full stack.
                </p>
                <ul  className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 mt-3">
                
                <li className="my-6">
                    <h1 className="font-bold">
                        Desarrollador Web
                    </h1>
                    <h2>
                        Infort International <br/>
                        <span className="font-bold">2023 - Presente</span>
                    </h2>
                    <p className="my-3">
                        Me encargo de la planeacion, estructuracion, desarrollo, puesta en funcionamiento y mantenimiento de todo el aspecto web de la pagina de la empresa, y del desarrollo de los proyectos que involucren programacion de los mismos.
                    </p>
                </li>
                
                <li className="my-6">
                    <h1 className="font-bold">
                        Small Business Collections Specialist
                    </h1>
                    <h2>
                        Scotia GBS <br/>
                        <span className="font-bold">2022 - Presente</span>
                    </h2>
                    <p className="my-3">
                        Me encargo del contacto con las jurisdicciones para manejar la tasa de morosidad de los negocios, la reporteria de los mismos y la automatizacion de los flujos de trabajo en el equipo, para mejorar la productividad del mismo
                    </p>
                </li>
                
                <li className="my-6">
                    <h1 className="font-bold">
                        Analista de Herramientas de Mitigacion de Perdida
                    </h1>
                    <h2>
                        Scotia GBS <br/>
                        <span className="font-bold">2022 - 2022</span>
                    </h2>
                    <p className="my-3">
                        Analice data masiva con el fin de representarla graficamente para la gestion de la alta gerencia para la toma de decisiones informadas en el departamento.
                    </p>
                </li>
                </ul>
        </div>
        </>
    )
}

export default Experiences