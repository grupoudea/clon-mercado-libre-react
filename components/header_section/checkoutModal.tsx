import React from "react";
import { Modal } from "../modals/modal";
import { useCart } from "@/context/CarContext";
import Image from "next/image";
import { useToast } from "@/context/toastContext";

const CheckoutModal = () => {
    const { SetOpenCheckout, openCheckout, items,removeItem } = useCart();
    const { setToast} = useToast();
    const RemoveItemFromCar=(productName:string)=>{
        removeItem(productName)
        setToast({ message: "Producto Eliminado correctamente",
        type: "success",open:true });
    }
    return (

        <Modal  open={openCheckout} setOpen={SetOpenCheckout} title='CHECKOUT' >
            <div className="w-[500px] p-10">
                <div className="grid grid-cols-4 gap-5 text-center mb-4">
                    <div className="col-span-1 font-bold">Product</div>
                    <div className="col-span-1 font-bold">Quantity</div>
                    <div className="col-span-1 font-bold">Price</div>
                    <div className="col-span-1 font-bold">Eliminar</div>
                </div>
                {items.map((item) => (
                    <div className="grid grid-cols-4 gap-5 mb-2 text-center" key={item.name}>
                        <div className="col-span-1">{item.name}</div>
                        <div className="col-span-1">{item.quantity}</div>
                        <div className="col-span-1">$ {item.price}</div>
                        <div className="col-span-1 grid justify-center">
                            <Image width={25} alt="Eliminar" height={25} 
                            src="media/main/icons/trash.svg"
                            className="cursor-pointer"
                            onClick={()=>RemoveItemFromCar(item.name)}></Image> 
                        </div>
                    </div>
                ))}
                <div className="grid justify-end mt-10 text-center w-[35%] mr-0 ml-auto grid-cols-2">
                    <span className="font-bold">Total :</span>
                    <span>$ {items.reduce((total,item)=>total+item.price*item.quantity,0)}</span>
                </div>
            </div>
        </Modal>
    )
}

export { CheckoutModal }