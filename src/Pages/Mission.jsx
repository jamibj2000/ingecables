import React, { useEffect } from 'react'
import "./mission.css";
import LogoH from "../Media/Images/logohombre.jpg";
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';
import Swal from 'sweetalert2';

const Mission = () => {
  const pathname = ActivePage();
  const { currentPage, setCurrentPage } = usePage();

    useEffect(() => {
      setCurrentPage(pathname)
    }, [pathname])
    
    function handleContact() {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: 90% en construcción!',
        footer: ""
        }
    )
    }

  return (
    <>
        <div className="profile-card-container row justify-content-around bg-light m-0">
          <div className="profile-card col-3 mx-3 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>MISIÓN</h1>
              <p className='w-100 bg-warning p-2 rounded'>Proveemos soluciones de Ingenieria  para la industria apoyada en la distribución de equipos e insumos, trabajando en conjunto con los departamentos de proyectos, ingeniería y mantenimiento.</p>
              <button onClick={handleContact} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
          <div className="profile-card col-3 mx-3 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>VISIÓN</h1>
              <p className='w-100 bg-warning p-2 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque, ipsum corrupti cum tempore dignissimos consequatur eum doloremque ut laboriosam numquam aliquam voluptatibus magnam nisi! Porro et quis vel eligendi.</p>
              <button onClick={handleContact} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
          <div className="profile-card col-3 mx-3 shadow shadow-lg">
              <div className="profile-circle">
                  <img src={LogoH} alt="" />
              </div>
              <h1 className='p-2 w-100 bg-primary rounded text-center text-light'>VALORES</h1>
              <p className='w-100 bg-warning p-2 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque, ipsum corrupti cum tempore dignissimos consequatur eum doloremque ut laboriosam numquam aliquam voluptatibus magnam nisi! Porro et quis vel eligendi.</p>
              <button onClick={handleContact} className='btn btn-primary rounded p-2 w-75 text-light'>
                VER MÁS
              </button>
          </div>
        </div>
    </>
  )
}

export default Mission