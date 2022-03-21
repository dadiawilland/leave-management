import React from 'react'
import MaterialTable from '@material-table/core'
import icon from '../../assets/icn-likha-logo.png'
import { tableIcons } from '../../utils/table-icons'
import CustomTable from '../../components/CustomTable'

const Users = () => {

  const theadData = ["Name", "Email", "Date"];

  const tbodyData = [
    {
      id: "1",
      items: ["John", "john@email.com", "01/01/2021"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
  ];

  return (
    <div style={styles.containerUser}>
      <div style={styles.containerIndex}>
        {/* <MaterialTable

          icons={tableIcons}
          columns={[
            { title: 'Full Name', field: 'fullName' },
            { title: 'Contact', field: 'contactNum' },
            { title: 'Address', field: 'address' },
            { title: 'Department', field: 'department' },
            { title: 'Email', field: 'email' },
            { title: 'Avatar', field: 'avatar' },
            { title: 'Role', field: 'role' },
          ]}

          data={[{
            fullName: 'test',
            contactNum: 'test',
            address: 'test',
            department: 'test',
            email: 'test',
            avatar: 'test',
            role: 'test'
          }]}
          // data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
        /> */}
        <CustomTable
          theadData={theadData} 
          tbodyData={tbodyData}
        />
      </div>
    </div>
  )

}

const styles = {
  containeruser: {
    alignSelf: 'center',
    width: '100%'
  },
  containerIndex: {
    width: '100%'
  },

}

export default Users
