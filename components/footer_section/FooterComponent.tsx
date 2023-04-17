import React from 'react';
import { FooterInfoComponent } from '@/components/footer_section/FooterInfoComponent';
import Image from 'next/image';

const FooterComponent = () => (
  <footer className='m-auto w-full max-w-[1200px] py-[40px]'>
    <FooterInfoComponent></FooterInfoComponent>
    <div className='border-t border-gray-300 bg-white'>
      <div className='mt-4'>
        <div>
          <ul className='flex flex-wrap justify-center md:ml-0 md:justify-start'>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              Trabaja con nosotros
            </li>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              Términos y condiciones
            </li>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              Cómo cuidamos tu privacidad
            </li>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              Accesibilidad
            </li>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              Ayuda / PQR
            </li>
            <li className='mb-2 mr-4 flex items-start text-xs font-normal leading-4 text-gray-700'>
              www.sic.gov.co
            </li>
          </ul>
        </div>
        <div className='mt-1 flex flex-col items-center gap-2 md:items-start'>
          <span className='text-xs font-normal leading-4 text-gray-9'>
            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          </span>
          <span className='text-xs font-normal leading-4 text-gray-9'>
            Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
          </span>
        </div>
      </div>
      <div className='mt-5 flex flex-col items-center gap-5 border-t border-gray-300 pt-5 sm:px-1 md:flex-row md:items-start'>
        <Image
          src='/media/main/footer/footer-logo-industria-comercio.png'
          alt={''}
          width={141}
          height={30}
        />
        <Image
          src='/media/main/footer/footer-logo-pare.png'
          alt={''}
          width={200}
          height={34}
        />
      </div>
    </div>
  </footer>
);

export { FooterComponent };
