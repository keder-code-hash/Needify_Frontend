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
      
      <div style={{ height: '100%' }}>

        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink to="/ngodash/details" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Details</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/ngodash/events" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Events</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/ngodash/history" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Previous History</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/ngodash/requirements" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Requirements</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/ngodash/profileupdate" activeClassName="activeClicked">
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