import React from 'react';
import {Routes,Route} from 'react-router'
import './App.css';
import Dashboard from "./components/Template";
import { Link } from 'react-router-dom';
import Persons from './components/Persons';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { InputLabel } from '@mui/material';


function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <Box style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh", backgroundColor:"#0d47a1" }}>
        <Menu>
          <MenuItem  icon={<MenuOutlinedIcon style={{ fontSize: "50px", color: "#000000"  }}/>}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", height: "10vh" }} >
            <InputLabel>InfoManager</InputLabel>
          </MenuItem>
          <Link to="/persons" style={{ textDecoration: 'none', display: 'block' }}>
          <MenuItem icon={<PeopleOutlinedIcon style={{ fontSize: "40px", color: "#000000"  }}/>} style={{ textAlign: "center", height: "20vh" }} ><InputLabel>Persons</InputLabel></MenuItem>
          </Link>
        </Menu>
      </Sidebar>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/persons" element={<Persons />} />
      </Routes>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>
    </Box>

  );
}

export default App;
