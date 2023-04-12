import React, {ReactNode} from 'react';
import Head from 'next/head';
import {HeaderComponent} from '@/components/header_section/header';

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
            <main className='w-full '>
                <div className='bg-[#EBEBEB]'>
                    {children}
                </div>
            </main>
            {/* FooterComponent here */}
        </div>
    </>
);

export default Layout;