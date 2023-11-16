import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {


const aboutCards = [
    {id:1,
    title:"Transparency",
    paragrapgh:"The Platform will Offer and assure people of a dashboard which will allow them to take control of how they ontribute their money towards Projects"},
    {id:2,
    title:"Ease of Access",
    paragrapgh:"You will  have control when you sign up with GhProfund get to choose the type of Projects you can donate to and keep track"
    },
    {id:3,
    title:" Make Requests",
    paragrapgh:"User can make a request as to project progress they will be able to see it on their dashboard an know how crucial their donation was"
    }
  ]




  return (
    <>
      <div className=' bg-indigo-800 py-24 text-slate-100'>
        
        <div className='mb-10'>
            <h3 className='text-center'> What is the GhaProfund?</h3>
        <p className=' px-10 text-center '>This platform is the best when it comes to searching and funding stalled Government Project</p>
        </div>
        
      <div className=' h-full lg:flex lg:justify-center lg:items-center md:flex  md:px-3  md:flex-wrap'> 


      {aboutCards.map ((aboutCards) =>(
     <div className='p-5 rounded-md mb-10 mx-auto bg-slate-50 text-slate-900   shadow-md h-64 w-56'key={aboutCards.id}>
        <img src="" alt="" />
        <h3 className='mb-5'>{aboutCards.title}</h3>
        <p className='mb-5'>{aboutCards.paragrapgh}</p>
          <Link to="/" className='p-5'>
            <button className=''>
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

