import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header.jsx';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
          {/* <Route path='/login' element={<Login />}></Route> */}
          {/* <Route path='/resources' element={<Resources />}></Route> */}
          {/* <Route path='/contact' element={<Contact />}></Route> */}
          {/* <Route path='/about' element={<About />}></Route> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;