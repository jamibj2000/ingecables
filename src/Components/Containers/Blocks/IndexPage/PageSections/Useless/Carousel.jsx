import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Caroussel = () => {
  return (
    <>
        {/* <section className="container-fluid carousel-container py-1 ">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="custom-carousel-img" src="img/cable-de-acero.png" alt=""/>
      
              <div className="container">
                <div className="carousel-caption text-start">
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="custom-carousel-img" src="img/backgrounds/bg-colage.png" alt="" style={{ width: "90% !important" }}/>
              <div className="container">
                <div className="carousel-caption">
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="custom-carousel-img" src="html/img/tecles.png" alt=""/>
              <div className="container">
                <div className="carousel-caption text-end">
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="service-container container-fluid d-flex align-items-center justify-content-around w-100 bg-light rounded-3 py-4">
          
          <div className="service-icon-container">
            <img className="service-icon" src="img/certificado.png" alt=""/>
          </div>
          <span className="service-title">
            <p>Productos certificados</p>
          </span>

         

          <div className="service-icon-container">
            <img className="service-icon" src="img/imoprta.png" alt=""/>
          </div>
          <span className="service-title">
            <p>Importación directa</p>
          </span>

         

          <div className="service-icon-container">
            <img className="service-icon" src="img/asesoria.png" alt=""/>
          </div>
          <span className="service-title">
            <p>Asesoría</p>
          </span>
          

          <div className="service-icon-container">
            <img className="service-icon" src="img/envios.jpg" alt=""/>
          </div>
          <span className="service-title">
            <p>Envíos</p>
          </span>
          

          <div className="service-icon-container">
            <img className="service-icon" src="img/izaje.png" alt=""/>
          </div>
          <span className="service-title">
            <p>Inspección de equipos de izaje</p>
          </span>

        </div>
        <hr className="bg-white"/>
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
              <img src="img/logohombre.jpg" width="50%" alt=""/>
            </div>
          </div>
        </div>
        <div className="p-3 bg-primary rounded text-light mt-4 d-flex align-items-center flex-column" >
          <span className="fw-bold fs-3 rounded shadow text-center shadow-lg py-2 px-4">¿Busca productos de calidad?</span>
          <span className="fs-4 bg-warning text-dark rounded shadow shadow-lg py-2 px-4 mt-2" style={{ cursor:"pointer" }} data-details="contact">¡CONTÁCTENOS!</span>
        </div>
        <div className="card cards-container bg-secondary m-auto d-flex mt-4 shadow-lg shadow">
          <div className="container-fluid p-3 bg-light rounded-3 d-flex flex-column align-items-center">
            <div className="w-100 p-3 bg-light rounded text-light">
            </div>
            <div className="w-100 d-flex justify-content-center fs-3 my-3 bg-primary text-light rounded p-2"><div>PRODUCTOS</div></div>
            <div className="row gy-lg-5 justify-content-center">
              <div className="col-sm-12 col-lg-8">
                <div className="p-1 border border-secondary bg-light rounded custom-card">
                  <div className="card overflow-hidden">
                    <img src="img/products/productos de ferreteria herramientas manuales.webp" style={{ width:"400px !important"  }}className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h5 className="card-title fs-6 text-center">A</h5>
                      <hr className="bg-dark my-1"/>
                      <a href="html/products.html" className="btn btn-primary w-100">
                        CATEGORÍAS
                      </a>
                      <hr className="bg-dark my-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </section> */}
    </>
  )
}

export default Caroussel