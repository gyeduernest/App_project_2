import React from 'react'

export default function Footer() {
  return (
      <>
        <div className='flex pb-10 gap-5 px-5 flex-wrap text-white bg-slate-700'>
            <div className=' mt-10'><form action="">
              <input type="email" name="email" id="" className='rounded-md h-12 w-full px-5 active:border-pink-400 active:border-2 mb-5 ' placeholder='insert email' />
              <button className='ml-24'>Submit email</button>
              </form>
            </div>
            <div>
            <ul>
            <h4>Gettting Started</h4>
            <li>Installation</li>
            <li>Editor Setup</li>
            <li>Browser Support</li>
            <li>Upgrade Guide</li>
            </ul>
            
            </div>
            <div>
            <ul>
            <h4>Core Concepts</h4>
            <li>Installation</li>
            <li>Editor Setup</li>
            <li>Browser Support</li>
            <li>Upgrade Guide</li>
            </ul>
            
            </div>
                  



        </div>
      
      
      </>
    
    
    )
}
