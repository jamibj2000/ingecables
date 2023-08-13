import React, { useEffect, useState } from 'react'
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';

import "../Styles/main.css";
import { Link } from 'react-router-dom';
import ProductsSectioned from '../Components/Containers/Blocks/Products/ProductsSectioned';
import ProductsCategory from './Data/Categories.json';

const _URL_ = "ingecables/"

const ProductsLink = () => {
  const pathname = ActivePage();
  const { setCurrentPage } = usePage();

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

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
                    <Link to={`/products${card.endpoint}`} className='btn btn-primary text-center card-button'>
                      {card.name}
                    </Link>
                </div>
            ) )
        }
        </ProductsSectioned>}
    </>
  )
}

export default ProductsLink