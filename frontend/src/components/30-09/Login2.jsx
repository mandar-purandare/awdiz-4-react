import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../22-09/Register2.css';
import toast, {Toaster} from 'react-hot-toast';
import api from '../../helpers/AxiosConfig';
import { AuthContext } from '../Context/AuthContext';

const Login2 = () => {
  const [userData, setUserData] = useState({email: "", password: "" });

  const [borderClass, setBorderClass] = useState('gray-border');

  const router = useNavigate();

  const {Login, state} = useContext(AuthContext);

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
    if(userData.email && userData.password){
      if(userData.password.length >= 8){
          // let response = {data : {success:true}};
             const response = await api.post('auth/login',{email:userData.email, password:userData.password});
          if(response.data.success){
            // alert('Login successfull');
            toast.success('Login successfull');
            setUserData({email:"", password:""});
            Login(response.data.user);
            localStorage.setItem("my-token", JSON.stringify(response.data.token));
            setTimeout(() => {router('/');}, 1000)
          }else{
            response = {data: {error:'Login unsuccessfull'}}
            alert(response.data.error);
          }
      }else{
        // alert('Password must have minimum 8 characters');
        toast.error("Password must have minimum 8 characters");
      }
      
    }else{
      // alert('All fields are mandatory!');
      toast.error('All fields are mandatory!');
    }
  }

  return (
    <div className='form-card'>
      <h1>Login</h1>
      <form onSubmit={sendDataToBackend}>
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
      <Toaster/>
    </div>
  )
}

export default Login2;