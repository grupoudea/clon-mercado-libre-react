import {NavigationContextProvider} from "@/context/NavigationContext";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}: LayoutProps) => (
    <main className='flex h-screen w-full flex-col md:flex-row'>
        <NavigationContextProvider>

        </NavigationContextProvider>
        <section className='flex h-full w-full'>{children}</section>
    </main>
);

export default Layout;