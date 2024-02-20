import './App.css'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/FooterRecetas'
import NavBarRecetas from './components/common/NavBarRecetas'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administracion from './components/pages/Administracion';
import Error404 from './components/pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>

<BrowserRouter>
    <NavBarRecetas></NavBarRecetas>
    <Routes >
    <Route exact path='/' element={<Inicio></Inicio>}></Route>    
    
    <Route exact path='administrador' element={<Administracion></Administracion>}></Route>
    
   
    <Route exact path='*' element={<Error404></Error404>}></Route>



    </Routes>
<Footer></Footer>
    </BrowserRouter>


    </>
  )
}

export default App
