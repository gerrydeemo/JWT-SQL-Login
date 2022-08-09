import React,{useState, useEffect} from 'react'
import {useCookies} from "react-cookie";


function Register() {

  const [cookies, setCookies] = useCookies(['user'])
    const token = JSON.parse(atob(cookies.user.split('.')[1]))
    console.log(token)




  return (
    <div>Register{token}</div>

  )
}

export default Register