import React from 'react'

import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {BannerComponent} from '@/components/banner';
import {PaymentsComponent} from '@/components/payment_section/payments';
import {CarContextProvider} from '@/context/CarContext';
import {ToastContextProvider} from '@/context/toastContext';
import {Toast} from '@/components/toast/toast';
import CollectionsComponent from "@components/collection_section/CollectionsComponent";
import SuscriptionComponent from '@/components/suscription_section/SuscriptionComponent';
import OfferComponent from '@/components/offers_section/OfferComponent';
import CategoriesComponent from "@components/categories_section/CategoriesComponent";
import BeneficiesComponent from '@/components/beneficies_section/BeneficiesComponent';
import { CheckoutModal } from '@/components/header_section/checkoutModal';

const Index: NextPage = () => (
    <>
        <ToastContextProvider>
            <CarContextProvider>
                <Layout>
                    <BannerComponent></BannerComponent>
                    <div className='pt-[40px] m-auto max-w-[1200px] w-full'>  {/*MAIN INTERIOR*/}
                            <PaymentsComponent></PaymentsComponent>
                            <OfferComponent></OfferComponent>
                            <SuscriptionComponent></SuscriptionComponent>
                            <BeneficiesComponent></BeneficiesComponent>
                            <CollectionsComponent></CollectionsComponent>
                            <CategoriesComponent></CategoriesComponent>
                            <CheckoutModal></CheckoutModal>
                            <Toast></Toast>
                        
                    </div>
                </Layout>
            </CarContextProvider>
        </ToastContextProvider>
    </>
)

export default Index