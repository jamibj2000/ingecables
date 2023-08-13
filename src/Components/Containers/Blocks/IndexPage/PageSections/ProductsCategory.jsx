import React, { useEffect } from 'react'
import ferreteria from "./Images/images/ferreteria.webp";
import { Link } from 'react-router-dom';

const ProductsCategory = () => {
    
  return (
    <>
        <div className="card cards-container bg-secondary m-auto d-flex mt-4 shadow-lg shadow">
            <div className="container-fluid p-3 bg-light rounded-3 d-flex flex-column align-items-center">
                <div className="w-100 p-3 bg-light rounded text-light">
                </div>
                <div className="w-100 d-flex justify-content-center fs-3 my-3 bg-primary text-light rounded p-2"><div>PRODUCTOS</div>
                </div>
                <div className="row gy-lg-5 justify-content-center">
                    <div className="col-sm-12 col-lg-8">
                        <div className="p-1 border border-secondary bg-light rounded custom-card">
                            <div className="card overflow-hidden">
                                <img src={ferreteria} style={{ width:"400px !important" }} className="card-img-top" alt="..."/>
                                    <div className="card-body text-center">
                                        {/* <h5 className="card-title fs-6 text-center"></h5> */}
                                        <hr className="bg-dark my-1"/>
                                        <Link to="/products" className="btn btn-primary w-100">
                                            CATEGORÍAS
                                        </Link>
                                        <hr className="bg-dark my-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsCategory