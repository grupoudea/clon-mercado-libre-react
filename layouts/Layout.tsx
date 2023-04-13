import React, {ReactNode} from 'react';
import Head from 'next/head';
import {HeaderComponent} from '@/components/header_section/header';
import { Container } from '@mui/material';
import { BannerComponent } from '@/components/banner';
import {FooterComponent} from "@/components/footer-section/FooterComponent";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => (
    <>
        <Head>
            <title>Mercado Libre</title>
        </Head>
        <div className='flex flex-wrap '>
            <HeaderComponent></HeaderComponent>
            <main className='w-full bg-[#EBEBEB]'>
                {children}
            </main>
            <FooterComponent></FooterComponent>
        </div>
    </>
);

export default Layout;