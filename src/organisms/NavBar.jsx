import React from 'react'

const NavBar = () => {
    return (
    <>
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ms-auto">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#main" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Main</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">              
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z" clipRule="evenodd"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sobre mi</span>
                            </a>
                        </li>
                        <li>
                            <a href="#servicios" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M15 4H9v16h6V4Zm2 16h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v16ZM4 4h3v16H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" clipRule="evenodd"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Servicios</span>
                            </a>
                        </li>
                        <li>
                            <a href="#habilidades" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.8 5a3 3 0 0 0-5.6 0H4a1 1 0 1 0 0 2h1.2a3 3 0 0 0 5.6 0H20a1 1 0 1 0 0-2h-9.2ZM4 11h9.2a3 3 0 0 1 5.6 0H20a1 1 0 1 1 0 2h-1.2a3 3 0 0 1-5.6 0H4a1 1 0 1 1 0-2Zm1.2 6H4a1 1 0 1 0 0 2h1.2a3 3 0 0 0 5.6 0H20a1 1 0 1 0 0-2h-9.2a3 3 0 0 0-5.6 0Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Habilidades</span>
                            </a>
                        </li>
                        <li>
                            <a href="#educacion" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Educacion</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experiencias" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 3a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0 12a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5Zm12 0a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0-12a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2Z"/>
                                    <path fillRule="evenodd" d="M10 6.5c0-.6.4-1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM10 18c0-.6.4-1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-4-4a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2c0 .6-.4 1-1 1Zm12 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2c0 .6-.4 1-1 1Z" clipRule="evenodd"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Experiencias</span>
                            </a>
                        </li>
                        <li>
                            <a href="#proyectos" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z" clipRule="evenodd"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:jeremy.inoafort@gmail.com" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Contacto</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </>
    )
}

export default NavBar