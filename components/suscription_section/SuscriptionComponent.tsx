/* eslint-disable react/no-array-index-key */
import React from 'react';
import SuscriptionItemComponent from './SuscriptionItemComponent';

const SuscriptionComponent = () => {
  const suscriptions = [
    {
      img: '/media/main/suscripcion/svg/disney.svg',
      text: 'Disney+ sin cargo',
    },
    {
      img: '/media/main/suscripcion/svg/star.svg',
      text: 'Star+ sin cargo',
    },
    {
      img: '/media/main/suscripcion/svg/carrito.svg',
      text: 'Envíos gratis y rápidos desde $ 90.000\ny 40% OFF en envíos de menos de $ 90.000',
    },
  ];

  return (
    <>
      <div
        className='m-auto h-[340px] w-full max-w-[1200px] justify-center rounded-md bg-white shadow-sm
        max-sm:h-[450px]'
      >
        <div
          className=' flex h-[87px] flex-row justify-between rounded-tl-md rounded-tr-md bg-gradient-to-r from-pink-600
            to-indigo-900 pl-[24px] pr-[24px]'
        >
          <div className='font-roboto flex items-center text-2xl font-semibold leading-8 text-white'>
            <span>Suscríbete al nivel 6</span>
          </div>

          <div className='flex flex-row items-center px-0 pb-[2px]'>
            <div className='h-[37px] border-l-2 border-white pr-[7px]'></div>
            <div>
              <span className='font-roboto flex h-[14px] w-[56px] items-center text-right text-sm font-[500] leading-[14px] text-white line-through'>
                $ 50.690
              </span>
              <div className='flex flex-row'>
                <span
                  className='font-roboto flex h-[24px] w-[88px] items-center
                            text-right text-[22px] font-semibold leading-6 text-white'
                >
                  $ 17.899{' '}
                </span>
                <span className='font-roboto flex items-center text-right text-xs  font-semibold leading-[14px] text-white'>
                  {' '}
                  /mes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[172px] pl-6'>
          <span className='font-roboto flex items-center pt-5 text-[17px] font-normal leading-[18px] text-black'>
            Consigue los mejores beneficios en Mercado Libre
          </span>

          <div
            className='flex flex-row justify-between pr-16 pt-8 
                max-md:flex-wrap max-md:justify-center'
          >
            {suscriptions.map((item, idKey) => (
              <SuscriptionItemComponent
                key={idKey}
                src={item.img}
                text={item.text}
              ></SuscriptionItemComponent>
            ))}
          </div>
        </div>
        <div
          className='box-border hidden h-[81px]
            flex-row  justify-end border-t-[1px] border-gray-200 pr-8 pt-4 lg:flex'
        >
          <a className='h-12 w-[124px] rounded-md bg-[#3483FA]'>
            <span
              className='font-roboto flex flex-col items-center
                    text-center text-[15px] font-semibold leading-[48px] text-white'
            >
              Suscríbete
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SuscriptionComponent;
