import React from 'react';
import Image from 'next/image';
import CartIcon from './CartIcon';
const HeaderComponent=()=>{
    return( 
    <div className="flex bg-yellow-ml h-[100px] justify-center w-full basis-full ">
        <div className="flex flex-wrap  gap-y-3 pt-2 pr-2.5 pb-3 pl-2.5 bg-yellow-ml">
            <div className="flex basis-1/6 justify-center h-[34px]"> 
                <Image width={134} height={34} src="/media/logo.svg" alt="" />
             
            </div>
            <div className="flex basis-3/6">
                <input type="text" placeholder="Buscar productos, marcas y mas..." 
                className="pl-[15px] w-[98%] h-[39px] bg-white shadow-sm rounded-[2px]  border-[1.5px]
                border-transparent border-solid
                 focus:border-solid focus:border-sky-500 focus:border-[1.5px] focus:shadow-none
                 focus-visible:!outline-0"/>
            </div>
            <div className="flex basis-2/6"></div>
            <div className="flex basis-1/6 cursor-pointer text-xs justify-center 
                    h-[34px] items-center ">
                <a>Ingresa tu domicilio</a>
                </div>
            <div className="flex basis-3/6">
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
            <div className="flex basis-2/6 gap-x-[60px]">
                <ul className="flex w-full gap-x-3 justify-end list-none
                items-center text-xs text-gray-menu ">
                    <li><a href="#" className="hover:text-black">Crear tu cuenta</a></li>
                    <li><a href="#" className="hover:text-black">Ingresa</a></li>
                    <li><a href="#" className="hover:text-black">Mis compras</a></li>
                </ul>
                <CartIcon></CartIcon>
            </div>
        </div>
    </div>
);
}

export {HeaderComponent}