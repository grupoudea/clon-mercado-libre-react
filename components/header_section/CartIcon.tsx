import { useCart } from '@/context/CarContext';
import Image from 'next/image';

const CartIcon = () => {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const { SetOpenCheckout } = useCart();

  return (
    <div className='flex cursor-pointer items-center justify-center'>
      <span className='text-white absolute text-[14px] ml-[2px] mb-[9px]' onClick={() => { SetOpenCheckout(true) }}>{itemCount}</span>
      <Image width={40} height={30} onClick={() => { SetOpenCheckout(true) }} src="/media/ShopCar.svg" alt="" />
    </div>

  );
};

export default CartIcon;