import React, { useEffect, useState } from 'react'
import ProductsCategory from './Products/ProductsCategory'
import axios from 'axios'
import RowContainer from './RowContainer/RowContainer'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import WhatsappButton from '../../Inputs/WhatsappButton'
import { Link } from "react-router-dom";
import Footer from './Footer/Footer'

const MainBlock = () => {
  
   return (
    <>
      <section className='w-100'>
          <ProductsCategory/>
          <WhatsappButton />
      </section>
    </>
  )
}

export default MainBlock