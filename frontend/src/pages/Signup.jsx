import React, { useState } from 'react'
import axios from 'axios';
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  async function clickHandler(e) {
    e.preventDefault();
    const userData = {
      username,
      password,
      firstName,
      lastName
    }

    await axios.post("http://localhost:3000/api/v1/user/signup", userData)
      .then(res => {
        // console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
      })

    navigate('/dashboard');
  }
  
  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox onChange={e => {
            setFirstName(e.target.value)
          }} label={"First Name"} placeHolderName={"Prince"} />
          <InputBox onChange={e => {
            setLasttName(e.target.value)
          }} label={"Last Name"} placeHolderName={"Sachan"} />
          <InputBox onChange={e => {
            setUsername(e.target.value)
          }} label={"Email"} placeHolderName={"prince@gmail.com"} />
          <InputBox onChange={e => {
            setPassword(e.target.value)
          }} label={"Password"} placeHolderName={"******"} />
          <div className='pt-4'>
            <Button type="submit" onClick={clickHandler} label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} linkName={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup