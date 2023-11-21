import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
    



  return (

    <>
    <div className='p-4 rounded-md border border-slate-400 lg:w-96 md:w-80 sm:w-80 w-72 mx-auto flex-wrap mt-40'>
      <div className='mb-5'>
          <h3>Sign Up</h3>
        <p>Create an Account to start Donating to Projects</p>
      </div>
      <form action="" className=''>
      <div>
        <label htmlFor="email"><h4 className='text-slate-700'>Email</h4></label>
      </div>
        <input 
        type="email"
         name='email' 
         id='email'
          placeholder='insert email'
           className='px-5 h-12 rounded-md border-slate-400 border w-full active:border-blue-600' 
           required/>
        
      <div className='mt-5'>
        <label htmlFor="password"><h4 className='text-slate-700'>Password</h4></label>
      </div>
        <input
         type="password"
          name='password'
           id='password'
            placeholder='insert password'
             className='px-5 h-12 rounded-md border-slate-400 border w-full active:border-blue-600' 
             required/>
        
        <div className='flex justify-center items-center pt-10'>
        <button className='w-full'>Create Account</button>
        </div>
              </form>
        
              <Link to="/login" className='px-5 text-sm' >Have an Account you can Log-in</Link>
    </div>
    </>
  )
}
