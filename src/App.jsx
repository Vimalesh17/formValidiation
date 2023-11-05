import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <form className='form'>
        <input type='text' className='input_field' placeholder='First Name'/>
        <input type='text' className='input_field' placeholder='Last Name'/>
        <input type='email' className='input_field' placeholder='Email'/>
        <input type='password' className='input_field' placeholder='Password'/>
        <input type='password' className='input_field' placeholder='confirm password'/>
        <input type='submit' id='submit' className='button'/>
        </form>
      </div>
    </>
  )
}

export default App
