import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSign = () =>{
        setisSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header/>
        <div className='bg-black absolute'>
            <img className='opacity-60' src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="link not working" />
        </div>
        <form className='relative m-auto top-24 flex flex-col w-[450px] bg-black p-14 bg-opacity-80'>
            <h1 className='text-white mb-5 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm &&(<input type="text" placeholder='Full Name' className='p-3 m-2 rounded-md bg-[#333] text-white'/>)}
            
            <input type="email" placeholder='Email Address' className='p-3 m-2 rounded-md bg-[#333] text-white'/>
            
            <input type="password" placeholder='Email Password' className='p-3 m-2 rounded-md bg-[#333] text-white'/>
            <button className='p-3 m-2 mt-8 text-white rounded-md bg-red-600'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-white cursor-pointer' onClick={toggleSign}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now..."}
                
            </p>
        </form>
    </div>
  )
}

export default Login