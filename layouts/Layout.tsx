import React, {ReactNode} from 'react';
import Head from 'next/head';
import {FooterComponent} from "@/components/footer_section/FooterComponent";
import { HeaderComponent } from '@/components/header_section/Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => (
    <>
        <Head>
            <title>Mercado Libre</title>
        </Head>
        <HeaderComponent></HeaderComponent>
        <main className='w-full bg-[#EBEBEB]'>
            {children}
        </main>
        <FooterComponent></FooterComponent>
    </>
);

export default Layout;