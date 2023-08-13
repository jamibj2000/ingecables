import React from 'react'
import "./Service.css";
const Services = () => {
  const imgRoute = "ingecables/img/"
  const ingecablesImage = [
    {
      service: "Productos certificados",
      imgService: "certificado.png"
    },
    {
      service: "Importación directa",
      imgService: "importa.png"
    },
    {
      service: "Asesoría",
      imgService: "asesoria.png"
    },
    {
      service: "Envíos",
      imgService: "envios.jpg"
    },
    {
      service: "Inspección de equipos de izaje",
      imgService: "izaje.png"
    }
  ]
  return (
    <>
      <div className="service-container container-fluid d-flex align-items-center justify-content-around w-100 bg-light rounded-3 py-4">
        {
          ingecablesImage.map(
            (serviceData, index) => (
              <span key={index} className='d-flex flex-column justify-content-center align-items-center'>
                <div className="service-icon-container">
                  {/* <img width={100} className="service-icon" src="https://images.ygoprodeck.com/images/cards/6983839.jpg" alt=""/> */}
                  <img className="service-icon" src={ imgRoute + serviceData.imgService } alt=""/>
                </div>
                <span className="service-title">
                  <p>{serviceData.service}</p>
                </span>
              </span>
            )
          )
        }
      </div>
    </>
  )
}

export default Services