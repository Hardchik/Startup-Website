import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header.jsx';
// import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<><Header /><Home /><Footer/></>}></Route>
          {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
          <Route path='/signin' element={<><Header /><Login /></>}></Route>
          {/* <Route path='/resources' element={<Resources />}></Route> */}
          <Route path='/contact' element={<><Header /><Contact /><Footer/></>}></Route>
          <Route path='/about' element={<><Header /><About /><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;