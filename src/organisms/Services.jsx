import React from 'react'
import ServicesSeparator from '../molecules/ServicesSeparator'

const Services = () => {
    return (
    <>
    <ServicesSeparator/>
    <div className="h-screen max-h-screen overflow-scroll w-full bg-red-600">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl  ms-5">
            Mis especialidades
        </h1>
        <h2 className=" mb-6 text-4xl italic leading-none tracking-tight text-white md:text-3xl lg:text-4xl  ms-10">
            ¿Qué puedo ofrecer?
        </h2>
        <div className="container mx-auto lg:flex flex-wrap items-center">
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Web Development
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Desarrollo Web del Front y Back End con estandares de alta calidad y las ultimas tecnologías.
                </p>
            </div>
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Cloud Native Environments
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Me siento cómodo trabajando con entornos nativos en la nube, asi que oriento todos mis proyectos independientes a esta tendencia.
                </p>
            </div>
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    SEO Management
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Optimización del SEO de las paginas Web para obtener el mayor flujo de clientes en las paginas. 
                </p>
            </div>
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Performance Optimization
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Optimización del desempeño de la Web para lograr tiempos de cargas mas rapidos.
                </p>
            </div>
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Serverless Environments
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Tengo experiencia con las funciones serverless, asegurandome que estas ejecuten las actividades necesarias sin tener que disponer de un servidor
                </p>
            </div>
            <div className="block lg:max-w-md p-11 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-3 mx-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Data Visualization
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Debido a mi experiencia en la visualización de datos, decidi aprender como se trabaja con estas visualizaciones en JavaScript, por tanto, es parte de mi stack
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services