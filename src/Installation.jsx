import React from 'react'
import { Link } from 'react-router-dom'
export default function Setup() {
  
  const  installation = [ 
    {
      id:1,
      step:1,
      title:"Visit Website",
      paragrapgh:"paragrapgh"
    },
    {
      id:2,
      step:2,
      title:"Click on Donate Now",
      paragrapgh:"paragrapgh"
    },
    {
      id:3,
      step:3,
      title:"Create Account",
      paragrapgh:"paragrapgh"
    }
]

  
  
  
  return (
    <>

  <div>
      <div className=''> 


{installation.map ((installation) =>(
<div className='p-5 rounded-md shadow-md border-2 border-slate-300 w-56'key={installation.id}>
  <h2 className='text-center'>{installation.step}</h2>
  <h3>{installation.title}</h3>
  <p>{installation.paragrapgh}</p>
    <Link to="/">
      <button>
        Donate Now
      </button>
    </Link>

</div>
  

))}  

</div>
</div>
     
    
    </>
  )
}
