import React from "react";
import { PaymentItemComponent } from "./payment_item";
const PaymentsComponent= ()=>{

    return(
        <div className="flex w-full basis-full justify-center debug">
            <div className="bg-white rounded-[4px] flex mt-10 mb-2 max-w-[1184px] w-full shadow-sm h-[90px]">
                <PaymentItemComponent src="media/credit-card.svg" text="Hasta 48 cuotas" ></PaymentItemComponent>
                <PaymentItemComponent src="media/transfer.svg" text="Transferencia desde tu banco" ></PaymentItemComponent>
                <PaymentItemComponent src="media/payment-agreement.svg" text="Paga en efectivo" ></PaymentItemComponent>
                <span className="border-l-[1px] border-[#EEEEEE] h-full"></span>
                <PaymentItemComponent src="media/view-more.svg" text="Más medios de pago" ></PaymentItemComponent>
            </div> 
                 
        </div>
        
    )
}

export {PaymentsComponent}