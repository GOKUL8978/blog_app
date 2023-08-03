import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import axios from "axios"

const Register = () => {
  const [inputs,setInputs] = useState({
    username: "",
    email : "",
    password: ""
  })
 const [err, setError] = useState(null);



  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register/", {inputs});
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className='login'>
      <h1>Register</h1>
      <form >
      <input required type="text"  placeholder='Username'name='username' onChange={handleChange}/>
      <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
      <input required type="password" placeholder='Password' name='password' onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
      <p>There is an error!!</p>
      <span>Do you have account ?<Link to="/login"> Login </Link></span>
      </form>
    </div>
  )
}

export default Register