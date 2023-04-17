/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Image from 'next/image';

export interface ListCaru {
  items: JSX.Element[];
  numberItems: number;
}

const OfferCarouselComponent = (items1: ListCaru) => {
  const { items, numberItems } = items1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = items.slice(currentIndex, currentIndex + numberItems);

  const previous = () => {
    setCurrentIndex((currentIndex) => {
      const max = Math.max(currentIndex - 1, 0);
      return max;
    });
  };

  const next = () => {
    setCurrentIndex((currentIndex) => {
      const min = Math.min(currentIndex + 1, items.length - numberItems);

      return min;
    });
  };

  return (
    <>
      <div className='flex flex-row justify-center gap-x-[16px] max-lg:gap-x-3'>
        <div
          className=' absolute z-0 flex h-[350px] w-full max-w-[1300px] items-center
                '
        >
          <div
            className='absolute z-0 flex w-full max-w-[1300px] flex-row justify-between
                    '
          >
            <Image
              className='max-md:h-20 max-md:w-20'
              onClick={previous}
              width={109}
              height={109}
              src='/media/main/ofertas/svg/Ellipse 0.svg'
              alt=''
            />
            <Image
              className='max-md:h-20 max-md:w-20'
              onClick={next}
              width={109}
              height={109}
              src='/media/main/ofertas/svg/Ellipse 1.svg'
              alt=''
            />
          </div>
        </div>
        {visibleItems.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default OfferCarouselComponent;
