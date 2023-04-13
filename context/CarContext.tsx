import {Dispatch, SetStateAction, createContext, useContext, useState} from "react";

interface CarContextProps {
    items:CarItem[];
    addItem:(item:CarItem )=>void;
    removeItem:(name:string)=>void;
    openCheckout:boolean;
    SetOpenCheckout:Dispatch<SetStateAction<boolean>>;

}
interface CarItem{
    name:string;
    price:number;
    quantity:number;
}

interface CarContextProviderProps {
    children: JSX.Element;
}

const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarContextProvider = ({children}: CarContextProviderProps) => {
    const [carItem,setCartItem] = useState<CarItem[]>([]);
    const [openCheckout, SetOpenCheckout] = useState<boolean>(false);
    const addItem = (item: CarItem)=>{
        setCartItem((prevItems) => {
            const existingItem = prevItems.find((i)=>i.name===item.name);
            if(existingItem){
                return prevItems.map((i)=>i.name===item.name?{...i,quantity: i.quantity+1}:i);
            }
            return [...prevItems,{...item,quantity:1}];
        })
    };

    const removeItem = (name:string)=>{
        setCartItem((prevItems)=>prevItems.reduce((acc, item) => {
            if (item.name === name) {
                if (item.quantity === 1)
                    return acc;
                return [...acc, { ...item, quantity: item.quantity - 1 }];
            }
            return [...acc, item];
        }, [] as CarItem[]))
    };


    return (
        <CarContext.Provider
            value={{items:carItem ,addItem
            ,removeItem
            ,openCheckout
            ,SetOpenCheckout}}>
            {children}
        </CarContext.Provider>
    );
};

export const useCart = () => useContext(CarContext);

export {CarContextProvider};