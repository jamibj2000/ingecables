import React, { useEffect, useState } from 'react'
import productsCategory from "./products-category.json";
import Card from '../../Boxes/Card';
import axios, { Axios } from 'axios';
import "./Styles/main.css";
import ProductsSectioned from './ProductsSectioned';
// import API from '../../../../Tools/Axios';
const ProductsCategory = () => {

  const [cards, setCards] = useState([])
  const API_URL = "https://jamjack.online";

  useEffect(() => {  
    // const dataFetcher = new API(API_URL);
    // dataFetcher.getData() 
    // .then(data => {
    //   console.log(data);
    // });
    setCards(productsCategory)
  }, [])

  function handleClick(endpoint) {
    axios.get(`${API_URL}/${endpoint}.php`)
    .then((response) =>{ 
      console.log(response);
    });
  }

  return (
    <>
      <ProductsSectioned>
        {
          cards.map( (card, index) => (
            <div key={index} className='col-md-2 col-sm-3'>
              <Card
                className="card-container"
                handleClick={handleClick}
                endpoint={card.endpoint}
                imageSource={`${API_URL}/img${card.image}`}
                textButton={card.name}
              />
            </div>
          ))
        }
      </ProductsSectioned>
      <ProductsSectioned>
        {
          cards.map( (card, index) => (
            <div key={index} className='col-md-2 col-sm-3'>
              <Card
                className="card-container"
                handleClick={handleClick}
                endpoint={card.endpoint}
                imageSource={`${API_URL}/img${card.image}`}
                textButton={card.name}
              />
            </div>
          ))
        }
      </ProductsSectioned>
    </>
  )
}

export default ProductsCategory