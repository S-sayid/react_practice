import React from 'react'
//import SinField from './sinf.jsx'
import PropTypes from 'prop-types'

function Form(props){
  console.log('hellow')
  return(
    <div>
      <form onSubmit={props.formh}>
        <input type={props.type} name={props.name}/>
      </form>
    </div>
    )
  
}
Form.propTypes={
  formh: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Form
