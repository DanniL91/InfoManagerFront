import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

export const SidebarContainer_ = () => {

  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar>
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
  );
}

export default SidebarContainer_;