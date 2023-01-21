import React from 'react';
import {Routes,Route} from 'react-router'
import './App.css';
import Dashboard from "./components/Template";
import Persons from './components/Persons'
import SidebarContainer from './components/SidebarContainer';
import { Box } from "@mui/material";



function App() {
  const style = {
    height: "100vh",
    display: "flex"
  };
  return (
    <Box style={style}>
      <SidebarContainer />
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/persons" element={<Persons />} />
      </Routes>
    </Box>

  );
}

export default App;
