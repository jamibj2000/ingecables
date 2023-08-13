import axios from "axios";
import ProductsSectioned from "../Components/Containers/Blocks/Products/ProductsSectioned";
import React, { useEffect, useState } from 'react'
import Loader from "../Tools/Loader";
import data from './Data/Tables';
import { useParams, useNavigate } from "react-router-dom";
const API_URL = "https://jamjack.online/ingecables"

const Products = () => {
    const { rutaesp } = useParams()
    const navigate = useNavigate()
    const [productsData, setProductsData] = useState([])
    const [activeProduct, setActiveProduct] = useState(false)
    const [productCode, setProductCode] = useState("")

    useEffect(() => {
        axios.get(`${API_URL}/${rutaesp}.php`)
        .then( data => {
            console.log(data.data);
            setProductsData(data.data)
        })
    }, [rutaesp])

    function showProductCard(code, active = true) {
        setProductCode(code)
        setActiveProduct(active)
    }

    return (<>
        {
            activeProduct && (
                <div onMouseDown={(e)=>{
                    return e.target.className === "panel" ? showProductCard("", false) : ""
                }
            }  className="panel">
                    <section className="d-flex flex-column p-3 rounded shadow shadow-4 justify-content-center align-items-center w-60 bg-danger">
                        <span className="d-flex w-100 bg-light justify-content-center align-items-center rounded">
                            <h1>
                                CARDA-INCCIO
                            </h1>
                        </span>
                        <span className="bg-dark row w-100 my-2 p-1 rounded justify-content-center align-items-center" style={{ maxHeight: "500px"}}>
                            <span className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center overflow-hidden">
                                <img src={`${ API_URL }/img/cadenas-acero.webp`} className="rounded" alt="" width="100%" height="200"/>
                            </span>
                            <span className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center overflow-hidden" style={{ height: "250px" }}>
                                <div className="border border-2 rounded overflow-auto text-light p-2" style={{ height: "200px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus distinctio error quae reiciendis, repellat animi illo natus optio nisi quo expedita possimus sequi dignissimos laboriosam unde fugit fugiat odio!
                                Nostrum deleniti mollitia assumenda, veniam quis facere provident vel illum recusandae ipsa? Eveniet totam quia eos ullam, nulla officia fuga corrupti vero vitae suscipit aliquid ex. Incidunt hic rerum mollitia?
                                At magnam modi laborum natus assumenda consequatur eos quidem quam voluptas adipisci sunt nisi nemo quibusdam minima impedit nulla cumque facere sapiente error, aliquam suscipit id doloribus minus magni. Consectetur.</div>
                            </span>
                            <span className=" text-light d-flex">
                                { data[productCode]?.body ? data[productCode].body : ""}
                            </span>
                        </span>
                        <button className="shadow shadow-2 btn btn-danger rounded w-25 mt-2" onClick={()=> showProductCard("", false)}>CERRAR</button>
                    </section>
                </div>
            )
        }
        <ProductsSectioned>
            <div className='rounded w-100 bg-secondary row'>
            {   productsData.length <= 0 ? <Loader /> :
                productsData.map( (card, index) => (
                    <div key={index} className={`bg-light rounded p-2 col-md-2 col-sm-3 m-1 shadow shadow-3`} >
                        <section className='card-image-container'>
                            <img draggable="false" src = {`${API_URL}/${card.image}`} className="card-image" alt="Carta 1" />
                        </section>
                        <div onClick={() => showProductCard(card.code)} className='card-button' style={{ bottom: "0" }}>
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