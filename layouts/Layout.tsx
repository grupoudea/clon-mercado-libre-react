import React, { ReactNode } from 'react';
import Head from 'next/head';
import { HeaderComponent } from '@/components/header';
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) => (
    // <main className='flex h-screen w-full flex-col md:flex-row'>
    //     {/* <NavigationContextProvider>

    //     </NavigationContextProvider> */
        
    //     }
    //     <section className='flex h-full w-full'>{children}</section>
    // </main>
   
        <>
            <Head>
                <title>Mercado Libre</title>
            
            </Head>
            <div className='flex flex-wrap '>
            <HeaderComponent></HeaderComponent>
                <main className='w-full'>{children}</main>
            {/* Footer here */}
        </div>
        </>
    
);

export default Layout;