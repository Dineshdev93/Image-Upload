import React from "react";
import Home from "./Cmp/Home";
import Header from "./Cmp/Header";
import {Routes,Route}  from "react-router-dom"
import Register from "./Cmp/Register";
import style from "./Cmp/home.module.css"
function App() {
  return (
    <div className={style.backcolor}>
    <div >
        <Header/>
          
    </div>
      <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/register" element = {<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
