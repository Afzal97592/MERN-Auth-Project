import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../services/Helper';
import axios from 'axios';

const Dashboard = () => {

  const  navigate = useNavigate();
  const [users, setUsers] = useState()

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken")
    if(token){
      console.log("user valid")
    }else{
      navigate("*")
    }
  }

  useEffect(()=>{
    userValid()
  },[])

  // useEffect(()=>{
  //   const getUser = async() =>{
  //     await axios.get(`http://localhost:4002/user/register`,{
  //       headers:{
  //         "Content-type": "Application/json",
  //         "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UzZTZlZWQ0MTQyMTlmYmY2ZWIyZDEiLCJpYXQiOjE2NzYwNDg5MDcsImV4cCI6MTY3NjEzNTMwN30.3-iEk2sf6VMK0-SZwgiK4XdnJz_yw_HnDlc70Y0sVkE'
  //       }
  //     }).then((res)=>{
  //       setUsers(res.data)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  //   }
  //    getUser()
  // },[])

  // console.log(users)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard