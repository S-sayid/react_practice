import React from 'react'
import Header from '../heade/header.jsx'
import Myform from './form.jsx'
class Form extends React.Component{
  state ={
    data: []
  }
  hi(){
    return 'sayid'
  }
  chang=(e)=>{
    e.preventDefault()
    this.setState({data: [...this.state.data,{
      name:e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value, 
      massage: e.target.message.value,
      country: e.target.country.value
    }]
  })
    console.log(this.state.data)
  }
  sinChang=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
      return(
        <div>
            <Header />
            <Myform formh={this.chang} />
        </div>
      	
      	)
  }
}

export default Form