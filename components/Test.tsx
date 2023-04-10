import { useCart } from "@/context/CarContext";
import React from "react";

interface buttonProps{
    productName:string;
    price:number;
    image:string;
}

const TestComponent = (button : buttonProps)=>{
    const { addItem,removeItem } = useCart();
    const AddItemToCar=()=>{
        addItem({name:button.productName,price:button.price,image:button.image,quantity:1})
    }
    const RemoveItemFromCar=()=>{
        removeItem(button.productName)
    }
    return (
        <div className="flex w-full gap-x-6 justify-center">
        <button className="bg-blue-500 flex p-10  " onClick={AddItemToCar}>
            agregar item
        </button>
        <button className="bg-blue-500 flex p-10  " onClick={RemoveItemFromCar}>
            Eliminar item
        </button>
        </div>

    )
}

export {TestComponent}