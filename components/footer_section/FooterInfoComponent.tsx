import React from 'react';
import Image from 'next/image';

const FooterInfoComponent = () => (
  <div className='mx-auto items-center justify-center px-4 text-center'>
    <div className='mx-auto flex flex-col justify-center md:flex-row '>
      <div className='flex w-full flex-col items-center justify-center p-4 md:w-1/3'>
        <div className='mb-6'>
          <Image
            src='/media/main/informacion-adicional/svg/payment.svg.svg'
            alt={''}
            width={66}
            height={46}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-medium leading-normal text-gray-text-info-footer'>
            Paga con tarjeta o en efectivo
          </h2>
          <p>
            <span className='text-sm leading-snug text-gray-9'>
              Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
              financiación que te da tu banco, o hazlo conefectivo en puntos de
              pago. ¡Y siempre es seguro!
            </span>
          </p>
          <span className='text-sm leading-5 text-blue-link'>
            Cómo pagar con Mercado Pago
          </span>
        </div>
      </div>
      <div className='mt-24 hidden h-16 w-px bg-gray-300 md:block'></div>
      <div className='flex w-full flex-col items-center justify-center p-4 md:w-1/3'>
        <div className='mb-6'>
          <Image
            src='/media/main/informacion-adicional/svg/shipping.svg.svg'
            alt={''}
            width={56}
            height={49}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-medium leading-normal text-gray-text-info-footer'>
            Envío gratis desde $ 90.000
          </h2>
          <p>
            <span className='text-sm leading-snug text-gray-9'>
              Con solo estar registrado en Mercado Libre, tienes envíos gratis
              en miles de productos seleccionados.
            </span>
          </p>
          <span className='text-sm leading-5 text-blue-link'>
            Conoce más sobre este beneficio
          </span>
        </div>
      </div>
      <div className='mt-24 hidden h-16 w-px bg-gray-300 md:block'></div>
      <div className='flex w-full flex-col items-center justify-center p-4 md:w-1/3'>
        <div className='mb-6'>
          <Image
            src='/media/main/informacion-adicional/svg/protected.svg.svg'
            alt={''}
            width={51}
            height={55}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-medium leading-normal text-gray-text-info-footer'>
            Seguridad, de principio a fin
          </h2>
          <p>
            <span className='text-sm leading-snug text-gray-9'>
              ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </span>
          </p>
          <span className='text-sm leading-5 text-blue-link'>
            Cómo te protegemos
          </span>
        </div>
      </div>
    </div>
  </div>
);

export { FooterInfoComponent };
