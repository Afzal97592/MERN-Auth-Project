import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { userVerify } from '../services/Apis';

const Otp = () => {

  const[otp, setOtp] = useState("")
  // console.log(otp)
  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate()

  const loginUser = async(e) =>{
    e.preventDefault();
    if(otp === ""){
       toast.error("Enter Your Otp")
    }else if(!/[^a-zA-z]/.test(otp)){
      toast.error("Enter Valid Otp")
    }else if(otp.length <6){
      toast.error("Otp length min 6 digit")
    }else{
      const data = {
        otp, email : location.state
      }
      const response = await userVerify(data);
      // console.log(response)
      if(response.status === 200){
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);

        setTimeout(()=>{navigate('/dashboard')

        },5000)
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
            <h1>Please Enter Your Otp Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor='otp'>OTP</label>
              <input type="text" name='otp' id='' placeholder='Enter your OTP'
              onChange={(e)=>{setOtp(e.target.value)}} 
             />
            </div>
            <button className='btn' onClick={loginUser}>Submit</button>
          </form>
        </div>
      <ToastContainer />
      </section>
    </>
  )
}

export default Otp