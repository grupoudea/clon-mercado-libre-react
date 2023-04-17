import React from "react";
import { PaymentItemComponent } from "./PaymentItem";
const PaymentsComponent= ()=>{

    return(
        <div className=" w-full basis-full  grid justify-center">
            <div className="bg-white rounded-[4px] grid grid-cols-1 sm:grid-cols-4 p-2 mt-10 mb-2 max-w-[1184px] w-full  shadow-sm min-h-[90px]">
                <PaymentItemComponent src="media/credit-card.svg" text="Hasta 48 cuotas" ></PaymentItemComponent>
                <PaymentItemComponent src="media/transfer.svg" text="Transferencia desde tu banco" ></PaymentItemComponent>
                <PaymentItemComponent src="media/payment-agreement.svg" text="Paga en efectivo" ></PaymentItemComponent>
                <PaymentItemComponent src="media/view-more.svg" text="Más medios de pago" >
                    <span className="border-l-[1px] border-[#EEEEEE] h-[90px] absolute hidden sm:block"></span>
                </PaymentItemComponent>
            </div> 
                 
        </div>
        
    )
}

export {PaymentsComponent}