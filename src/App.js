import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header.jsx';
// import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
          {/* <Route path='/login' element={<Login />}></Route> */}
          {/* <Route path='/resources' element={<Resources />}></Route> */}
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </ChakraProvider>
  )
}

export default App;