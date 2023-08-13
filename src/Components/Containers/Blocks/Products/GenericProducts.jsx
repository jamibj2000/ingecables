import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GenericProducts = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=1&limit=30")
        .then((response) =>{ 
            setCards(response)
        });
    }, [])
    
  return (
    <>
    </>
  )
}

export default GenericProducts