import React from 'react'

const RowContainer = ({children, className, style}) => {
  return (
    <>
      <section style={style} className={`${className} row w-100 d-flex justify-content-center m-0`}>
          {children}
      </section>
    </>
  )
}

export default RowContainer