import React, {useState,useEffect} from 'react'
import axios from "axios"
import {motion} from 'framer-motion'
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate()
   const [cookies, setCookie] = useCookies(['user'])
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');



  const formSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/logins", {
      email: email,
      password: password
    }).then(res => {
       let tk = res.data
        if(tk == "Please enter Username and Password!") {
            console.log("please enter username and password")
        } else if (tk == "Incorrect Username and/or Password!") {
            console.log("incorrect username and/or password ")

        }
        else {
            setCookie('user', tk)
            navigate("/home")
        }

    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <>
    <motion.div className='w-screen h-screen flex justify-center items-center '>
     <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" onSubmit={(e) => formSubmit(e)}>
      <h1 className='font-bold text-2xl  text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'>Login</h1>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light">Email</label>
        <input className="w-96 px-3 py-2 rounded-md border border-slate-400 outline-blue-400 outline-0.5 placeholder:font-normal" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light" >Password</label>
        <input className="w-96 px-3 py-2 rounded-md border border-slate-400 outline-blue-400 outline-0.5 placeholder:font-normal" type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex flex-col space-y-2">
      <button className='bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold rounded-lg py-2 text-white'>Login</button>
      </div>
      </form>
    </motion.div>
    </>
  )
}

export default Login