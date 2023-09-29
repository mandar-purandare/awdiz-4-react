import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register2.css';

const Register2 = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const [borderClass, setBorderClass] = useState('gray-border');

  const router = useNavigate();

  const handleChange = (event) => {
    
    // console.log(event.target.value, "value", event.target.name, "name")

    setUserData({...userData, [event.target.name]: event.target.value});
    if(event.target.name === 'password' && event.target.value.length < 8){
       setBorderClass(borderClass => borderClass = 'red-border');
    }

    if(event.target.name === 'password' && event.target.value.length >= 8){
      setBorderClass(borderClass => borderClass = 'green-border');
    }
    
  }

  const sendDataToBackend = async (event) => {
    event.preventDefault();
    if(userData.name && userData.email && userData.password){
      if(userData.password.length >= 8){
          const response = {data : {success:true}};
          if(response.data.success){
            alert('Registration successfull');
            setUserData({name:"", email:"", password:""})
            router('/');
          }else{
            response = {data: {error:'Registration failed'}}
            alert(response.data.error);
          }
      }else{
        alert('Password must have minimum 8 characters');
      }
      
    }else{
      alert('All fields are mandatory!');
    }
  }

  return (
    <div className='form-card'>
      <h1>Register</h1>
      <form onSubmit={sendDataToBackend}>
        <label>Name :</label>
        <input name='name' type='text' onChange={handleChange} className='gray-border'/> <br />
        <label>Email :</label>
        <input name='email' type='email' onChange={handleChange} className='gray-border'/> <br />
        <label>Password :</label>
        {borderClass? 
        <input name='password' type='password' onChange={handleChange} className={borderClass}/>
        : <div></div>
        }
        <br />
        <input type='submit' /><br />
      </form>
    </div>
  )
}

export default Register2