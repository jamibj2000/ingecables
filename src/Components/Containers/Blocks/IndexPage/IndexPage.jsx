import React from 'react'
import Service from './PageSections/Services'
import Intro from './PageSections/Introduction'
import ProductsCategory from './PageSections/ProductsCategory'
import Carouselle from './PageSections/Carouselle'

const Carrousel = () => {
  return (
    <>
    <Carouselle />
    </>
  )
}

const Services = () => {
  return (
    <>
    <Service/>
    </>
  )
}

const Introduction = () => {
  return (
    <>
        <Intro/>
    </>
  )
}

const Products = () => {
  return (
    <>
        <ProductsCategory/>
    </>
  )
}

export { Carrousel, Services, Introduction, Products }