import React from 'react'
import Head from "next/head";
import {NextPage} from "next";
import Layout from "@/layouts/Layout";
import {MercadolibreContextProvider} from "@/context/MercadolibreContext";
import Collections from "@/pages/Collections";
import {Container} from "@mui/material";

const Index: NextPage = () => (
    <>
        <Head>
            <title>Mercadolibre</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Layout>
            <MercadolibreContextProvider>
                <Container>
                    <Collections></Collections>
                </Container>
            </MercadolibreContextProvider>
        </Layout>
    </>
);

export default Index