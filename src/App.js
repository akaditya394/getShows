import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Detail";

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/details/:position" element={<Details />}/>
   </Routes>
  )
}

export default App
