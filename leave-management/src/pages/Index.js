import React from 'react'
import icon from '../assets/icn-likha-logo.png'
import styled from 'styled-components';
import Person from '@material-ui/icons/Person';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import Users from './top/Users';
const Index = () => {

    return (
        <div style={styles.containerIndex}>
            <Navigation />
            <Users />
        </div>
    )
}

export default Index

const Navigation = () => {
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

const Nav = styled.div`
    position: absolute;
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
    containerIndex: {
        backgroundColor: '#FAFDFF',
        height: '100vh',
        display: 'flex',
        paddingLeft: 76,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
