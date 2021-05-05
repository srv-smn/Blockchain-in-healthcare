import React from "react";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent,MenuItem , Menu, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


class Sidebar extends React.Component {

    render(){
        return(
            <ProSidebar>
  <Menu iconShape="square">
    <MenuItem >Home</MenuItem>
    <MenuItem >Home</MenuItem>
    <MenuItem >Home</MenuItem>
    <MenuItem >Home</MenuItem>
    <MenuItem >Home</MenuItem>
    <MenuItem >Home</MenuItem>
    <SubMenu title="Components">
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
      <MenuItem>Menu Item 3</MenuItem>
      ...
    </SubMenu>
  </Menu>
</ProSidebar>
        )
    }
    
}

export default Sidebar;