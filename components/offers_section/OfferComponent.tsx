import React from 'react'
import Image from 'next/image';
import { Container } from '@mui/material';
import { useCart } from '@/context/CarContext';
import { useToast } from '@/context/toastContext';
import OfferItemComponent from './OfferItemComponent';
import SectionHeaderComponent from '../SectionHeaderComponent';

interface buttonProps {
    productName: string;
    price: number;
}

const OfferComponent = () => {

    const products = [
        {
            img: "/media/main/ofertas/img/closet.png",
            price: 210900,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/cortina.png",
            price: 210900,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: true
        },
        {
            img: "/media/main/ofertas/img/maquina.png",
            price: 210900,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/micro.png",
            price: 210900,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/silla.png",
            price: 210900,
            discount: "32% OFF",
            isFreeShipping: false,
            isFullFreeShipping: true
        }
    ]

  return (
    <>
        <div className="mt-[50px] px-[8px] h-[460px]">
        <SectionHeaderComponent title={"Ofertas"} subtitle={"Ver todas"}
                                        isSubtitleList={false}></SectionHeaderComponent>

            <div className="flex flex-row justify-center gap-x-[16px]">

                {products.map((items, idKey) => (
                    
                        <OfferItemComponent idKey={idKey} src={items.img} price={items.price} discount={items.discount} isFreeShipping={items.isFreeShipping} isFullFreeShipping={items.isFullFreeShipping}></OfferItemComponent>
                ))}

            </div>
        </div>
    </>
  )
}

export default OfferComponent