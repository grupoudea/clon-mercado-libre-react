import React from 'react'
import SuscriptionItemComponent from './SuscriptionItemComponent';


const SuscriptionComponent = () => {

    const suscriptions = [
        {
            img: "/media/main/suscripcion/svg/disney.svg",
            text: "Disney+ sin cargo"
        },
        {
            img: "/media/main/suscripcion/svg/star.svg",
            text: "Star+ sin cargo"
        },
        {
            img: "/media/main/suscripcion/svg/carrito.svg",
            text: "Envíos gratis y rápidos desde $ 90.000\ny 40% OFF en envíos de menos de $ 90.000"
        }
    ]

  return (
    <>
        <div className="shadow-sm m-auto w-[1180px] h-[340px] bg-white rounded-md ">
            <div className="rounded-tl-md rounded-tr-md flex flex-row justify-between pl-[24px] pr-[24px] h-[87px]
            bg-gradient-to-r from-pink-600 to-indigo-900">
                <div className="font-roboto font-semibold text-2xl leading-8 flex items-center text-white">
                    <span>Suscríbete al nivel 6</span>
                </div>

                <div className="flex flex-row items-center px-0 pb-[2px]">
                    <div className="h-[37px] border-l-2 border-white pr-[7px]"></div>
                    <div>
                        <span className="w-[56px] h-[14px] font-roboto font-[500] text-sm leading-[14px] flex items-center text-right line-through text-white">$ 50.690</span>
                        <div className="flex flex-row">
                            <span className="w-[88px] h-[24px] font-roboto font-semibold text-[22px]
                            leading-6 flex items-center text-right text-white">$ 17.899 </span>
                            <span className="font-roboto font-semibold text-xs leading-[14px] flex  items-center text-right text-white"> /mes</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="h-[172px] pl-6">
                <span className="flex items-center pt-5 font-roboto font-normal text-[17px] leading-[18px] text-black">Consigue los mejores beneficios en Mercado Libre</span>

                <div className="flex flex-row justify-between pt-8 pr-16">
                    {suscriptions.map((item, id) => (
                        <SuscriptionItemComponent src={item.img} text={item.text}></SuscriptionItemComponent>
                    ))}
                </div>

            </div>
            <div className="box-border h-[81px] border-t-[1px]
             border-gray-200 flex flex-row justify-end pr-8 pt-4">
                <a className="w-[124px] h-12 bg-[#3483FA] rounded-md">
                    <span className="flex flex-col items-center text-center
                    font-roboto font-semibold text-[15px] leading-[48px] text-white">Suscríbete</span>
                </a>

            </div>

        </div>
    </>
  )
}

export default SuscriptionComponent