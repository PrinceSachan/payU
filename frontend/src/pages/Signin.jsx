import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function clickHandler() {
    let data = JSON.stringify({
      username,
      password
    })

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/v1/user/signin',
      headers: {
        'Content-Type': 'application/json'
      }, 
      data
    };

    axios.request(config)
      .then((res) => {
        console.log(JSON.stringify(res))
        localStorage.setItem("token", res.data.token)
      })

    navigate('/dashboard')
  }

  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeHolderName={"prince@gmail.com"} onChange={(e) => setUsername(e.target.value)} />
          <InputBox label={"Password"} placeHolderName={"******"} onChange={(e) => setPassword(e.target.value)} />
          <div className='pt-4'>
            <Button onClick={clickHandler} label={"Sign In"} />
          </div>
          <BottomWarning label={"Don't have an account?"} linkName={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin