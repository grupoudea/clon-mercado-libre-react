import React from "react";

interface PaymentIntemProps{
    text:string,
    src:string
}

const PaymentItemComponent = ({text,src}:PaymentIntemProps)=>{
    return (
        <div className="grid grid-cols-[min-content_auto] w-[25%] gap-x-2 justify-center items-center  ">
                    <div className="grid  w-[50px] row-span-2">
                    <img width={50}  src={src}/>
                    </div>
                    <span className="row-span-1 grid self-end text-[17px] leading-5 " >{text}</span>
                    <a className="row-span-1 grid self-start text-sm text-[#3483FA]" href="#">Ver más</a>
                </div>
    )
}

export {PaymentItemComponent}