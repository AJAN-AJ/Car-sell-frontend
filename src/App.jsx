import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CarDetails from './pages/CarDetails.jsx';
import HowToBuy from './pages/HowToBuy.jsx';
import Cars from './pages/Cars.jsx'
import BackToTop from './components/BackToTop.jsx';

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/cars/");
  console.log(import.meta.env.VITE_API_URL);


  return(
    <>
      {!hideNavbar && <Navbar/>}

       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cars" element={<Cars />}/>
        <Route path="/cars/:id" element={<CarDetails />}/>
        <Route path="/how" element={<HowToBuy />}/>
        <Route path="/contact" element={<div>Contact</div>}/>
      </Routes>
  
    </>
  )

}

export default function App(){
  return(
    <BrowserRouter>
      <BackToTop/>
      <Layout/> 
    </BrowserRouter>
  );
}

