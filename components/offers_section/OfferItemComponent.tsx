import React from 'react'
import Image from 'next/image';
import { useCart } from '@/context/CarContext';
import { useToast } from '@/context/toastContext';


interface OfferItemComponentProps {
    idKey: any;
    src: string;
    price: number;
    discount: string;
    isFreeShipping: boolean;
    isFullFreeShipping: boolean;
}

const OfferItemComponent = ({idKey, src, price, discount, isFreeShipping, isFullFreeShipping}: OfferItemComponentProps) => {
    const { addItem, items } = useCart();
    const { setToast } = useToast();


    const AddItemToCar = () => {
        const carItem = {name: "product_"+idKey, price: price, quantity: 1}
        addItem(carItem);
        const itemFound = items.find((item) => {
            return item.name == carItem.name;
        })

        const quantity = (itemFound?.quantity)?itemFound.quantity+1: carItem.quantity;

        setToast({ message: `Has agregado ${quantity} producto ${carItem.name}`, type: "success",
        open:true });

    }

    const addDots = (num: number) => {
        let numStr = num.toString();
        let result = '';
        for (let i = numStr.length - 1; i >= 0; i -= 3) {
          let chunk = numStr.slice(Math.max(i - 2, 0), i + 1);
          result = chunk + '.' + result;
        }
        return result.slice(0, -1);
      }

  return (
    
        <div className="hidden md:block w-[224px] h-[350px] bg-white shadow-sm rounded-md" key={idKey} onClick={AddItemToCar}>
            <div className="border-b border-gray-300">
                <Image width={224} height={224} src={src} alt="" />
            </div>
            <div className="flex flex-row items-center gap-[10px] px-[1px] pt-0 pb-0 mt-[19px] ml-[16px]">
                <span className="font-roboto font-normal font-medium:text-base text-[23px]">$ {addDots(price)}</span>
                <span className="font-roboto font-normal text-base leading-4 flex items-center text-green-600">{discount}</span>
            </div>
            <div className="flex flex-row items-center gap-[10px] mt-[5px] ml-[16px]">
                {isFreeShipping && (
                    <span className="font-roboto font-semibold text-xs leading-4 flex items-center text-green-600">Envío gratis</span>
                )}
                 {isFullFreeShipping && (
                    <Image width={41} height={23} src="/media/main/ofertas/svg/full-shipping.svg" alt="" />
                )}
            </div>
        </div>
  )
}

export default OfferItemComponent