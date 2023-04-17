import React from 'react';
import { PaymentItemComponent } from './PaymentItem';
const PaymentsComponent = () => (
  <div className=' grid w-full  basis-full justify-center'>
    <div className='mb-2 mt-10 grid min-h-[90px] w-full max-w-[1184px] grid-cols-1 rounded-[4px] bg-white p-2  shadow-sm sm:grid-cols-4'>
      <PaymentItemComponent
        src='media/credit-card.svg'
        text='Hasta 48 cuotas'
      ></PaymentItemComponent>
      <PaymentItemComponent
        src='media/transfer.svg'
        text='Transferencia desde tu banco'
      ></PaymentItemComponent>
      <PaymentItemComponent
        src='media/payment-agreement.svg'
        text='Paga en efectivo'
      ></PaymentItemComponent>
      <PaymentItemComponent src='media/view-more.svg' text='Más medios de pago'>
        <span className='absolute hidden h-[90px] border-l-[1px] border-[#EEEEEE] sm:block'></span>
      </PaymentItemComponent>
    </div>
  </div>
);

export { PaymentsComponent };
