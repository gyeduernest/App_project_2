import React from 'react'
import { Link } from 'react-router-dom'
export default function Setup() {
  
  const  installation = [ 
    {
      id:1,
      step:1,
      title:"Visit Website",
      paragrapgh:"Visit the website and make sure you explore the landing page"
    },
    {
      id:2,
      step:2,
      title:"Click on Donate",
      paragrapgh:"Click on the Donate button to start your process of registering the platform"
    },
    {
      id:3,
      step:3,
      title:"Create Account",
      paragrapgh:"Enjoy the application when you create the account and get to come back anytime"
    }
]

  
  
  
  return (
    <>

  <div className='bg-indigo-700 p-5 py-10 text-white'>
    <div className='mb-10'>
      <h2 className='text-center'>Installation set-up</h2>
    </div>
      <div className=' flex flex-wrap gap-3'> 
        {installation.map ((installation) =>(
          <div className='mx-auto p-5 rounded-md  w-56'key={installation.id}>
            <h2 className='mb-2 text-center w-12  py-1  rounded-md text-white bg-orange-500'>{installation.step}</h2>
            <h3>{installation.title}</h3>
            <p className='mb-10 text-center'>{installation.paragrapgh}</p>
              <Link to="/">
                <button>
                  Start Now
                </button>
              </Link>

          </div>
  

))}  

</div>
</div>
     
    
    </>
  )
}
