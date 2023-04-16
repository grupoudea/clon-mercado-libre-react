import React from 'react'
import OfferItemComponent from './OfferItemComponent';
import SectionHeaderComponent from '../SectionHeaderComponent';
import OfferCarouselComponent from './OfferCarouselComponent';


const OfferComponent = () => {

    const products = [
        {
            img: "/media/main/ofertas/img/closet.png",
            price: 1,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/cortina.png",
            price: 2,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: true
        },
        {
            img: "/media/main/ofertas/img/maquina.png",
            price: 3,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/micro.png",
            price: 4,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/silla.png",
            price: 5,
            discount: "32% OFF",
            isFreeShipping: false,
            isFullFreeShipping: true
        },
        {
            img: "/media/main/ofertas/img/closet.png",
            price: 6,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/cortina.png",
            price: 7,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: true
        },
        {
            img: "/media/main/ofertas/img/maquina.png",
            price: 8,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/micro.png",
            price: 9,
            discount: "32% OFF",
            isFreeShipping: true,
            isFullFreeShipping: false
        },
        {
            img: "/media/main/ofertas/img/silla.png",
            price: 10,
            discount: "32% OFF",
            isFreeShipping: false,
            isFullFreeShipping: true
        }
    ]

  return (
    <>
        <div className="mt-[50px] h-[460px]">
        <SectionHeaderComponent title={"Ofertas"} subtitle={"Ver todas"}
                                        isSubtitleList={false}></SectionHeaderComponent>

            <OfferCarouselComponent items={products.map((items, idKey) => (
                    
                    <OfferItemComponent key={idKey} idKey={idKey} src={items.img} price={items.price} discount={items.discount} isFreeShipping={items.isFreeShipping} isFullFreeShipping={items.isFullFreeShipping}></OfferItemComponent>
            ))}/>

        </div>
    </>
  )
}

export default OfferComponent