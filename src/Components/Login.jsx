import React from 'react'
import Logo from '../assets/Amazon_Logo.png'

function Login() {
  return (
    <div >
        <div className='flex justify-center  '>
            <img alt='' src={Logo} className='h-28 w-56' />
        </div>
        <div className='grid  justify-center grid-container '>
          <h1 className='text-3xl font-semibold'>Sign in</h1>
          <p>Email or mobile phone number</p>

        </div>

    </div>
  )
}

export default Login