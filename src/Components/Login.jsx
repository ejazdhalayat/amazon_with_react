import React from 'react'
import Logo from '../assets/Amazon_Logo.png'

function Login() {
  return (
    <div >
        <div className='flex justify-center  '>
            <img alt='' src={Logo} className='h-28 w-56' />
        </div>
        <div className='grid  justify-center grid-container space-y-3 '>
          <h1 className='text-3xl font-semibold'>Sign in</h1>
          <p className=' font-semibold text-sm'>Email or mobile phone number</p>
          <input className='border border-slate-400 rounded-sm w-72 h-7'  />
          <button className='  bg-amber-200 h-7 rounded-sm border border-slate-400'>Continue</button>

        </div>

    </div>
  )
}

export default Login