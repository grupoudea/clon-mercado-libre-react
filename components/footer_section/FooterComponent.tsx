import React from 'react';
import {FooterInfoComponent} from "@/components/footer_section/FooterInfoComponent";
import Image from "next/image";

const FooterComponent = () => {
    return (
        <footer className="m-auto max-w-[1200px] w-full py-[40px]">
            <FooterInfoComponent></FooterInfoComponent>
            <div className="bg-white border-t border-gray-300">
                <div className="mt-4">
                    <div>
                        <ul className="flex flex-wrap justify-center md:justify-start md:ml-0">
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">Trabaja
                                con
                                nosotros
                            </li>
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">Términos
                                y condiciones
                            </li>
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">Cómo
                                cuidamos tu privacidad
                            </li>
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">Accesibilidad</li>
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">Ayuda
                                / PQR
                            </li>
                            <li className="font-normal text-xs leading-4 flex items-start mb-2 mr-4 text-gray-700">www.sic.gov.co</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-1 items-center md:items-start">
                        <span
                            className="font-normal text-xs leading-4 text-gray-9">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
                        <span className="font-normal text-xs leading-4 text-gray-9">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-5 pt-5 sm:px-1 border-t border-gray-300 mt-5 items-center md:items-start">
                    <Image src="/media/main/footer/footer-logo-industria-comercio.png" alt={""} width={141}
                           height={30}/>
                    <Image src="/media/main/footer/footer-logo-pare.png" alt={""} width={200} height={34}/>
                </div>
            </div>
        </footer>
    );
}

export {FooterComponent}