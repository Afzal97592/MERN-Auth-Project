import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/mix.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {registerfunction} from '../services/Apis'



const Register = () => {

  const[passShow, setPassShow] = useState(false)
  const[inputData, setInputData] = useState({
    fname:'',
    email:'',
    password:''
  })
const navigate = useNavigate()
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInputData({
      ...inputData, [name]:value
    })
  }
  // console.log(inputData)

  //SubmitData

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {fname, email, password} = inputData

    if(fname===''){
      toast.error("Enter Your Name")
    }else if(email===''){
      toast.error("Enter Your Email")
    }else if(!email.includes('@')){
      toast.error("Enter your valid email")
    }else if(password === ''){
      toast.error("Set your password")
    }else if(password.length<6){
      toast.error("password should be min 6 charector")
    }else{
     const response = await registerfunction(inputData)
    //  console.log(response)

    if(response.status===200){
      setInputData({...inputData, fname:'', email:'', password:''})
          navigate("/")
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
            <h1>Sign Up</h1>
            <p style={{textAlign:'center'}}>We are glade that you will be using AhmadDev to manage your tasks! we hope that you will get like it.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor='fname'>Name</label>
              <input type="text" name='fname' id='' placeholder='Enter your name' onChange={handleChange} 
              />
            </div>
            <div className="form_input">
              <label htmlFor='email'>Email</label>
              <input type="email" name='email' id='' placeholder='Enter your Email Address' 
              onChange={handleChange}
              />
            </div>
            <div className="form_input">
              <label htmlFor='password'>Password</label>
              <div className='two'>
               <input type={!passShow? "password" : "text"} name='password' id=''  placeholder='Password' 
               onChange={handleChange}
               />
               <div className="showpass" onClick={()=>setPassShow(!passShow)} >
                 {!passShow? 'Show' : "Hide"}
               </div>
              </div>
            </div>
            <button className='btn'
             onClick={handleSubmit}
            >Sign up</button>
            <p>Already have an account ?<NavLink to='/'>Login</NavLink></p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register