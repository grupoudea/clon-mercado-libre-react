import React from 'react';
import Image from 'next/image';
const HeaderComponent=()=>{
    return( 
    <div className="flex bg-yellow-ml justify-center w-full basis-full ">
        <div className="flex flex-wrap ml-[200px] mr-[74px] gap-y-3 gap-x-6 pt-2 pr-2.5 pb-3 pl-2.5 bg-yellow-ml">
            <div className="row row-1"> 
                <Image width={134} height={34} src="/media/logo.svg" alt="" />
            </div>
            <div className="row row-2">
                <input type="text" placeholder="Buscar productos,marcas y mas..." 
                className="search-box"/>
            </div>
            <div className="row row-3"></div>
            <div className="row row-4"><a>Ingresa tu domicilio</a></div>
            <div className="row row-5">
                <ul className="menu">
                    <li className="categoria"><a href="#">Categorias</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Historial</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Vender</a></li>
                    <li><a href="#">Ayuda/PQR</a></li>
                </ul>
            </div>
            <div className="row row-6">
                <ul className="menu">
                    <li><a href="#">Crear tu cuenta</a></li>
                    <li><a href="#">Ingresa</a></li>
                    <li><a href="#">Mis compras</a></li>
                </ul>
            </div>
        </div>
    </div>
);
}

export {HeaderComponent}