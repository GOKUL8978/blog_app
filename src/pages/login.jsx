import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form >
      <input required type="text"  placeholder='Username'/>
      <input required type="email" placeholder='email' />
      <input required  type="password" placeholder='Password' />
      <button>Login</button>
      <p>There is an error!!</p>
      <span>Don't you have account ?<Link to="/register"> Register</Link></span>
      </form>
    </div>
  )
}

export default login