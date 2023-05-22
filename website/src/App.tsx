import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Main} from "./pages/MainPage/Main";
import Particles from "react-tsparticles";


function App() {
  return (
    <>

        <Navbar></Navbar>
        <Particles/>
        <Routes>

            <Route path={"/"} element={<Main/>}/>

        </Routes>
</>

  );
}

export default App;
