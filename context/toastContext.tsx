import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface Toast {
    message: string;
    type:  "success" | "error";
    open:boolean;
}

interface ToastContextProviderProps {
    children: JSX.Element;
}

interface ContextProps {
    toast: Toast;
    setToast: Dispatch<SetStateAction<Toast>>;
    close:()=>void;

}
const ToastContext = createContext<ContextProps>({} as ContextProps);

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
    const [toast, setToast] = useState<Toast>({} as Toast);
    const close=()=>{
        setToast((prevToast)=>({
            ...prevToast,
            open:false,
        }));
    }
    return (
        <ToastContext.Provider value={{ toast, setToast,close }}>
            {children}
        </ToastContext.Provider>
    );
};
export const useToast = () => useContext(ToastContext);
export { ToastContextProvider }