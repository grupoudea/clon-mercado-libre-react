import React from 'react'

import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {BannerComponent} from '@/components/banner';
import {PaymentsComponent} from '@/components/payment_section/payments';
import CollectionsComponent from "@components/collection_section/CollectionsComponent";

const Index: NextPage = () => {
    return (
        <Layout>
            <BannerComponent></BannerComponent>
            <PaymentsComponent></PaymentsComponent>
            <CollectionsComponent></CollectionsComponent>
        </Layout>
    );
};

export default Index