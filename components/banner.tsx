import React from 'react';
import Image from 'next/image';
const BannerComponent = () => (
  <div className='hidden w-full sm:flex'>
    <Image
      className='w-full'
      alt=''
      width={1000}
      height={500}
      src='/media/banner.jpg'
    ></Image>
  </div>
);

export { BannerComponent };
