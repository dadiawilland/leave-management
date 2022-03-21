import React, {useState} from "react";

const CustomField = (props) => {
  
  const [val, setVal] = useState(props.value)

  const handleOnChange = (e) => {
    setVal(e.target.value)
    props.handleOnChange(e)
  }

  return (
    <div style={styles.containerField}>
      <span style={styles.fontInputTitle}>{props.label}</span>
      <input disabled={!props.isEdit} 
            style={styles.fieldInput} 
            name={props.name} 
            value={val} 
            onChange={handleOnChange}/>
    </div>
  )
}

const styles = {
  containerField: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 34
  },
  fontInputTitle: {
    fontSize: 15,
    color: '#0F4C81',
    fontWeight: '500',
    marginBottom: 15
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
    marginBottom: 16,
    overflow: 'auto'
  }
}

export default CustomField;
