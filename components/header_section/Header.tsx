import React, { useState } from 'react';
import Image from 'next/image';
import CartIcon from './CartIcon';
import { RxHamburgerMenu } from "react-icons/rx";
const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex bg-yellow-ml min-h-[100px] justify-center w-full basis-full ">
            <div className="flex flex-wrap  gap-y-3 pt-2 pr-2.5 pb-3 pl-2.5 bg-yellow-ml">
                <div className="flex justify-between gap-2 lg:basis-1/6 md:basis-full md:justify-center sm:basis-full basis-full  h-[34px]">
                    <div className="flex sm:hidden justify-start gap-x-2">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <RxHamburgerMenu></RxHamburgerMenu>
                            <nav className={`${isMenuOpen ? "block" : "hidden"} shadow-lg absolute w-[300px] px-4 py-4 flex justify-between items-center bg-white`}>
                                <ul className="flex flex-col gap-y-2 list-none items-center text-xs text-gray-menu lg:flex lg:items-center w-full ">
                                    <li className='flex items-center justify-center'>
                                        <a className="hover:text-black" href="#">Categorias</a>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li><a href="#" className="hover:text-black">Ofertas</a></li>
                                    <li><a href="#" className="hover:text-black">Historial</a></li>
                                    <li><a href="#" className="hover:text-black">Supermercado</a></li>
                                    <li><a href="#" className="hover:text-black">Moda</a></li>
                                    <li><a href="#" className="hover:text-black">Vender</a></li>
                                    <li><a href="#" className="hover:text-black">Ayuda/PQR</a></li>
                                    <li></li>
                                    <li></li>
                                    <li><a href="#" className="hover:text-black">Ingresa tu domicilio</a></li>
                                    <li></li>
                                    <li></li>
                                    <li><a href="#" className="hover:text-black">Crea tu cuenta</a></li>
                                    <li><a href="#" className="hover:text-black">Ingresar</a></li>
                                    <li><a href="#" className="hover:text-black">Mis compras</a></li>

                                </ul>
                            </nav>

                        </button>
                    </div>
                    <div className='flex basis-full justify-center'>
                        <Image width={134} height={34} src="/media/logo.svg" alt="" />

                    </div>
                </div>
                <div className="flex lg:basis-3/6 md:basis-full sm:basis-full basis-full">
                    <input type="text" placeholder="Buscar productos, marcas y mas..."
                        className="pl-[15px] w-[98%] h-[39px] bg-white shadow-sm rounded-[2px]  border-[1.5px]
                border-transparent border-solid
                 focus:border-solid focus:border-sky-500 focus:border-[1.5px] focus:shadow-none
                 focus-visible:!outline-0"/>
                    <div className='flex p-1 sm:hidden'>
                        <CartIcon ></CartIcon>
                    </div>
                </div>
                <div className="hidden lg:flex  lg:basis-2/6 "></div>
                <div className=" hidden lg:basis-1/6 md:basis-1/3 sm:basis-1/5 sm:flex  cursor-pointer text-xs justify-center 
                    h-[34px] items-center ">
                    <a>Ingresa tu domicilio</a>
                </div>
                {/* <div className="hidden justify-start gap-2 lg:basis-1/6 md:basis-1/4 md:justify-center sm:flex sm:basis-1/4 h-[34px]"> */}
                    <div className="hidden lg:basis-3/6 md:basis-[47%] sm:basis-1/4 sm:flex">
                        <ul className="flex w-full gap-x-3  list-none
                items-center text-xs text-gray-menu">
                            <li className='flex items-center '>
                                <a className="hover:text-black" href="#">Categorias</a>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                            </li>
                            <li><a href="#" className="hover:text-black">Ofertas</a></li>
                            <li><a href="#" className="hover:text-black">Historial</a></li>
                            <li><a href="#" className="hover:text-black">Supermercado</a></li>
                            <li><a href="#" className="hover:text-black">Moda</a></li>
                            <li><a href="#" className="hover:text-black">Vender</a></li>
                            <li><a href="#" className="hover:text-black">Ayuda/PQR</a></li>
                        </ul>
                    </div>
                {/* </div> */}
                <div className=" hidden lg:basis-2/6 lg:justify-end md:basis-full sm:flex sm:basis-full  justify-center gap-x-[60px]">
                    <ul className="flex w-full gap-x-3  list-none
                items-center text-xs text-gray-menu ">
                        <li><a href="#" className="hover:text-black">Crear tu cuenta</a></li>
                        <li><a href="#" className="hover:text-black">Ingresa</a></li>
                        <li><a href="#" className="hover:text-black">Mis compras</a></li>
                    </ul>
                    <div className="flex basis-content">
                        <CartIcon ></CartIcon>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { HeaderComponent }