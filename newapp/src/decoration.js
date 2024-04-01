import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Dining from "./dining";
import Kitchen from "./Kitchen";
import Sale from "./sale";
import Bath from "./bath";

import Carddetail from "./carddetail"
function Decoration() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dining" element={<Dining />} /> 
          <Route path="/kitchen" element={<Kitchen />} /> 
          <Route path="/sale" element={<Sale />} /> 
          <Route path="/bath" element={<Bath/>} /> 
          <Route path="/carddetail" element={<Carddetail/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Decoration;

