import React, { useEffect, useState } from 'react'
import "./mission.css";
import LogoH from "../Media/Images/logohombre.jpg";
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';
import Swal from 'sweetalert2';

const cardsContent = {
  mission: {
  description: 
    `Proveemos soluciones de Ingenieria  para la industria apoyada en la distribución de equipos e insumos, trabajando en conjunto con los departamentos de proyectos, ingeniería y mantenimiento.
    Gracias a nuestro acompañamiento, ingeniería y soporte técnico representamos una opción de excelente relación costo beneficio y alta rentabilidad para nuestros usuarios:`,
  relativeData:
    `Manejo de Materiales a Granel,
    Rodamientos y Afines,
    Elementos para manejo de carga,
    Equipo Especializado`
  },
  vision: {
  description: 
    `Posicionar Ingecables S.A como proveedor principal de soluciones industriales que, en conjunto con nuestras marcas representadas, seamos reconocidos por nuestro cumplimiento, confiabilidad, soporte técnico y calidad, condición que se verá reflejada en un aumento de nuestra participación en el mercado.`,
  relativeData:
    ``
  },
  story: {
  description: 
    `Ingecables S.A nace de la identificación de  necesidades industriales insatisfechas, donde los usuarios se ven en situaciones que representan sobre costos para su operación en aspectos como largos tiempos de entrega, respaldo técnico,  elevados costos de mantenimiento, entre otros.
    Es por esto que los socios de Ingecables S.A deciden aportar su conocimiento técnico, financiero y comercial en la consecución de soluciones que constituyan mejoras en los procesos productivos con valor agregado, al mismo tiempo que mejoren las condiciones de vida para sus empleados y familias.`,
  relativeData:
    ``
  },
}

const Mission = () => {
  const pathname = ActivePage();
  const { currentPage, setCurrentPage } = usePage();
  const [activeValues, setActiveValues] = useState(false)
  const [content, setContent] = useState("")

    useEffect(() => {
      setCurrentPage(pathname)
    }, [pathname])
    
   
    function showValuesCard(code, active = true) {
      setContent(code)
      setActiveValues(active)
    }

  return (
    <>
    {activeValues && (
      <div onMouseDown={(e)=>{
              return e.target.className === "panel" ? showValuesCard("", false) : ""
          }
      }  className="panel">
              <section className="info-section d-flex flex-column p-3 rounded shadow shadow-4 justify-content-center align-items-center  h-60 bg-light">
                  <span className="bg-primary row h-75 w-100 my-2 p-1 rounded justify-content-center align-items-center" style={{ maxHeight: "500px"}}>
                    <div className="fs-4 border border-2 h-100 rounded overflow-auto text-light p-3" style={{ height: "200px" }}>
                      {cardsContent[content].description}
                      <span className='d-flex justofy-content-center align-items-center flex-column'>
                        {cardsContent[content].relativeData}
                      </span>
                    </div>
                  </span>
                  <button className="shadow shadow-2 btn btn-warning rounded w-25 mt-2" onClick={()=> showValuesCard("", false)}>CERRAR</button>
              </section>
          </div>)}
        <div className="row profile-card-container justify-content-around bg-light p-1 m-0">
          <div className="col-md-3 col-sm-12 profile-card my-5 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>MISIÓN</h1>
              <p className='w-100 bg-warning p-2 rounded'>Proveemos soluciones de Ingenieria  para la industria apoyada en la distribución de equipos e insumos, trabajando en conjunto con los departamentos de proyectos, ingeniería y mantenimiento.</p>
              <button onClick={()=> showValuesCard("mission")} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
          <div className="col-md-3 col-sm-12 profile-card my-5 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>VISIÓN</h1>
              <p className='w-100 bg-warning p-2 rounded'>Posicionar Ingecables S.A como proveedor principal de soluciones industriales que, en conjunto con nuestras marcas representadas, seamos reconocidos por nuestro cumplimiento, confiabilidad.</p>
              <button onClick={()=> showValuesCard("vision")} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
          <div className="col-md-3 col-sm-12 profile-card my-5 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>HISTORIA</h1>
              <p className='w-100 bg-warning p-2 rounded'>Ingecables S.A nace de la identificación de  necesidades industriales insatisfechas, donde los usuarios se ven en situaciones que representan sobre costos para su operación en aspectos como largos tiempos de entrega.</p>
              <button onClick={()=> showValuesCard("story")} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
        </div>
    </>
  )
}

export default Mission