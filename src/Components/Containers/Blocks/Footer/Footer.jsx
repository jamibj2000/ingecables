import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
        <div className="col-12">
            <section className='row p-2 bg-light rounded'>
                <div className="col-md-4 col-sm-12 bg-light p-2 d-flex justify-content-center align-content-center"  style={{ borderRight: "solid 1px rgba(0, 0, 20, 0.2)" }}>
                    <iframe className="border border-5 border-warning" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8000013026585!2d-78.49896698584743!3d-0.17362513547184993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a92a3884763%3A0xd5a25b0523466c99!2sIngecables!5e0!3m2!1ses-419!2sco!4v1670336201010!5m2!1ses-419!2sco" width="400" height="250" style={{ border:"0", maxWidth:"100%" }} allowFullScreen="" loading="lazy" title='ingecables-point'/>
                </div>
                <div className="col-md-4 col-sm-12 align-items-center bg-light" style={{ borderRight: "solid 1px rgba(0, 0, 20, 0.2)" }}>
                    <span className="d-flex justify-content-center align-items-center w-100  flex-column h-100 p-2">
                        <span className='w-100 d-flex justify-content-center shadow shadow-2 mb-0 '>
                            <h3 className='text-dark w-100 text-center rounded p-3 mb-0 border border-bottom'>Ingecables S.A.</h3>
                        </span>
                        <hr className='border border-2 border-bottom border-secondary w-100' />
                        <span className='d-flex justify-content-around bg-light text-dark w-100 p-3 shadow border border-bottom shadow-3 rounded '>
                            <BsTwitter className='border border-bottom border-2 shadow shadow-1 rounded p-1 fs-1'/>
                            <BsInstagram className='border border-bottom border-2 shadow shadow-1 rounded p-1 fs-1'/>
                            <BsFacebook className='border border-bottom border-2 shadow shadow-1 rounded p-1 fs-1'/>
                        </span>
                    </span>
                </div>
                <div className="col-md-4 col-sm-12 bg-light" >
                    <div className="d-flex justify-content-center align-items-center flex-column h-100 w-100 ">
                        <span className='shadow shadow-2 d-flex justify-content-center align-items-start flex-column h-100 w-75 text-light py-3 px-3'>

                            <span className='border d-flex justify-content-center  border-bottom rounded w-100 p-2 bg-light text-dark my-3 shadow shadow-2 '>
                                <span style={{ minWidth: "40%" }} className='  d-flex justify-content-around align-items-center'>
                                    <FaGlobeAmericas className='m-1'/>
                                    Quito, Ecuador
                                </span>
                            </span>
                            <hr className='border border-dark m-1 w-100'/>
                            <span className='border border-bottom rounded w-100 p-2 bg-light text-light my-2 shadow shadow-2'>
                                <span className='d-flex justify-content-start px-3 align-items-center bg-orange'>
                                    <AiOutlineMail />. ventas@ingecables.com
                                </span>
                                <span  className='d-flex justify-content-start px-3 align-items-center bg-orange'>
                                    <AiOutlineMail />. ingecables@hotmail.com
                                </span>
                            </span>
                            <span className='border border-bottom rounded w-100 p-2 text-light my-2 shadow shadow-2 bg-light'>
                                <span className='d-flex justify-content-start px-3 align-items-center bg-orange'>
                                    <GiRotaryPhone />. +593 2 2257589
                                </span>
                                <span className='d-flex justify-content-start px-3 align-items-center bg-orange'>
                                    <GiRotaryPhone />. +593 2 2244391
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            <section className="container-fluid mt-3 bg-primary text-light p-3 rounded">
                    Ingecables S.A © 2023 - Desarrollado por:
                . <span className='text-warning'>
                    Zultech
                </span>
                
            </section>
        </div>
    </>
  )
}

export default Footer