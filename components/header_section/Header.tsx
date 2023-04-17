import React, { useState } from 'react';
import Image from 'next/image';
import CartIcon from './CartIcon';
import { RxHamburgerMenu } from 'react-icons/rx';
const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex min-h-[100px] w-full basis-full justify-center bg-yellow-ml '>
      <div className='flex flex-wrap  gap-y-3 bg-yellow-ml pb-3 pl-2.5 pr-2.5 pt-2'>
        <div className='flex h-[34px] basis-full justify-between gap-2 sm:basis-full md:basis-full md:justify-center  lg:basis-1/6'>
          <div className='flex justify-start gap-x-2 sm:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <RxHamburgerMenu></RxHamburgerMenu>
              <nav
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } absolute flex w-[300px] items-center justify-between bg-white px-4 py-4 shadow-lg`}
              >
                <ul className='flex w-full list-none flex-col items-center gap-y-2 text-xs text-gray-menu lg:flex lg:items-center '>
                  <li className='flex items-center justify-center'>
                    <a className='hover:text-black' href='#'>
                      Categorias
                    </a>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-5 w-5'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Ofertas
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Historial
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Supermercado
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Moda
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Vender
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Ayuda/PQR
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Ingresa tu domicilio
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Crea tu cuenta
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Ingresar
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-black'>
                      Mis compras
                    </a>
                  </li>
                </ul>
              </nav>
            </button>
          </div>
          <div className='flex basis-full justify-center'>
            <Image width={134} height={34} src='/media/logo.svg' alt='' />
          </div>
        </div>
        <div className='flex basis-full sm:basis-full md:basis-full lg:basis-3/6'>
          <input
            type='text'
            placeholder='Buscar productos, marcas y mas...'
            className='h-[39px] w-[98%] rounded-[2px] border-[1.5px] border-solid border-transparent  bg-white
                pl-[15px] shadow-sm
                 focus:border-[1.5px] focus:border-solid focus:border-sky-500 focus:shadow-none
                 focus-visible:!outline-0'
          />
          <div className='flex p-1 sm:hidden'>
            <CartIcon></CartIcon>
          </div>
        </div>
        <div className='hidden lg:flex  lg:basis-2/6 '></div>
        <div
          className=' hidden h-[34px] cursor-pointer items-center justify-center  text-xs sm:flex sm:basis-1/5 
                    md:basis-1/3 lg:basis-1/6 '
        >
          <a>Ingresa tu domicilio</a>
        </div>
        {/* <div className="hidden justify-start gap-2 lg:basis-1/6 md:basis-1/4 md:justify-center sm:flex sm:basis-1/4 h-[34px]"> */}
        <div className='hidden sm:flex sm:basis-1/4 md:basis-[47%] lg:basis-3/6'>
          <ul
            className='flex w-full list-none  items-center
                gap-x-3 text-xs text-gray-menu'
          >
            <li className='flex items-center '>
              <a className='hover:text-black' href='#'>
                Categorias
              </a>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Ofertas
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Historial
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Supermercado
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Moda
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Vender
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Ayuda/PQR
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div className=' hidden justify-center gap-x-[60px] sm:flex sm:basis-full md:basis-full  lg:basis-2/6 lg:justify-end'>
          <ul
            className='flex w-full list-none  items-center
                gap-x-3 text-xs text-gray-menu '
          >
            <li>
              <a href='#' className='hover:text-black'>
                Crear tu cuenta
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Ingresa
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Mis compras
              </a>
            </li>
          </ul>
          <div className='basis-content flex'>
            <CartIcon></CartIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderComponent };
