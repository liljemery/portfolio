import React from 'react'
import Myself from '../assets/mePic.png'


const MainContent = () => {
    return (
    <>
    <div id="main" className="flex items-center justify-around flex-row-reverse h-screen bg-red-600">  
    <img src={Myself} className="hidden sm:block w-full h-auto max-w-sm rounded-lg me-5 animate__animated animate__fadeInLeft" id="ptcr" alt="Mi foto"/>
    <section className="my-5">
        <div id="nameWrapper" className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl antialiased">Hola, soy Jeremy Inoa Fortuna.</h1>
            <p className="my-8 text-lg text-white font-bold lg:text-xl sm:px-16 lg:px-30">Soy un Full Stack Developer, apasionado de la tecnología y amante de las interacciones donde intercambiamos conocimientos.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="https://www.github.com/liljemery" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd"/>
                    </svg>
                    Mira mis proyectos
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/jeremyinoafortuna/" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 rounded-lg bg-white hover:bg-gray-200focus:ring-4 focus:ring-blue-300">
                    <svg className="w-6 h-6 text-gray-800 mb-1 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd"/>
                        <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                    </svg>  
                    Contactame en Linked In
                </a>
            </div>
        </div>
    </section>
    </div>
    </>
    )
}

export default MainContent