import { useCart } from "@/context/CarContext";
import { useToast } from "@/context/toastContext";
import React from "react";

interface buttonProps {
    productName: string;
    price: number;
    // image: string;
}

const TestComponent = (button: buttonProps) => {
    const { addItem } = useCart();
    const { setToast } = useToast();


    const AddItemToCar = () => {
        addItem({
            name: button.productName, price: button.price, quantity: 1
            // image:button.image
        });
        setToast({ message: "Producto agregado correctamente", type: "success",
        open:true });
        
    }

    return (
        <div className="flex  gap-x-6 justify-center">
            <button className="bg-blue-500 flex p-10  " onClick={AddItemToCar}>
                agregar item
            </button>
        </div>


    )
}

export { TestComponent }