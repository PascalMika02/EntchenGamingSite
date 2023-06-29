import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Main} from "./pages/MainPage/Main";
import Particles from "react-tsparticles";
import {ShortClone} from "./pages/Shorts/ShortClone";
import {Box, Container} from "@mui/material";


function App() {
  return (
      <Box
          sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              margin: '2em',
          }}
      >
          <div className="app">
        <Navbar></Navbar>
        <Routes>

            <Route path={"/"} element={<Main/>}/>
            <Route path={'/clone'} element={<ShortClone/>}/>

        </Routes>
          </div>
</Box>

  );
}

export default App;
