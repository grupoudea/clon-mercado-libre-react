import React from 'react';
import Image from 'next/image';

interface DiscoverItemComponentProps {
  mainText1: string;
  mainText2: string;
  secondaryText: string;
  textButton: string;
  img: string;
}

const DiscoverItemComponent = (discover: DiscoverItemComponentProps) => {
  const mainTextStyle =
    'font-roboto font-semibold text-[28px] leading-8 flex items-center text-uppercase text-[#4B4B4B] md:text-[14px]';

  return (
    <div
      className='flex h-[250px] w-[584px] flex-row justify-between rounded bg-white shadow-md
     max-xl:h-[220px]
     max-xs:h-[150px]'
    >
      <div className='flex flex-col items-start pl-8'>
        <div
          className='flex flex-col pt-[57.7px]
        '
        >
          <span
            className='font-roboto text-uppercase flex 
          items-center text-[12px] font-semibold leading-3 tracking-[4px] 
          text-[#4B4B4B]
          max-xs:text-[10px]'
          >
            {discover.secondaryText}
          </span>
          <div
            className='mt-[11px]
          max-xs:mt-1'
          >
            <span className={`${mainTextStyle} max-sm:text-[12px]`}>
              {discover.mainText1}
            </span>
            <span className={`${mainTextStyle} max-sm:text-[12px]`}>
              {discover.mainText2}
            </span>
          </div>
        </div>

        <div
          className='mt-[13.8px] flex h-9 w-24 flex-col justify-center rounded-sm bg-[#3483FA]
        max-xs:hidden'
        >
          <span className='font-roboto text-center text-sm font-semibold text-white'>
            {discover.textButton}
          </span>
        </div>
      </div>
      <Image
        className='h-[250px] rounded max-xl:h-[220px] max-xl:w-[200px]
      max-xs:h-[150px] max-xs:w-[150px]'
        width={289.84}
        height={250}
        src={discover.img}
        alt=''
      />
    </div>
  );
};

export default DiscoverItemComponent;
