import React from 'react'
import icon from '../assets/icn-likha-logo.png'
import styled from 'styled-components';
import Person from '@material-ui/icons/Person';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import Users from './top/Users';
import CustomNav from '../components/CustomNav';

import { useLocation } from "react-router-dom";
const Index = () => {

    const location = useLocation().pathname

    const renderBody = (loc) => {
      switch(loc) {
        case '/users':
            return <Users/>;
        case '/applications':
            return <Users/>;
        default:
            return <Users/>;
      }
    }

    return (
        <div style={styles.containerIndex}>
            <CustomNav />
            {renderBody(location)}
        </div>
    )
}

export default Index

const styles = {
    containerIndex: {
        backgroundColor: '#FEFEFE',
        height: '100vh',
        display: 'flex',
        paddingLeft: 76,
        justifyContent: 'center',
        alignItems: 'center'
    },
}
