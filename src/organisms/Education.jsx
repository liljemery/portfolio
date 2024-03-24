import React from 'react'
import EducationSeparator from '../molecules/EducationSeparator'

const Education = () => {
  return (
    <>
    <EducationSeparator/>
    <div className="h-screen max-h-screen overflow-scroll w-full bg-red-600">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl  ms-5">Mi Educación</h1>
        <p className="my-9 text-xl italic leading-none tracking-tight text-white md:text-3xl lg:text-4xl  ms-5 font-italic">Constantemente estoy aprendiendo para lograr seguir expandiendo mis conocimientos para poder dirigirme hacia nuevos horizontes.</p>
        <ul className="my-5 animate__animated .box mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">
            <li className="my-5">
                <h2 className="text-2xl font-bold">
                    Ingeniería de Software
                </h2>
                <h3>
                    Universidad APEC<br />
                    <span className='text-sm'>Enero 2023 -  Septiembre 2025</span>
                </h3>
            </li>
            <li className="my-5">
                <h2 className="text-2xl font-bold">
                    Desarrollo Full Stack con C#
                </h2>
                <h3>
                    Talendig<br />
                    <span className='text-sm' >Septiembre 2022 - Diciembre 2022</span> 
                </h3>
            </li>
            <li className="my-5">
                <h2 className="text-2xl font-bold">
                    Ingenieria Mecatrónica
                </h2>
                <h3>
                    Insituto Tecnológico de Santo Domingo <br />
                    <span className='text-sm'>Agosto 2020 - Septiembre 2022</span>
                </h3>
            </li>
        </ul>
        <p className=" my-9 text-xl italic leading-none tracking-tight text-white md:text-3xl lg:text-4xl  ms-5 font-italic">
            También, me mantengo haciendo cursos en diferentes plataformas, para poder ser un gran profesional y estar al tanto de las novedades del mercado.
        </p>
        <p className=" my-9 text-xl italic leading-none tracking-tight text-white md:text-3xl lg:text-2xl  ms-5 font-italic">
        <a href="https://www.linkedin.com/in/jeremyinoafortuna/details/certifications/" className="font-bold mx-2" target="_blank">
            Haga Click Aquí
        </a> 
        para poder ver todos los cursos y certificados que he completado a lo largo de mi carrera.
        </p>
    </div>
    </>
  )
}

export default Education