import React from 'react';
import Image from "next/image";

const FooterInfoComponent = () => {
    return (
        <div
            className="mx-auto px-4 md:px-8 lg:px-12 xl:px-24 flex flex-col items-center justify-center md:text-center">
            <div className="mx-auto flex flex-row justify-center">
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
                    <div className="mb-6">
                        <Image src="/media/main/informacion-adicional/svg/payment.svg.svg" alt={""} width={66}
                               height={46}/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray-text-info-footer text-xl font-medium leading-normal">Paga con
                            tarjeta o en efectivo</h2>
                        <p>
                               <span
                                   className="text-sm leading-snug text-gray-light-text-info-footer">
                                Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo conefectivo en puntos de pago. ¡Y siempre es seguro!
                               </span>
                        </p>
                        <span
                            className="text-sm leading-5 text-blue-text-link-info-footer">Cómo pagar con Mercado Pago</span>
                    </div>
                </div>
                <div className="mt-24 w-px h-16 bg-gray-300"></div>
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
                    <div className="mb-6">
                        <Image src="/media/main/informacion-adicional/svg/shipping.svg.svg" alt={""} width={56}
                               height={49}/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray-text-info-footer text-xl font-medium leading-normal">Envío gratis desde
                            $ 90.000</h2>
                        <p>
                               <span
                                   className="text-sm leading-snug text-gray-light-text-info-footer">
                                Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.
                               </span>
                        </p>
                        <span className="text-sm leading-5 text-blue-text-link-info-footer">Conoce más sobre este beneficio</span>
                    </div>
                </div>
                <div className="mt-24 w-px h-16 bg-gray-300"></div>
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
                    <div className="mb-6">
                        <Image src="/media/main/informacion-adicional/svg/protected.svg.svg" alt={""} width={51}
                               height={55}/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-gray-text-info-footer text-xl font-medium leading-normal">Seguridad, de
                            principio a fin</h2>
                        <p>
                               <span
                                   className="text-sm leading-snug text-gray-light-text-info-footer">
                                ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.
                               </span>
                        </p>
                        <span className="text-sm leading-5 text-blue-text-link-info-footer">Cómo te protegemos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {FooterInfoComponent}