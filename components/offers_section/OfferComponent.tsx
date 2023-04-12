import React from 'react'
import Image from 'next/image';
import { Container } from '@mui/material';
import { useCart } from '@/context/CarContext';
import { useToast } from '@/context/toastContext';

interface buttonProps {
    productName: string;
    price: number;
}

const OfferComponent = () => {

  return (
    <>
        <div className="ofertas ">
            <div className="seccion-encabezado ">
                <span className="texto-encabezado">Ofertas</span>
                <span className="texto-vinculo">Ver todas</span>
            </div>

            <div className="ofertas-elementos">

                <div className="oferta-elemento">
                    <div className="oferta-img">
                        <Image width={224} height={224} src="/media/main/ofertas/img/silla.png" alt="" />

                    </div>
                    <div className="oferta-precio-texto">
                        <span className="oferta-precio">$ 210.900</span>
                        <span className="oferta-descuento"> 32% OFF</span>
                    </div>
                    <div className="oferta-texto-adicional">
                        <span className="envio-gratis">Envío gratis</span>

                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default OfferComponent