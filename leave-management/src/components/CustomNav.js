import styled from 'styled-components';
import React from 'react'
import icon from '../assets/icn-likha-logo.png'
import Person from '@material-ui/icons/Person';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import MeetingRoom from '@material-ui/icons/MeetingRoom'

const CustomNav = () => {
  return(
  <Nav>
      <div>
          <img style={styles.imgIcon} src={icon} alt="Likha logo" />
          <NavItem style={styles.containerNav}>
              <Person style={styles.imgMaterialIcon} />
              <span style={styles.fontNav}>User Management</span>
          </NavItem>
          <NavItem>
              <InsertDriveFile style={styles.imgMaterialIcon} />
              <span style={styles.fontNav}>Application Management</span>
          </NavItem>
      </div>
      <NavItemLogout>
          <MeetingRoom style={styles.imgMaterialIcon} />
          <span style={styles.fontNav}>Logout</span>
      </NavItemLogout>
  </Nav>
  )
}

export default CustomNav

const Nav = styled.div`
  position: fixed;
  z-index: 99999;
  width: 76px;
  height: 100vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  justify-content: space-between;
  border-right: 1px outset rgb(255, 255, 230);
  &:hover {
      width: 300px;   
  }
  -webkit-transition: width 0.5s ease-in-out;
  -moz-transition: width 0.5s ease-in-out;
  -o-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
`

const NavItem = styled.div`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  &:hover {
      background-color: #88C4F8;   
  }
`

const NavItemLogout = styled.div`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  self-align: flex-end;
  &:hover {
      background-color: #88C4F8;   
  }
`

const styles = {
  containerNav: {
      display: 'flex',
      overflow: 'hidden'
  },
  containerHeader: {
      position: 'absolute',
      width: 175,
      height: '100vh',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'center',
      backgroundColor: 'black',
      "&:hover": {
          backgroundColor: "#efefef"
        },
  },
  imgIcon: {
      height: 40,
      width: 40,
      padding: 18
  },
  imgMaterialIcon: {
      fontSize: "32px", 
      padding: 22, 
      color: '#0F4C81'
  },
  imgMaterialIconLogout: {
      fontSize: "32px", 
      padding: 22, 
      color: '#0F4C81',
      bottom: 0,
  },
  fontNav: {
      alignSelf: 'center',
      color: '#0F4C81',
      whiteSpace: 'nowrap',
      fontSize: 15,
      fontWeight: 500,
  },
}