import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import CustomField from "../../components/CustomField";

const UserDetails = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    contact: '',
    address: '',
    department: '',
    email: '',
    avatar_id: '',
    role_id: '',
    password: ''
  });

  const handleEditButton = () => {
    setIsEdit(true)
  }

  const handleCancelButton = () => {
    setIsEdit(false)
  }

  const handleSubmitButton = () => {
    setIsEdit(false)
  }

  const handleOnChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div style={styles.containerUser}>
      <div style={styles.containerIndex}>
        <div style={styles.containerHeader}>
          <span style={styles.fontTitle}>User Detail</span>
          <div style={styles.containerButtons}>
            { isEdit ? 
              (
                <div style={styles.containerButtons}>
                  <Button onClick={() => handleSubmitButton()} >
                    <span style={styles.fontButton}>Submit</span>
                  </Button>
                  <CancelButton onClick={() => handleCancelButton()} >
                    <span style={styles.fontCancelButton}>Cancel</span>
                  </CancelButton>
                </div>
              )
              :
              (
                <Button onClick={() => handleEditButton()} >
                  <span style={styles.fontButton}>Edit</span>
                </Button>
              )  
            }
          </div>
        </div>
        <CustomField handleOnChange={handleOnChange} 
                    isEdit={isEdit} 
                    label={'First Name'} 
                    name={'first_name'} 
                    value={'Willand'}/>
      </div>
    </div>
  )
}

const Button = styled.div`
    width: 120px;
    height: 45px;
    background-color: #0F4C81;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-right: 12px;
    &:hover {
      background-color: #0F4C8180;
    }
`
const CancelButton = styled.div`
    width: 120px;
    height: 45px;
    background-color: #FFFFFF;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-right: 12px;
    border: 1px solid #CECECE;
    &:hover {
      background-color: #CECECE30;
    }
`

const styles = {
  containerUser: {
    alignSelf: 'center',
    minWidth: 'calc(100vw - 76px)',
    height: '100vh'
  },
  containerIndex: {
    // height: '100vh',
    paddingInline: 50,
    paddingBlock: 24,
    display: 'flex',
    flexDirection: 'column'
  },
  containerHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  containerFont: {
    width: '100%',
    // borderBottom: '1px solid #0F4C81'
  },
  containerButtons: {
    display: 'flex'
  },
  containerButton: {
    width: 120,
    height: 45,
    backgroundColor: '#0F4C81',
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: 12
  },
  fontButton: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFFF1'
  },
  fontButton: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFFF1'
  },
  fontCancelButton: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#000000'
  },
  fontInputTitle: {
    fontSize: 15,
    color: '#0F4C81',
    fontWeight: '500',
    marginBottom: 15
  },
  fontTitle: {
    fontSize: 24,
    color: '#0F4C81',
    fontWeight: 400,
    alignSelf: 'center'
  }
}

export default UserDetails;