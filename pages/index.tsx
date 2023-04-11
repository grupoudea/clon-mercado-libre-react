import React from 'react'

import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {BannerComponent} from '@/components/banner';
import {PaymentsComponent} from '@/components/payment_section/payments';

const Index: NextPage = () => {
    return (
        <Layout>
            <BannerComponent></BannerComponent>
            <PaymentsComponent></PaymentsComponent>
        </Layout>
    );
};

export default Index