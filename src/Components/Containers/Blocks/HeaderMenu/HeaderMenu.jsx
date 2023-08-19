import React, { useEffect, useState } from 'react'
import { TiLocation } from 'react-icons/ti';
import { GiRotaryPhone } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../../../Media/Images/logo_ingecables.png";
import "./HeaderMenu.css";
import { usePage } from '../../../../Tools/Hooks/PageContext';

import { AiOutlineMail } from 'react-icons/ai';

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

const HeaderMenu = () => {
    const { currentPage } = usePage();
    const [activeContact, setActiveContact] = useState(false)
    const [responsiveWidth, setResponsiveWidth] = useState("20%")
    const [activeMenu, setActiveMenu] = useState("d-responsive")
    const classStyle = " d-flex justify-content-center align-items-center text-decoration-none text-center h-100 p-0 "
    const linkActive = " link-active "
    const linkInactive = " link-inactive "
    const optionInactive = " option-inactive-page h-100 "
    const optionActive = " option-active-page h-100 "

    const menuButtonsData = [
        {endpoint : "/", titleButton: "Inicio"},
        {endpoint : "/mission", titleButton: "¿Quiénes somos?"},
        {endpoint : "/catalogo", titleButton: "Catálogo"},
        {endpoint : "/products", titleButton: "Productos"},
    ]
    
    const contactData = [
        {contactIcon : <AiOutlineMail />, contactValue: "ventas@ingecables.com"},
        {contactIcon : <AiOutlineMail />, contactValue: "ingecables@hotmail.com"},
        {contactIcon : <GiRotaryPhone />, contactValue: "+593 99 9667904"},
        {contactIcon : <GiRotaryPhone />, contactValue: "+593 93 9809325"},
    ]
    
    function handleContact(active) {
        setActiveContact(active)
    }

    function handleMenu(style) {
        setActiveMenu(style)
        style !== "d-mob-responsive" ? setResponsiveWidth("20%") : setResponsiveWidth("80%")
    }

  return (
    <>
        {
            activeContact ? (<ModalPanel handleContact={handleContact} contactData={contactData} />) : (<></>)
        }
        <nav className='logo-container d-flex flex-div'>
                <div className="w-70 d-flex justify-content-center p-2">
                    <Link to="/" className='d-flex justify-content-center align-items-center w-100 m-0 p-2'>
                        <img className="inge-logo" src={logo} height="80%" alt=""/>
                    </Link>
                </div>
                <div className="d-flex text-center justify-content-center align-items-center fw-bold" style={{ width: "50% !important", fontPosition: "14px" }}>
                    <div className="bg-light shadow shadow-2 border border-1 px-2 py-1">
                        <div className=' d-flex justify-content-around align-items-center'>
                            <div className=" p-1 d-flex justify-content-center align-items-center">
                                <GiRotaryPhone className=''/>
                            </div>
                            <div className="d-flex justify-content-center align-items-center fs-6">
                                +593 2 2257589
                            </div>
                        </div>
                        <div className="bg-primary p-1 d-flex justify-content-around align-items-center text-light rounded">
                            <div className='fs-6'>
                                Quito, Ecuador
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <FaGlobeAmericas />
                            </div>
                        </div>
                    </div>
            </div >
        </nav>
        <div className='menu-container d-flex'>
            <div className='w-100 d-flex h-100 '>
                <div onClick={()=> handleMenu("d-mob-responsive")} className="burger-menu w-100 align-items-center p-1">
                    <RxHamburgerMenu className='w-100 p-2 h-90 rounded bg-light shadow shadow-strong-2' style={{ fontSize: "2.5em", border: "darkgray 1px solid" }}/>
                </div>
                <div className={"w-100 align-items-center justify-content-around " + activeMenu}>
                   {
                    menuButtonsData.map( (buttonData, index) =>
                        <section key={index} className={ currentPage === buttonData.endpoint ? optionActive : optionInactive } style={{ width: responsiveWidth }}>
                            <Link onClick={()=> handleMenu("d-responsive")} className = {classStyle + (currentPage === buttonData.endpoint ? linkActive : linkInactive)} to = { buttonData.endpoint } relative="path">
                                {buttonData.titleButton}
                            </Link>
                        </section>)
                    }
                    
                    <section className= { optionInactive }  style={{ width: responsiveWidth }}>
                        <div onClick={()=>{handleContact(true)}} className = { classStyle + linkInactive } style={{ cursor: "pointer" }}>
                            ¡Contáctenos!
                        </div>
                    </section>
                    <section className= { "close-button option-inactive-page h-50 rounded mb-3 bg-danger " }  style={{ width: "80%", boxShadow: "rgba(10,10,10,.8) 3px 3px 10px" }}>
                        <div onClick={()=>{handleMenu("d-responsive")}} className = { classStyle + " fs-5 text-light" } style={{ cursor: "pointer" }}>
                            CERRAR
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderMenu