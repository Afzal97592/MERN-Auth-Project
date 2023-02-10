import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/mix.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from '../services/Apis';
import  Spinner from 'react-bootstrap/Spinner'

const Login = () => {
  const[email, setEmail] = useState('');
  const[spinner, setSpinner] = useState(false)
  const navigate = useNavigate()

const sendOtp = async(e) =>{
  e.preventDefault();
  if(email === ""){
    toast.error("Enter Your Email")
  }else if(!email.includes("@")){
    toast.error("Enter Valid Email!")
  }else{
    setSpinner(true)
   const data = {
    email:email
   }
   const response = await sentOtpFunction(data)
  //  console.log(response);

  if(response.status === 200){
    setSpinner(false)
      navigate('/user/otp', {state:email})
  }else{
    toast.error(response.response.data.error)
  }

  }
}

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, We are glade you are back please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor='email'>Email</label>
              <input type="email" name='email' id='' placeholder='Enter your Email Address' 
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button className='btn' onClick={sendOtp}>
             {
              spinner ? <span><Spinner animation='border' role="status" ></Spinner></span> :'Login'
             }
            </button>
            <p>Don't have and account? <NavLink to='/register'>Sign up</NavLink> </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Login