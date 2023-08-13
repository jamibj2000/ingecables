import React, { useEffect } from 'react'
import ferreteria from "./Images/images/ferreteria.webp";
import { Link } from 'react-router-dom';

const ProductsCategory = () => {
    
  return (
    <>    
        <div className="card cards-container bg-secondary m-auto d-flex mt-4 shadow-lg shadow">
            <div className="container-fluid p-3 bg-light rounded-3 d-flex flex-column align-items-center">
                <div className="w-100 d-flex justify-content-center fs-3 my-3 bg-primary text-light rounded p-2"><div>PRODUCTOS</div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div className="p-1 border border-1 bg-light rounded" style={{ boxShadow: "2px 2px 12px rgba(0,0,0, .5)" }}>
                                <div className="card overflow-hidden">
                                    <img src={ferreteria} style={{ width:"400px !important" }} className="card-img-top" alt="..."/>
                                        <div className="card-body text-center">
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
        </div>
    </>
  )
}

export default ProductsCategory