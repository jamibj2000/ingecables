import axios from "axios";
import ProductsSectioned from "../Components/Containers/Blocks/Products/ProductsSectioned";
import React, { useEffect, useState } from 'react'
import Loader from "../Tools/Loader";
import data from './Data/Tables';
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";
import obj from "./ProductConstructor";
const API_URL = "https://jamjack.online/ingecables"


const Products = () => {
    const { rutaesp } = useParams()
    const navigate = useNavigate()
    const [productsData, setProductsData] = useState([])
    const [activeProduct, setActiveProduct] = useState(false)
    const [productCode, setProductCode] = useState("")
    const [productTitle, setProductTitle] = useState("")
    const [productImage, setProductImage] = useState("img/cadenas-acero.webp")

    useEffect(() => {
        axios.get(`${API_URL}/${rutaesp}.php`)
        .then( data => {
            console.log(data.data)
            setProductsData(data.data)
        })
    }, [rutaesp])

    function showProductCard(card, active = true) {
        setProductCode(card.code)
        setProductTitle(card.title)
        setProductImage(card.image)
        setActiveProduct(active)
    }

    return (<>
        {
            activeProduct && (
                <div onMouseDown={(e)=>{
                    return e.target.className === "panel" ? showProductCard("", false) : ""
                }
            }  className="panel">
                    <section className="info-products-section d-flex flex-column p-3 rounded shadow shadow-4 justify-content-center align-items-center bg-light">
                        
                        <span className="bg-sky row w-100 my-2 p-1 rounded justify-content-center align-items-center" style={{ maxHeight: "500px"}}>
                            <span className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center overflow-hidden">
                                <img 
                                    src={`${ API_URL }/${productImage}`}
                                    className="rounded border border-4 border-light"
                                    alt="" 
                                    width="100%" 
                                    height="200"/>
                            </span>
                            <span className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center overflow-hidden" style={{ height: "250px" }}>
                                <div className=" border-light rounded overflow-auto text-light p-2" style={{ height: "200px" }}>
                                    <span className="" style={{ fontSize: "2rem", fontWeight: "bold" }}>
                                        {productTitle !== "" ? productTitle : "NO DATA"}
                                    </span>
                                    <hr className="border border-light p-2 bg-light"/>                        
                                </div>
                            </span>
                        </span>
                        <span className="p-2 d-flex w-100 bg-light justify-content-center border border-1 rounded overflow-auto" style={{ top: '0', height: "20rem" }}>
                            {obj[productCode] ? obj[productCode] : "NO DATA"}
                        </span>
                        {/* <span dangerouslySetInnerHTML={{__html: data[productCode]?.body}} className="p-2 d-flex w-100 bg-light justify-content-center border border-1 rounded overflow-auto" style={{ top: '0', height: "20rem" }}>
                        </span> */}
                        <button style={{ boxShadow: "rgba(0, 0, 0, .5) 3px 3px 10px" }} className="btn btn-danger rounded w-50 mt-2" onClick={()=> showProductCard("", false)}>CERRAR</button>
                    </section>
                </div>
            )
        }
        <ProductsSectioned>
            <div className='rounded justify-content-center w-100 bg-secondary row'>
            {   productsData.length <= 0 ? <Loader /> :
                productsData.map( (card, index) => (
                    <div key={index} className={`bg-light rounded p-2 col-md-2 col-sm-3 m-1 shadow shadow-3`} >
                        <section className='card-image-container'>
                            <img draggable="false" src = {`${API_URL}/${card.image}`} className="card-image" alt="Carta 1" />
                        </section>
                        <div onClick={() => showProductCard(card)} className='card-button' style={{ bottom: "0" }}>
                            {card.buttonTitle}
                        </div>
                    </div>
                ))
            }
            </div>
            <span className='w-100 p-3 rounded d-flex justify-content-center'>
                <button onClick={()=> navigate(-1)} className='w-50 btn p-3 btn-light shadow shadow-2' style={{ marginLeft: "1.2rem", marginTop: "1rem" }}> ATRÁS </button>
            </span>
        </ProductsSectioned>
    </>)
}

export default Products