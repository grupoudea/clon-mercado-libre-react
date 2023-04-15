import React from 'react'
import BeneficiesItemComponent from './BeneficiesItemComponent'
import SectionHeaderComponent from '../SectionHeaderComponent'

const BeneficiesComponent = () => {
    const beneficies =  [
        {
            idkey:1,
            mainImg: "/media/main/beneficios/img/disney-star.png",
            secondaryImg: "/media/main/beneficios/img/comboplus-square.jpg.png",
            mainText: "Sin cargo con nivel 6",
            secondaryText: "Disney+ y Star+",
            platform: "DISNEY"
        },
        {
            idkey:2,
            mainImg: "/media/main/beneficios/img/hbo.png",
            secondaryImg: "/media/main/beneficios/img/hbologoSquare.png",
            mainText: "Hasta 50% OFF",
            secondaryText: "HBO Max",
            tertiaryText: "7 DÍAS GRATIS",
            platform: "HBO"
        },
        {
            idkey:3,
            mainImg: "/media/main/beneficios/img/paramount.png",
            secondaryImg: "/media/main/beneficios/img/paramount-logo.png",
            mainText: "Hasta 50% OFF",
            secondaryText: "Paramount+",
            tertiaryText: "7 DÍAS GRATIS",
            platform: "PARAMOUNT"
        }

    ]

  return (
    <div className="mt-10 w-full">
        <SectionHeaderComponent title={"Beneficios de Mercado Puntos"} subtitle={"Ver todos los beneficios"}
                                        isSubtitleList={false}></SectionHeaderComponent>
        <div className="m-auto flex flex-row justify-center gap-4 h-64">

            {
                beneficies.map((item)=> (
                    <BeneficiesItemComponent mainImg={item.mainImg} secondaryImg={item.secondaryImg} key={item.idkey}
                    mainText={item.mainText} secondaryText={item.secondaryText} tertiaryText={item.tertiaryText} platform={item.platform}></BeneficiesItemComponent>
                ))
            }

        </div>
    </div>
  )
}

export default BeneficiesComponent