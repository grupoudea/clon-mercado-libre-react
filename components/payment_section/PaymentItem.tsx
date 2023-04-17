import React from "react";

interface PaymentIntemProps{
    text:string,
    src:string,
    children?:JSX.Element
}

const PaymentItemComponent = ({text,src,children}:PaymentIntemProps)=>{
    return (
       
        <div className="grid grid-cols-[min-content_auto] p-4 sm:p-0 w-full gap-x-2 justify-center items-center  ">
             {children}
                    <div className="grid  w-[50px] row-span-2">
                    <img width={50}  src={src}/>
                    </div>
                    <span className="row-span-1 grid self-end text-[17px] leading-5 " >{text}</span>
                    <a className="row-span-1 grid self-start text-sm text-[#3483FA]" href="#">Ver más</a>
                </div>
    )
}

export {PaymentItemComponent}