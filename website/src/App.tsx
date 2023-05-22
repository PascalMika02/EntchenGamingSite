import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Main} from "./pages/Main";


function App() {
  return (
    <>

        <Navbar></Navbar>
        <Routes>

            <Route path={"/"} element={<Main/>}/>

        </Routes>
</>

  );
}

export default App;
