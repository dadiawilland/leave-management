import React from 'react'
import icon from '../../assets/icn-likha-logo.png'
import { useState } from 'react';

const Register = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    address: '',
    department: ''
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div style={styles.containerIndex}>
      <div style={styles.containerHeader}>
        <img style={styles.imgIcon} src={icon} alt="Likha logo" />
        <span style={styles.fontHeader}>Leave Management System</span>
      </div>
      <div style={styles.containerForm}>
        <div style={styles.containerInput}>
          <span style={styles.fontInputTitle}>Email</span>
          <input name="email" style={styles.fieldInput} onChange={handleOnChange} />
          <span style={styles.fontInputTitle}>Password</span>
          <input name="password" type={'password'} style={styles.fieldInput} onChange={handleOnChange} />
          <span style={styles.fontInputTitle}>Confirm Password</span>
          <input name="confirmPassword" type={'password'} style={styles.fieldInput} onChange={handleOnChange} />
          <span style={styles.fontInputTitle}>Contact Number</span>
          <input name="contactNumber" style={styles.fieldInput} onChange={handleOnChange} />
          <span style={styles.fontInputTitle}>Address</span>
          <input name="address" style={styles.fieldInput} onChange={handleOnChange} />
          <span style={styles.fontInputTitle}>Department</span>
          <input name="department" style={styles.fieldInput} onChange={handleOnChange} />
        </div>
        <div style={styles.containerButton}>
          <span style={styles.fontButton}>Submit</span>
        </div>
      </div>
      <span style={styles.fontFooter}>Go back to
        <a href="/login" style={styles.fontLink}>  Login</a>
      </span>
    </div>
  )
}

const styles = {
  containerIndex: {
    minHeight: '100vh',
    backgroundColor: '#FFFFF7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHeader: {
    position: 'absolute',
    left: 25,
    top: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerForm: {
    // backgroundColor: '#00000030'
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerInput: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 34
  },
  containerButton: {
    width: 120,
    height: 45,
    backgroundColor: '#0F4C81',
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  imgIcon: {
    height: 40,
    width: 40
  },
  fontInputTitle: {
    fontSize: 15,
    color: '#0F4C81',
    fontWeight: '500',
    marginBottom: 15
  },
  fontHeader: {
    fontSize: 32,
    marginLeft: 19,
    color: '#0F4C81',
    fontWeight: 700
  },
  fontButton: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFFF1'
  },
  fontFooter: {
    position: 'absolute',
    textAlign: 'center',
    right: 0,
    left: 0,
    bottom: 15,
    fontWeight: '500',
    color: '#0F4C81',
  },
  fontLink: {
    fontWeight: '700',
    cursor: 'pointer',
    color: '#0F4C81',
    textDecoration: 'none',
  },
  fieldInput: {
    height: 43,
    width: 320,
    borderRadius: 6,
    border: 0,
    fontSize: 12,
    fontWeight: 500,
    paddingLeft: 6,
    paddingRight: 6,
    color: '#141414',
    letterSpacing: 0.5,
    fontFamily: 'Poppins',
    outline: 'none',
    border: '1px solid #CECECE',
    boxShadow: '4px 4px 12px #00000015',
    marginBottom: 16
  }
}

export default Register