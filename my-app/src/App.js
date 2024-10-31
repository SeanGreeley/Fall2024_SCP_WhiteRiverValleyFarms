//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './module/Home';
import OurProduct from './module/Our_product';
import JoinUs from './module/Join_us';
import WhatIsACSA from './module/What_is_CSA';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/product' element={<OurProduct />}/>
        <Route path='/join' element={<JoinUs />}/>
        <Route path='/CSA' element={<WhatIsACSA />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


