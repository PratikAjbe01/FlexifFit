import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Exercise from './Pages/Exercise';
import Calculators from './Pages/Calculators';
import Services from './Pages/Services';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/calculator' element={<Calculators/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
