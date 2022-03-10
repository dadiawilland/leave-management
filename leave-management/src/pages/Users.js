import React from 'react'
import MaterialTable from '@material-table/core'
import icon from '../assets/icn-likha-logo.png'
import { tableIcons } from '../utils/table-icons'

const Users = () => {

  return (
    <div style={styles.containerUser}>
      <div style={styles.containerIndex}>
        <MaterialTable
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
        />
      </div>
    </div>
  )

}

const styles = {
  containerIndex: {
    maxWidth: '80%',
  },

}

export default Users