import React from 'react';
import Image from 'next/image';

interface SuscriptionItemComponentProps {
  src: string;
  text: string;
}

const SuscriptionItemComponent = (
  suscriptionItemProps: SuscriptionItemComponentProps
) => (
  <div className='flex flex-row items-center max-lg:flex-wrap  max-md:pb-8'>
    <div className='mr-[17px] max-md:h-[50px] max-md:w-[50px]'>
      <Image width={72} height={72} src={suscriptionItemProps.src} alt='' />
    </div>
    <div
      className='font-roboto flex h-12 w-60 items-center text-[16px] font-normal leading-4 text-black max-lg:w-[140px]
        max-lg:text-[12px]'
    >
      <span>{suscriptionItemProps.text}</span>
    </div>
  </div>
);

export default SuscriptionItemComponent;
