import React from 'react';
import Image from 'next/image';
interface PaymentIntemProps {
  text: string;
  src: string;
  children?: JSX.Element;
}

const PaymentItemComponent = ({ text, src, children }: PaymentIntemProps) => (
  <div className='grid w-full grid-cols-[min-content_auto] items-center justify-start gap-x-2 p-4 sm:justify-center sm:p-0  '>
    {children}
    <div className='row-span-2  grid w-[50px]'>
      <Image width={50} height={50} src={src} alt=''></Image>
    </div>
    <span className='row-span-1 grid self-end text-[17px] leading-5 '>
      {text}
    </span>
    <a className='row-span-1 grid self-start text-sm text-[#3483FA]' href='#'>
      Ver más
    </a>
  </div>
);

export { PaymentItemComponent };
