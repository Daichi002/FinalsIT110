import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import Register from './Register';
import Shop from './Shop';
import Home from './Home';
import Logr from './Logr';
import Featured from './Featured';
import About from './About';
import Updatedetails from './Updatedetails';


import Mercedes from './Mercedes';
import Mercedes_Sedan from './Mercedes_Sedan';
import Mercedes_Sport from './Mercedes_Sport';
import Mercedes_Coupe from './Mercedes_Coupe';
import Mercedes_GranCoupe from './Mercedes_GranCoupe';


import Bmw from './Bmw';
import Bmw_Sedan from './Bmw_Sedan';
import Bmw_Sport from './Bmw_Sport';
import Bmw_Coupe from './Bmw_Coupe';
import Bmw_GranCoupe from './Bmw_GranCoupe';

import Maserati from './Maserati';
import Maserati_Sedan from './Maserati_sedan';
import Maserati_Sport from './Maserati_sport';
import Maserati_Coupe from './Maserati_coupe';
import Maserati_GranCoupe from './Maserati_grancoupe';

import Porsche from './Porsche';
import Porsche_Sedan from './Porsche_sedan';
import Porsche_Sport from './Porsche_sport';
import Porsche_Coupe from './Porsche_coupe';
import Porsche_GranCoupe from './Porsche_grancoupe';

import Order from './Order';

import PrivateRoute from './PrivateRoute';

function App() {


  return (
    <div className='app'>
      <Router>
        
       <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/Logr" />} />         
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Logr" element={<Logr />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/About" element={<About />} />
          <Route path="/Updatedetails" element={<Updatedetails />} />
      
          {/*Mercedes*/}
          <Route path="/Mercedes" element={<Mercedes />} />
          <Route path="/Mercedessedan" element={<Mercedes_Sedan />} />
          <Route path="/Mercedessport" element={<Mercedes_Sport />} />
          <Route path="/Mercedescoupe" element={<Mercedes_Coupe />} />
          <Route path="/MercedesgranCoupe" element={<Mercedes_GranCoupe />} />
          {/*Bmw */}
          <Route path="/Bmw" element={<Bmw />} />
          <Route path="/Bmwsedan" element={<Bmw_Sedan />} />
          <Route path="/BmwSport" element={<Bmw_Sport />} />
          <Route path="/BmwCoupe" element={<Bmw_Coupe />} />
          <Route path="/BmwGranCoupe" element={<Bmw_GranCoupe />} />

          {/* Maserati */}
          <Route path="/Maserati" element={<Maserati />} />
          <Route path="/Maseratisedan" element={<Maserati_Sedan />} />
          <Route path="/Maseratisport" element={<Maserati_Sport />} />
          <Route path="/Maseraticoupe" element={<Maserati_Coupe />} />
          <Route path="/MaseratigranCoupe" element={<Maserati_GranCoupe />} />


          <Route path="/Porsche" element={<Porsche />} />
          <Route path="/porschesedan" element={<Porsche_Sedan />} />
          <Route path="/porschesport" element={<Porsche_Sport />} />
          <Route path="/porschecoupe" element={<Porsche_Coupe />} />
          <Route path="/porschegranCoupe" element={<Porsche_GranCoupe />} />



          <Route path="/Order" element={<Order />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;