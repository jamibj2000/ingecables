import React from 'react'

const ProductsSectioned = ({children}) => {
  return (
    <>
    <section className='row m-0'>
        <div className="products-sectioned-container container-fluid">
            <div className="row w-100 justify-content-center" >
                {children}
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductsSectioned