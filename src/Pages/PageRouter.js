import React, { useEffect, useState } from 'react'
import WhatsappButton from '../Components/Inputs/WhatsappButton'
import MainPage from './MainPage'
import Catalogue from './Catalogue'
import NoPage from './NoPage'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import HeaderMenu from '../Components/Containers/Blocks/HeaderMenu/HeaderMenu'
import RowContainer from '../Components/Containers/Blocks/RowContainer/RowContainer'
import Footer from '../Components/Containers/Blocks/Footer/Footer'
import Mission from './Mission'
import { PageProvider } from '../Tools/Hooks/PageContext'
import Categories from '../Components/Containers/Blocks/IndexPage/PageSections/Categories'
import ProductsLink from './ProductsLink'
import Products from './Products'

const PageRouter = () => {
  return (
    <>
      <PageProvider>
        <RowContainer className="my-2 position-sticky bg-light shadow shadow-1" style={{ top: "0", zIndex: "9" }}>
            <HeaderMenu />
        </RowContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalogo" element={<Catalogue />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/products" element={<ProductsLink />} />
            <Route path="/products/:rutaesp" element={<Products />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        <WhatsappButton />
        <RowContainer className="mt-3 p-2 bg-dark" >
          <Footer />
        </RowContainer>
      </PageProvider>

    </>
  )
}

export default PageRouter