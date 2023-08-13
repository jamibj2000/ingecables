import React from 'react'
import tecles from "./Images/logohombre.jpg"
import Swal from 'sweetalert2'
const Intro = () => {
    function handleContact() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error: 92% en construcción!',
            footer: ""
            }
        )
    }
  return (
    <>
        <div className="p-3 w-100 container-fluid bg-light rounded">
            <div className="container-fluid border w-100 d-flex justify-content-center shadow-lg shadow p-3 rounded">
                <div>
                    <img src="img/logo_ingecables.png" alt="" width="250px"/>
                </div>
            </div>
            <div className="form-control my-2">
                <div className="rounded">
                    <span className="p-2 d-flex my-2 justify-content-center w-100">
                        Bienvenidos a Ingecables.
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
                    </span>
                    <span className="p-2 d-flex my-2 justify-content-center w-100">
                        Ofrecemos productos a distribuidores en industrias que van desde la pesca comercial, el transporte de carga hasta la agricultura y la construcción. Nuestra base de clientes incluye fabricantes de cables, distribuidores regionales, proveedores de suministros específicos de la industria y fabricantes de equipos originales (OEM).
                    </span>
                </div>
                <div className="rounded overflow-hidden d-flex justify-content-center bg-light">
                    <img src={tecles} width="50%" alt=""/>
                </div>
            </div>
            <div className="p-3 bg-primary rounded text-light mt-4 d-flex align-items-center flex-column" >
                <span className="fw-bold fs-3 rounded shadow text-center shadow-lg py-2 px-4">¿Busca productos de calidad?</span>
                <span onClick={handleContact} className="fs-4 bg-warning text-dark rounded shadow shadow-lg py-2 px-4 mt-2" style={{ cursor:"pointer" }} data-details="contact">¡CONTÁCTENOS!</span>
            </div>
        </div>
    </>
  )
}

export default Intro