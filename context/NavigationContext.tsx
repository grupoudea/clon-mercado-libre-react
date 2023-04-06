import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

interface NavigationContextProvider {
    children: JSX.Element[];
}

interface NavigationContextProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextProps>({} as NavigationContextProps);

export const useNavigationContext = () => useContext(NavigationContext);

const NavigationContextProvider = ({children}: NavigationContextProvider) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <NavigationContext.Provider value={{open, setOpen}}>
            {children}
        </NavigationContext.Provider>
    );
};

export {NavigationContextProvider};