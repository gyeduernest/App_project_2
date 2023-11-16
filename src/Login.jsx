import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (

    <>
    <div className='p-5 rounded-md border border-slate-400 lg:w-96 md:w-80 sm:w-80 w-72 mx-auto flex-wrap mt-40'>
      <div className='mb-5'>
          <h3>Log in</h3>
        <p>Input details to know projects you are interested in</p>
      </div>
      <form action="" className=''>
      <div>
        <label htmlFor="email"><h4 className='text-slate-700'>Email</h4></label>
      </div>
        <input type="email" name='email' id='email' placeholder='insert email' className='px-5 h-12 rounded-md border-slate-400 border w-full active:border-blue-600' />
        
      <div className='mt-5'>
        <label htmlFor="password"><h4 className='text-slate-700'>Password</h4></label>
      </div>
        <input type="password" name='password' id='password' placeholder='insert password' className='px-5 h-12 rounded-md border-slate-400 border w-full active:border-blue-600' />
        
        <div className='flex justify-center items-center pt-10'>
        <button className='w-full'>Log in</button>
        </div>
              </form>
        
              <Link to="/register" className='px-10 ' >Dont Have an Account Sign-up</Link>
    </div>
    </>
  )
}
