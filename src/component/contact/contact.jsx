import React from 'react'
import Header from '../heade/header.jsx'
import Myform from './form.jsx'
class Form extends React.Component{
  state ={
    name: '',
    email: '',
    password: '',
    phone: ''
  }
  hi(){
    return 'sayid'
  }
  chang=(e)=>{
    console.log(this)
    e.preventDefault()
    this.setState({name: e.target.Fname.value})
  }
  sinChang=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
      return(
        <div>
            <Header />
            <Myform formh={this.chang} type="text" name="name" />
        </div>
      	
      	)
  }
}

export default Form