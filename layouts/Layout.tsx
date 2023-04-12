import React, {ReactNode} from 'react';
import Head from 'next/head';
import {HeaderComponent} from '@/components/header_section/header';
import { Container } from '@mui/material';
import { BannerComponent } from '@/components/banner';

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
            <BannerComponent></BannerComponent>
            <main className='w-full bg-[#EBEBEB]'>
                <Container className='debug'>
                    {children}
                </Container>
            </main>
            {/* FooterComponent here */}
        </div>
    </>
);

export default Layout;