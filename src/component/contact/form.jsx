import React from 'react'
//import * as fiel form 'sinf.jsx'
import {Sinfrom, Textarea, Select} from './sinf.jsx'

import PropTypes from 'prop-types'

function Form(props){
  let country = ['bangladesh', 'china', 'india', 'srilankha']
  return(
    <div>
      <form onSubmit={props.formh}>
        <Sinfrom type="text" name="name" />
        <Sinfrom type="email" name="email" />
        <Sinfrom type="password" name="password" />
        <Textarea mess="message" />
        <Select name="country" value={country} con={country}/>
        <button type="submit">sumit</button>
      </form>
    </div>
    )
  
}
Form.propTypes={
  formh: PropTypes.func.isRequired,
}

export default Form
