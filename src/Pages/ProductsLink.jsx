import React, { useEffect, useState } from 'react'
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';

import "../Styles/main.css";
import { Link } from 'react-router-dom';
import ProductsSectioned from '../Components/Containers/Blocks/Products/ProductsSectioned';
import ProductsCategory from './Data/Categories.json';
import Swal from 'sweetalert2';

const _URL_ = "ingecables/"

const ProductsLink = () => {
  const pathname = ActivePage();
  const { setCurrentPage } = usePage();

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

  function handleOnConstruction() {
    Swal.fire({
      title: '<strong>¡Fallas en el sistema!</strong>',
      icon: 'warning',
      html:
        '<hr className="border border-dark"/> Disculpenos las molestias, la conexión con el servidor de datos <b>www.jamjack.online</b> se encuentra fuera de servicio temporalmente, ' +
        'le recomendamos esperar a que la conexión se reestablezca, cualquier otro inconveniente por favor comunicarse a través del correo electrónico: <b>isabellemusic1@gmail.com</b>.</br>' +
        'Le recordamos que el horario de atención es de <b class="bg-danger px-1 text-light">Lunes a Viernes</b> se limita entre las <b> 8:00 am a 5:00 pm</b></br>'
        + '<br><b>I.A Isabelle:</b>  Le agradeceré mucho la espera <br><b className="text-purple">¡Que tenga un bonito día!</b></br>    <hr className="border border-dark "/>',
      showCloseButton: true,
      confirmButtonText: '<span className="text-sunlight">¡Gracias!</span>'
    })
    // Swal.fire({
    //   title: '<strong>¡Fallas en el sistema!</strong>',
    //   icon: 'warning',
    //   html:
    //     '<hr className="border border-dark"/> Disculpenos las molestias, la conexión con el servidor de datos <b>www.jamjack.online</b> se encuentra fuera de servicio, ' +
    //     'le recomendamos esperar a que la conexión se reestablezca, si la falla persiste puede comuncarse con nuestra administradora del servicio por medio del correo electrónico: <b>isabellemusic1@gmail.com</b>.\n' 
    //     + '<br> Le agradeceremos mucho la espera <br><b className="text-purple">¡Que tenga un bonito día!</b></br>    <hr className="border border-dark "/>',
    //   showCloseButton: true,
    //   confirmButtonText:
    //     '<span className="text-sunlight">¡Gracias!</span>'
    // })
  }

  return (
    <>
        {
        <ProductsSectioned>
        {
            ProductsCategory.map( (card, index) => (
                <div key={index}  className={`bg-light rounded p-2 col-md-2 col-sm-3 m-1 shadow shadow-3`} >
                    <section className='card-image-container'>
                        <img draggable="false" src = {`${_URL_}${card.image}`} className="card-image" alt="Carta 1" />
                    </section>
                    <button onClick={handleOnConstruction} className='btn btn-primary text-center card-button'>
                      {card.name}
                    </button>
                    {/* <Link to={`/products${card.endpoint}`} className='btn btn-primary text-center card-button'>
                      {card.name}
                    </Link> */}
                </div>
            ) )
        }
        </ProductsSectioned>}
    </>
  )
}

export default ProductsLink