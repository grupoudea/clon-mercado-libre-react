import React, { useState } from 'react'

import { NextPage } from "next";
import Layout from "@/layouts/Layout";
import { BannerComponent } from '@/components/banner';
import { PaymentsComponent } from '@/components/payment_section/payments';
import { CarContextProvider, useCart } from '@/context/CarContext';
import { TestComponent } from '@/components/Test';
import { CheckoutModal } from '@/components/header_section/checkoutModal';



const Index: NextPage = () => (
    <>
        <CarContextProvider>
            <Layout>
                <BannerComponent></BannerComponent>
                <PaymentsComponent></PaymentsComponent>
                <TestComponent productName="product1" price={1200} image="image"  ></TestComponent>
                <CheckoutModal  ></CheckoutModal>
            </Layout>
        </CarContextProvider>

    </>

)


export default Index