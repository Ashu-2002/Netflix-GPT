import React, { useState } from 'react'
import { BODY_IMG_URL } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleClick = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className={"bg-[url('" + BODY_IMG_URL +"')]" + " bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full absolute"}
    >
        {/* <div> */}
            <form className='2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-3/4 bg-black  mx-auto mt-56 h-1/2 py-10 px-14 bg-opacity-90 rounded-md'>
                <div className='mt-2 mb-8 text-3xl text-white font-bold'>{isSignInForm? 'Sign In' : 'Sign Up'} </div>
                {isSignInForm ? 
                <></>
                : <input type='text'placeholder='Full Name' className='w-full block my-6 py-2.5 px-4 bg-gray-900 text-white opacity-80'/>
                }
                <input type='text'placeholder='Email Address' className='w-full block my-6 py-2.5 px-4 bg-gray-900 text-white opacity-80'/>
                <input type='password' placeholder='Password' className='w-full block my-6 py-2.5 px-4 bg-gray-900 text-white opacity-80'/>
                <button className='w-full block my-6 bg-red-700 text-white p-2 rounded-md font-semibold'>{isSignInForm? 'Sign In' : 'Sign Up'} </button>
                <p className='text-white cursor-pointer' onClick={handleClick}>{isSignInForm? 'New to Netflix? Sign Up Now.' : 'Already a member? Sign In Now.'} </p>
            </form>
        {/* </div> */}
    
    
    </div>
  )
}

export default Login;