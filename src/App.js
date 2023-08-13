import logo from './logo.svg';
import './App.css';
import Card from './Components/Containers/Boxes/Card';
import MainBlock from './Components/Containers/Blocks/MainBlock';
import API from "./Tools/Axios.js";
import PageRouter from './Pages/PageRouter';
import Menu from './Test/Menu';


function App() {
  return (
    <>
    {/* <DataProvider>
      <div>
        <DataImporter />
        <DataTable />
      </div>
    </DataProvider> */}

      <PageRouter></PageRouter>
      {/* <MainBlock /> */}
    </>
  );
}

export default App;
