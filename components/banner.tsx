import React from 'react';
import Image from 'next/image';
const BannerComponent = () => (
  <div className='hidden w-full sm:flex'>
    <Image className='w-full' alt='' src='media/banner.jpg'></Image>
  </div>
);

export { BannerComponent };
