import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
    return (
        <ProSidebar>
        <Menu iconShape="square">
          <MenuItem /* icon={} */>Dashboard</MenuItem>
          <SubMenu title="Components" /* icon={<FaHeart />} */>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    )
}

export default Sidebar
