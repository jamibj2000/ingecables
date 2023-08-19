import React, { useState } from 'react'
import { Carrousel, Services, Introduction, Products } from "../Components/Containers/Blocks/IndexPage/IndexPage";
import { useEffect } from 'react';
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';
import Carouselle from '../Components/Containers/Blocks/IndexPage/PageSections/Carouselle';

const MainPage = () => {
  const pathname = ActivePage();
  const { currentPage, setCurrentPage } = usePage();

    useEffect(() => {
      // console.log("pathname: "+ pathname);
      setCurrentPage(pathname)
    }, [pathname])

  return (
    <>
        <Carouselle />
        <hr className="bg-white"/>
        {/* <Services />
        <hr className="bg-white"/> */}
        <Introduction />
        <hr className="bg-white"/>
        <Products />
        <hr className="bg-white"/>
    </>
  )
}

export default MainPage