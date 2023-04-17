/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Image from 'next/image';

export interface ListCaru {
  numberItems: number;
  children: JSX.Element[];
}

const OfferCarouselComponent = (items1: ListCaru) => {
  const { numberItems, children } = items1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = children.slice(currentIndex, currentIndex + numberItems);

  const previous = () => {
    setCurrentIndex((currentIndex) => {
      const max = Math.max(currentIndex - 1, 0);

      return max;
    });
  };

  const next = () => {
    setCurrentIndex((currentIndex) => {
      const min = Math.min(currentIndex + 1, children.length - numberItems);

      return min;
    });
  };

  return (
    <>
      <div className='flex flex-row items-center justify-center gap-x-[16px] max-lg:gap-x-3'>
        <Image
          className='z-0 mr-[-60px] max-md:h-20 max-md:w-20'
          onClick={previous}
          width={109}
          height={109}
          src='/media/main/ofertas/svg/Ellipse 0.svg'
          alt=''
        />
        {visibleItems.map((item, key) => (
          <div key={key}>{item}</div>
        ))}

        <Image
          className='ml-[-60px] max-md:h-20 max-md:w-20'
          onClick={next}
          width={109}
          height={109}
          src='/media/main/ofertas/svg/Ellipse 1.svg'
          alt=''
        />
      </div>
    </>
  );
};

export default OfferCarouselComponent;
