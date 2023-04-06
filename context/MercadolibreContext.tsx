import {createContext, useContext} from "react";

interface MercadolibreContextProps {

}

interface MercadolibreContextProviderProps {
    children: JSX.Element;
}

const MercadolibreContext = createContext<MercadolibreContextProps>({} as MercadolibreContextProps);

export const useRecogidasContext = () => useContext(MercadolibreContext);

const MercadolibreContextProvider = ({children}: MercadolibreContextProviderProps) => {

    return (
        <MercadolibreContext.Provider
            value={{}}>
            {children}
        </MercadolibreContext.Provider>
    );
};

export {MercadolibreContextProvider};