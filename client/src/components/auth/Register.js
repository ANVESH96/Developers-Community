import React,{Fragment,useState} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {setAlert} from "../../actions/alert"
import {registerUser} from "../../actions/auth"
import PropTypes from "prop-types"

const Register=({setAlert,registerUser})=>{
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const {name,email,password,password2} = formData
  const changeHandler = e=> setFormData({...formData,[e.target.name]:e.target.value})
  const submitHandler =async e => {
    e.preventDefault()
   if(password !== password2){
     console.log('passwords doesnot match')
     setAlert("Password doesnot match","danger")
   }
   else{
     console.log("SUCCESS")
     registerUser({name,email,password})
   }
  }
    return(
      <Fragment>
       <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>submitHandler(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value ={name} onChange={e=>changeHandler(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>changeHandler(e)}/>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email 
            </small>
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e=>changeHandler(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            onChange={e=>changeHandler(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/Login">Sign In</Link>
      </p>
      </Fragment>
    )
    }
      
Register.propTypes = {
  setAlert :PropTypes.func.isRequired,
}

export default connect(null,{setAlert,registerUser})(Register)