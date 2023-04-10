import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "../modals/modal";
import { useCart } from "@/context/CarContext";


const CheckoutModal = () => {
    const {SetOpenCheckout,openCheckout } = useCart();
    return (
        <div>
            <Modal open={openCheckout} setOpen={SetOpenCheckout} title='Checkout' >
                <div>contenido</div>
            </Modal>
        </div>
    )
}

export {CheckoutModal}