import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>

        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/ngodash" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Details</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/ngodash/events" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Events</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/ngodash/history" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Previous History</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/ngodash/requirements" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Requirements</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/ngodash/updateprofile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Update</CDBSidebarMenuItem>
              </NavLink>
  
               
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;