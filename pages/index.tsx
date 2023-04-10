import React from 'react'

import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {MercadolibreContextProvider} from "@/context/MercadolibreContext";
import { BannerComponent } from '@/components/banner';

const Index: NextPage = () => {
    return (
        <Layout>
            <BannerComponent></BannerComponent>
        </Layout>
    );
};

export default Index