import React, { useEffect, useState } from 'react'
import hombreLogo from "./Images/logohombre.jpg"
import Swal from 'sweetalert2'
import logo from "../../../../../Media/Images/logo_ingecables.png";
import { AiOutlineMail } from 'react-icons/ai';
import { GiRotaryPhone } from 'react-icons/gi';

const ModalPanel = ({handleContact, contactData}) => {
    const [modalPosition, setModalPosition] = useState("40%")
    useEffect(() => {
        setModalPosition("50%")
    }, [])

    return (<>
    <section onMouseDown={(e)=>{
                    return e.target.className === "panel" ? handleContact(false) : ""
                }
            } className='panel'>
            <div style={{ top: modalPosition }}  className="custom-card bg-light pb-3 rounded overflow-hidden">
                <span className='shadow shadow-2 w-100 d-flex p-2 justify-content-center'>
                    <img src={logo} alt="" className='contact-logo p-3 '/>
                </span>
                <span className=' mt-5 border border-1 bg-light shadow shadow-2 w-100 d-flex justify-content-center align-items-center p-3'>
                        <span style={{ height: "90%" }}  className='inner-container-card shadow-style d-flex justify-content-center flex-column align-items-center p-1 bg-primary rounded '>
                        {
                        contactData.map( (contact, index) => 
                            <div key={index} className="input-stylesheet m-2">
                                <span className="text-center w-10 input-group-symbol bg-secondary text-sunlight " id="basic-addon1">{contact.contactIcon}</span>
                                <span className="px-1 w-90 input-group-value bg-light" id="basic-addon1">{contact.contactValue}</span>                      
                        </div>
                        )}
                    </span>
                </span>
                <span className='mt-3 w-100 d-flex justify-content-center'>
                    <span onClick={()=>{handleContact(false)}} className='smooth-shade p-1  btn btn-danger w-75'>
                        CERRAR
                    </span>
                </span>
            </div>
        </section>
    </>)
}
const Intro = () => {
    const [activeContact, setActiveContact] = useState(false)
    function handleContact(active) {
        setActiveContact(active)
    }

    const contactData = [
        {contactIcon : <AiOutlineMail />, contactValue: "ventas@ingecables.com"},
        {contactIcon : <AiOutlineMail />, contactValue: "ingecables@hotmail.com"},
        {contactIcon : <GiRotaryPhone />, contactValue: "+593 99 9667904"},
        {contactIcon : <GiRotaryPhone />, contactValue: "+593 93 9809325"},
    ]
  return (
    <>
        {
            activeContact ? (<ModalPanel handleContact={handleContact} contactData={contactData} />) : (<></>)
        }
        <div className="p-3 w-100 container-fluid bg-light rounded">

            <div className="container-fluid border w-100 d-flex justify-content-center shadow-lg shadow p-3 rounded">
                <div>
                <span className='d-flex align-items-center justify-content-center p-2 mb-3 rounded bg-light' style={{ boxShadow: "3px 3px 10px rgba(0,0,0, .54)" }}>
                    <h1 className='text-center'>
                        <span className=' text-primary rounded '>
                            <img src={logo} alt="" className='w-75' />
                        </span>
                    </h1>
                </span>
                </div>
            </div>
            <section className='row p-2 '>
                <span className='d-flex col-md-4 col-sm-12'>
                    <div className="rounded overflow-hidden w-100 d-flex justify-content-center bg-light" style={{ boxShadow: "3px 3px 10px rgba(0,0,0, .8)" }}>
                        <img src={hombreLogo} width="100%" alt=""/>
                    </div>
                </span>
                <span className='d-flex col-md-8 col-sm-12'>
                    <span className='row-5'>
                        <span className="col-md-12 col-sm-12 d-flex flex-column h-100" >
                            <span className='rounded bg-primary text-light py-4 p-2 m-0 h-100 ' style={{ boxShadow: "3px 3px 10px rgba(0,0,0, .8)" }}>
                                Aquí encontrará lo mejor en cables, torones,
                                aceros y alambres especiales.
                                También elaboramos estrobos y fajas de nylon.
                                Como valor agregado en la comercialización de
                                nuestros productos, realizamos inspecciones y
                                evaluaciones en campo, para comprobar su
                                óptimo funcionamiento, y charlas de operación de
                                los mismos sin costo para el cliente.
                                Las cosas de calidad puedes comprar en todas
                                partes, pero las excepcionales en muy pocos sitios.
                                <hr />
                                Ofrecemos productos a distribuidores en industrias que van desde la pesca comercial, el transporte de carga hasta la agricultura y la construcción. Nuestra base de clientes incluye fabricantes de cables, distribuidores regionales, proveedores de suministros específicos de la industria y fabricantes de equipos originales (OEM).
                            </span>
                        </span>
                    </span>
                </span>                
            </section>

        </div>
            <section className="p-3 container-fluid bg-primary rounded text-light d-flex align-items-center flex-column w-100" >
                <span className="fw-bold fs-3 rounded shadow text-center shadow-lg py-2 px-4">¿Busca productos de calidad?</span>
                <span onClick={handleContact} className="fs-4 bg-warning text-dark rounded shadow shadow-lg py-2 px-4 mt-2" style={{ cursor:"pointer" }} data-details="contact">¡CONTÁCTENOS!</span>
            </section>
    </>
  )
}

export default Intro