/* eslint-disable react/no-array-index-key */
import React from 'react';
import OfferItemComponent from './OfferItemComponent';
import SectionHeaderComponent from '../SectionHeaderComponent';
import OfferCarouselComponent from './OfferCarouselComponent';

const OfferComponent = () => {
  const products = [
    {
      img: '/media/main/ofertas/img/closet.png',
      price: 1,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/cortina.png',
      price: 2,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: true,
    },
    {
      img: '/media/main/ofertas/img/maquina.png',
      price: 3,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/micro.png',
      price: 4,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/silla.png',
      price: 5,
      discount: '32% OFF',
      isFreeShipping: false,
      isFullFreeShipping: true,
    },
    {
      img: '/media/main/ofertas/img/closet.png',
      price: 6,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/cortina.png',
      price: 7,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: true,
    },
    {
      img: '/media/main/ofertas/img/maquina.png',
      price: 8,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/micro.png',
      price: 9,
      discount: '32% OFF',
      isFreeShipping: true,
      isFullFreeShipping: false,
    },
    {
      img: '/media/main/ofertas/img/silla.png',
      price: 10,
      discount: '32% OFF',
      isFreeShipping: false,
      isFullFreeShipping: true,
    },
  ];
  const items = products.map((items, idKey) => (
    <OfferItemComponent
      key={idKey}
      idKey={idKey}
      src={items.img}
      price={items.price}
      discount={items.discount}
      isFreeShipping={items.isFreeShipping}
      isFullFreeShipping={items.isFullFreeShipping}
    ></OfferItemComponent>
  ));
  return (
    <>
      <div
        className='mt-[50px] hidden h-[460px]
        xl:block'
      >
        <SectionHeaderComponent
          title={'Ofertas'}
          subtitle={'Ver todas'}
          isSubtitleList={false}
        ></SectionHeaderComponent>

        <OfferCarouselComponent numberItems={5}>{items}</OfferCarouselComponent>
      </div>

      <div
        className='mt-[50px] hidden h-[460px]
        lg:block xl:hidden'
      >
        <SectionHeaderComponent
          title={'Ofertas'}
          subtitle={'Ver todas'}
          isSubtitleList={false}
        ></SectionHeaderComponent>

        <OfferCarouselComponent numberItems={4}>{items}</OfferCarouselComponent>
      </div>

      <div
        className='mt-[50px] hidden h-[460px]
        sm:block lg:hidden
        '
      >
        <SectionHeaderComponent
          title={'Ofertas'}
          subtitle={'Ver todas'}
          isSubtitleList={false}
        ></SectionHeaderComponent>

        <OfferCarouselComponent numberItems={3}>{items}</OfferCarouselComponent>
      </div>

      <div
        className='mt-[50px] hidden h-[460px]
        xs:block sm:hidden
        '
      >
        <SectionHeaderComponent
          title={'Ofertas'}
          subtitle={'Ver todas'}
          isSubtitleList={false}
        ></SectionHeaderComponent>

        <OfferCarouselComponent numberItems={2}>{items}</OfferCarouselComponent>
      </div>

      <div
        className='mt-[50px] h-[460px]
        xs:hidden
        '
      >
        <SectionHeaderComponent
          title={'Ofertas'}
          subtitle={'Ver todas'}
          isSubtitleList={false}
        ></SectionHeaderComponent>

        <OfferCarouselComponent numberItems={1}>{items}</OfferCarouselComponent>
      </div>
    </>
  );
};

export default OfferComponent;
