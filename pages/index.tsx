import React from 'react'

import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {BannerComponent} from '@/components/banner';
import {PaymentsComponent} from '@/components/payment_section/payments';
import {CarContextProvider} from '@/context/CarContext';
import {TestComponent} from '@/components/Test';
import {CheckoutModal} from '@/components/header_section/checkoutModal';
import {ToastContextProvider} from '@/context/toastContext';
import {Toast} from '@/components/toast/toast';
import CollectionsComponent from "@components/collection_section/CollectionsComponent";
import SuscriptionComponent from '@/components/suscription_section/SuscriptionComponent';
import OfferComponent from '@/components/offers_section/OfferComponent';
import CategoriesComponent from "@components/categories_section/CategoriesComponent";

const Index: NextPage = () => (
    <>
        <ToastContextProvider>
            <CarContextProvider>
                <Layout>
                    <PaymentsComponent></PaymentsComponent>
                    <OfferComponent></OfferComponent>
                    <div className='flex flex-row justify-center gap-x-10'>
                        <TestComponent productName="product1" price={1200}></TestComponent>
                        <TestComponent productName="product2" price={1500}></TestComponent>
                        <TestComponent productName="product3" price={100}></TestComponent>
                        <TestComponent productName="product4" price={1800}></TestComponent>
                        <TestComponent productName="product5" price={25000}></TestComponent>
                        <TestComponent productName="product6" price={12000}></TestComponent>
                    </div>
                    <CollectionsComponent></CollectionsComponent>
                    <CategoriesComponent></CategoriesComponent>
                    <CheckoutModal></CheckoutModal>
                    <Toast></Toast>
                </Layout>
            </CarContextProvider>
        </ToastContextProvider>
    </>
)

export default Index