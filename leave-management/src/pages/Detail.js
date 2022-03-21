import React from 'react'
import icon from '../assets/icn-likha-logo.png'
import styled from 'styled-components';
import Person from '@material-ui/icons/Person';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import Users from './top/Users';
import CustomNav from '../components/CustomNav';
import UserDetails from './details/UserDetails';

import { useLocation } from "react-router-dom";
const Detail = () => {

    const location = useLocation().pathname

    const renderBody = (loc) => {
      let path_arr = loc.split('/')
      let path = path_arr[1]
      let id = path_arr[path_arr.length - 1]
      
      switch(path) {
        case 'user':
            return <UserDetails id={id}/>;
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

export default Detail

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
