import * as React  from 'react';
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChakraProvider, Img } from '@chakra-ui/react';
import Header from './components/Header.jsx';
import Resources from './pages/Resources';
import About from './pages/About';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard';
import Preloader from './Assets/D.mp4';
import Aa from './Assets/Dlogo.png';
import './App.css'
import { ThreeCircles } from "react-loader-spinner";


function App() {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <> 
    {loading ? (
        // <video className='loader' src={Preloader}  />
        // <img  className='loader' src={Aa} />
        
        // />
        <div className="placeLoader">
        <ThreeCircles
        backgroundColor='black'
          color='black'
          height="100"
          width="100"
          // color="white"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
      ):(
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Home /><Footer/></>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/signin' element={<><Header /><Login /></>}></Route>
          <Route path='/password' element={<><Header /><Login /></>}></Route>
          <Route path='/signup' element={<><Header /><SignUp /></>}></Route>
          <Route path='/resources' element={<><Header /><Resources /><Footer/></>}></Route>
          <Route path='/contact' element={<><Header /><Contact /><Footer/></>}></Route>
          <Route path='/about' element={<><Header /><About /><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>

    </ChakraProvider>
      )}
    </> 
  );
}

export default App;