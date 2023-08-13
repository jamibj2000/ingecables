import React, { useEffect } from 'react'
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';

const Catalogue = () => {
  const pathname = ActivePage();
  const { currentPage, setCurrentPage } = usePage();

    useEffect(() => {
      // console.log("pathname: "+ pathname);
      setCurrentPage(pathname)
    }, [pathname])
  const pdfPath = "./PDF/CATALOGUE.pdf"
  const fileName = "Catálogo"
  function downloadFromUrl() {
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return (
    <>
      <div className="w-100 d-flex justify-content-center fs-3 my-3  bg-primary text-light rounded p-2"><div>CATÁLOGO</div></div>
        <div className="row m-0">            
          <div className="col-1"></div>
          <div className="col-10 bg-primary">
            <iframe
              title="Visor PDF"
              style={{ width: '100%', height: '550px' }}
              src={pdfPath}
            />
            <div className="w-100 d-flex justify-content-center fs-3 my-3 bg-primary text-light rounded p-2">
              <span className="w-100 bg-dark text-center rounded p-2" onClick={downloadFromUrl} style={{ cursor: "pointer" }}>OBTENER CATÁLOGO</span>
            </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  )
}

export default Catalogue