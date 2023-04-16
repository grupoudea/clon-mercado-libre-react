import React, { useState } from 'react';
import Image from 'next/image';


export interface ListCaru {
    items: JSX.Element[]
}

const OfferCarouselComponent = (items1: ListCaru) => {
    const {items} = items1
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = items.slice(currentIndex, currentIndex + 5);

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
            
            const min = Math.min(currentIndex + 1, items.length - 5) 
            console.log(min );

            return min
             
        });
    };

    return (
        <div className=" flex flex-row justify-center gap-x-[16px] max-lg:gap-x-3">
            <div className=' z-0 absolute w-[1300px] h-[350px] flex items-center'>
                <div className='-green z-0 absolute w-[1300px] flex flex-row justify-between'>
                    <Image className='' onClick={previous} width={109} height={109} src="/media/main/ofertas/svg/Ellipse 0.svg" alt="" />
                    <Image className='' onClick={next} width={109} height={109} src="/media/main/ofertas/svg/Ellipse 1.svg" alt="" />
                </div>
            </div>
            {visibleItems.map((item, key) => (
                    <div key={key}>{item}</div>
                ))}
       
        </div>
    );
}

export default OfferCarouselComponent;