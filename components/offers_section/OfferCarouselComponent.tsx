import React, { ReactNode, useState } from 'react';
import Image from 'next/image';


export interface ListCaru {
    // items: any[],
    numberItems: number,
    children:JSX.Element[]
}

const OfferCarouselComponent = (items1: ListCaru) => {
    const {  numberItems,children } = items1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = children.slice(currentIndex, currentIndex + numberItems);
    console.log(numberItems);
    const previous = () => {
        setCurrentIndex(currentIndex => {
            console.log(currentIndex);
            const max = Math.max(currentIndex - 1, 0)
            console.log(max);
            return max

        });
    };

    const next = () => {
        setCurrentIndex(currentIndex => {
            console.log(currentIndex);

            const min = Math.min(currentIndex + 1, children!.length - numberItems)
            console.log(min);

            return min

        });
    };

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-x-[16px] max-lg:gap-x-3">
                <Image className='max-md:h-20 mr-[-60px] z-0 max-md:w-20' onClick={previous} width={109} height={109} src="/media/main/ofertas/svg/Ellipse 0.svg" alt="" />
                    {visibleItems.map((item, key) => (
                    <div key={key}>{item}</div>
                ))}
                
                <Image className='max-md:h-20 ml-[-60px] max-md:w-20' onClick={next} width={109} height={109} src="/media/main/ofertas/svg/Ellipse 1.svg" alt="" />
            
            </div>
        </>


    );
}

export default OfferCarouselComponent;