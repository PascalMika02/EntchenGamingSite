import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Main} from "./pages/Main";

function App() {
  return (

      <Routes>

        <Route path={"/"} element={<Main/>}/>

    </Routes>
  );
}

export default App;
