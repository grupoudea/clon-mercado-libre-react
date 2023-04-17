import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CarContext';
import { useToast } from '@/context/toastContext';

interface OfferItemComponentProps {
  idKey: number;
  src: string;
  price: number;
  discount: string;
  isFreeShipping: boolean;
  isFullFreeShipping: boolean;
}

const OfferItemComponent = ({
  idKey,
  src,
  price,
  discount,
  isFreeShipping,
  isFullFreeShipping,
}: OfferItemComponentProps) => {
  const { addItem, items } = useCart();
  const { setToast } = useToast();

  const AddItemToCar = () => {
    const carItem = { name: 'product_' + idKey, price: price, quantity: 1 };
    addItem(carItem);
    const itemFound = items.find((item) => item.name == carItem.name);

    const quantity = itemFound?.quantity
      ? itemFound.quantity + 1
      : carItem.quantity;

    setToast({
      message: `Has agregado ${quantity} producto ${carItem.name}`,
      type: 'success',
      open: true,
    });
  };

  const addDots = (num: number) => {
    const numStr = num.toString();
    let result = '';
    for (let i = numStr.length - 1; i >= 0; i -= 3) {
      const chunk = numStr.slice(Math.max(i - 2, 0), i + 1);
      result = chunk + '.' + result;
    }
    return result.slice(0, -1);
  };

  return (
    <div
      className='h-[350px] w-[224px] cursor-pointer rounded-md bg-white shadow-sm
        max-xl:w-[210px] max-lg:w-[198px] max-md:h-[300px]'
      key={idKey}
      onClick={AddItemToCar}
    >
      <div className='border-b border-gray-300'>
        <Image width={224} height={224} src={src} alt='' />
      </div>
      <div className='ml-[16px] mt-[19px] flex flex-row items-center gap-[10px] px-[1px] pb-0 pt-0'>
        <span className='font-roboto font-medium:text-base text-[23px] font-normal'>
          $ {addDots(price)}
        </span>
        <span className='font-roboto flex items-center text-base font-normal leading-4 text-green-600'>
          {discount}
        </span>
      </div>
      <div className='ml-[16px] mt-[5px] flex flex-row items-center gap-[10px]'>
        {isFreeShipping && (
          <span className='font-roboto flex items-center text-xs font-semibold leading-4 text-green-600'>
            Envío gratis
          </span>
        )}
        {isFullFreeShipping && (
          <Image
            width={41}
            height={23}
            src='/media/main/ofertas/svg/full-shipping.svg'
            alt=''
          />
        )}
      </div>
    </div>
  );
};

export default OfferItemComponent;
