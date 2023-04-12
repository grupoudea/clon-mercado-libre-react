import React from 'react'
import Image from 'next/image';


const Suscripcion = () => {
  return (
    <>
            <div className="suscripcion ">
                <div className="suscripcion-encabezado">
                    <div className="suscripcion-nivel">
                        <span>Suscríbete al nivel 6</span>
                    </div>

                    <div className="suscripcion-tarifa">
                        <div className="barra-tarifa">
                        </div>
                        <div>
                            <span className="suscripcion-valor-antes">$ 50.690</span>
                            <div className="suscripcion-tarifa-detalle">
                                <span className="suscripcion-valor-ahora">$ 17.899 </span>
                                <span className="suscripcion-valor-mes"> /mes</span>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="suscripcion-cuerpo">
                    <span className="sus-cuerpo-titulo">Consigue los mejores beneficios en Mercado Libre</span>

                    <div className="sus-elementos">

                        <div className="sus-elemento">
                            <div className="sus-icon">
                                <Image width={72} height={72} src="/media/main/suscripcion/svg/disney.svg" alt="" />
                                    
                            </div>
                            <div className="sus-texto">
                                <span>Disney+ sin cargo</span>
                            </div>

                        </div>

                        <div className="sus-elemento">
                            <div className="sus-icon">
                                <Image width={72} height={72} src="/media/main/suscripcion/svg/star.svg" alt="" />

                                    
                            </div>
                            <div className="sus-texto">
                                <span>Star+ sin cargo</span>
                            </div>

                        </div>

                        <div className="sus-elemento">
                            <div className="sus-icon">
                                <Image width={72} height={72} src="/media/main/suscripcion/svg/carrito.svg" alt="" />
                                    
                            </div>
                            <div className="sus-texto">
                                <span>Envíos gratis y rápidos desde $ 90.000
                                    y 40% OFF en envíos de menos de $ 90.000
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="suscripcion-footer">
                    <a className="sus-btn-suscribete">
                        <span className="sus-btn-texto">Suscríbete</span>
                    </a>

                </div>

            </div>    
    </>
  )
}

export default Suscripcion