import React from 'react'
import HabilitiesSeparator from '../molecules/HabilitiesSeparator'

const Habilities = () => {
  return (
    <>
    <HabilitiesSeparator/>
    <div className="h-screen max-h-screen overflow-scroll mt-9">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  ms-5">
            Mis Habilidades
        </h1>
        <h2 className=" mb-6 text-4xl italic leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl  ms-5">
            ¿En que me especializo?
        </h2>
        <p className="animate__animated .box mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 mt-3">
        Cuento con una vasta experiencia en proyectos ideados y desarrollados por mi mismo, con tecnologias que van a fin con lo que se busca en el mercado laboral para asi poder destacar por el empeño que le pongo a cada proyecto. En mi Stack, cuento con las siguientes tecnologias y practicas para poder desarrollar proyectos:
        </p>
        <ul  className="animate__animated .box mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 mt-3">
            <li>
                <p>
                    -React.js - Next.js - Electron.js
                </p>
            </li>
            <li>
                <p>
                    -JavaScript - TypeScript
                </p>
            </li>
            <li>
                <p>
                    -Tailwind - Bootstrap
                </p>
            </li>
                <li>
                <p>
                    -MongoDB - Cloud Firestore
                </p>
            </li>
            <li>
                <p>
                    -Firebase
                </p>
            </li>
            <li>
                <p>
                    -Node.js - Express - Serverless
                </p>
            </li>
            <li>
                <p>
                    -SCRUM
                </p>
            </li>
            <li>
                <p>
                    -CI / CD Pipelines
                </p>
            </li>
            <li>
                <p>
                    -Cloud Native Environments
                </p>
            </li>
            <li>
                <p>
                    -C# Entity Framework
                </p>
            </li>
            <li>
                <p>
                    -Python - FastAPI
                </p>
            </li>
            <li>
                <p>
                    -Gitflow Workflow
                </p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Habilities