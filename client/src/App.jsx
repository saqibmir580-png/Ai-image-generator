import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredix from "./pages/BuyCredix";
import Footer from "./component/Footer";
const App = () => {

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredix/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
};

export default App;
