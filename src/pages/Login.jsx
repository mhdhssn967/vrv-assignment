import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
    
  return (
    <>
    <div style={{height:'100vh',width:'100vw'}} className='d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{textAlign:'center'}}>Employee Management App</h1>
        <div className='buttondiv'>
            <Link to={'/home'} state={{ user: 'Admin' }}><button className='logbtn userbtn'>Login as Admin</button></Link>
            <Link to={'/home'} state={{ user: 'User' }}><button className='logbtn adminbtn'>Login as User</button></Link>
        </div>
    </div>
    </>
  )
}

export default Login