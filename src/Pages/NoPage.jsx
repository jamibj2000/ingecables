import { useEffect } from 'react';
import ActivePage from '../Tools/Hooks/ActivePage';
import { usePage } from '../Tools/Hooks/PageContext';

const NoPage = () => {
  const pathname = ActivePage();
  const { currentPage, setCurrentPage } = usePage();

    useEffect(() => {
      // console.log("pathname: "+ pathname);
      setCurrentPage(pathname)
    }, [pathname])


    return <h1>Página no encontrada: Error 404</h1>;
};
  
export default NoPage;