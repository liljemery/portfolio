import React from 'react'
import AboutSeparator from '../molecules/AboutSeparator'

const AboutMe = () => {
  return (
    <>
    <AboutSeparator/>
    <div className="h-screen max-h-screen overflow-scroll my-9">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ms-5">
            Sobre mi
        </h1>
        <h2 className=" mb-6 text-4xl italic leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl ms-5">
            ¿Quien soy?
        </h2>
        <p className="animate__animated .box mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48  mt-3">
            Soy Jeremy Inoa Fortuna, un apasionado de la tecnología y el aprendizaje continuo. Actualmente estudio Ingeniería del Software y trabajo como desarrollador para Infort Internacional.
        </p>
        <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48">
            Soy apasionado, autodidacta y siempre dispuesto a aprender. Mi enfoque en la calidad del código y la resolución de problemas me convierte en un activo valioso para cualquier equipo. Me encanta colaborar y compartir conocimientos con mis compañeros.
        </p>
        <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 ">
            Estoy constantemente aprendiendo y desarrollándome iniciando proyectos y leyendo sobre otros proyectos que involucran cosas que sé que me harán crecer profesionalmente.
        </p>
        <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 ">
            ¡Estoy emocionado de seguir creciendo como profesional y contribuyendo a proyectos desafiantes! Si quieres saber más o colaborar, ¡no dudes en contactarme!
        </p>
    </div>
    </>
    )
}

export default AboutMe