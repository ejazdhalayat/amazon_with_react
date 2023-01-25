import React from 'react'
import Logo from '../assets/Amazon_Logo.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Login() {
  return (
    <div >
        <div className='flex justify-center  '>
            <img alt='' src={Logo} className='h-28 w-56' />
        </div>
        <div className='grid  justify-center grid-container space-y-3  '>
          <h1 className='text-3xl font-semibold'>Sign in</h1>
          <p className=' font-semibold text-sm'>Email or mobile phone number</p>
          <input className='border border-slate-400 rounded-sm w-72 h-7'  />
          <button className='  bg-amber-200 hover:bg-amber-300 h-7 w-72 rounded-sm border border-slate-600'>Continue</button>
          <p className='text-sm'>By continuing, you agree to Amazon's<a  className='text-blue-700' href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940'> Conditions <br/> of Use</a>  and <a className='text-blue-700' href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380'>Privacy Notice.</a> </p>

          <div className=' '>
          
          <p className='text-blue-700'><ArrowRightIcon className='text-black' /> Need help?</p>
        </div>
        </div>
        

    </div>
  )
}

export default Login