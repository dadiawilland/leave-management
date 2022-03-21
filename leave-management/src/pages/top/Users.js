import React from 'react'
import MaterialTable from '@material-table/core'
import icon from '../../assets/icn-likha-logo.png'
import { tableIcons } from '../../utils/table-icons'
import CustomTable from '../../components/CustomTable'

const Users = () => {

  const theadData = ["ID", "Name", "Email", "Date"];

  const tbodyData = [
    {
      id: "1",
      items: ["1", "John", "john@email.com", "01/01/2021"],
    },
    {
      id: "2",
      items: ["2", "Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["3", "Maria", "maria@email.com", "12/01/2020"],
    },
    {
      id: "4",
      items: ["4", "Maria", "maria@email.com", "12/01/2020"],
    },
  ];

  return (
    <div style={styles.containerUser}>
      <div style={styles.containerIndex}>
        <span style={styles.fontTitle}>User Management</span>
        <CustomTable
          theadData={theadData} 
          tbodyData={tbodyData}
        />
      </div>
    </div>
  )

}

const styles = {
  containerUser: {
    alignSelf: 'center',
    minWidth: 'calc(100vw - 76px)',
    height: '100vh'
  },
  containerIndex: {
    width: 'auto',
    // height: '100vh',
    paddingInline: 50,
    paddingBlock: 24,
    display: 'flex',
    flexDirection: 'column'
  },
  fontTitle: {
    fontSize: 24,
    color: '#0F4C81',
    marginBottom: 24,
    fontWeight: 400

  }

}

export default Users
