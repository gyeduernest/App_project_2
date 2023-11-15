import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {


const aboutCards = [
    {id:1,
    title:"Transparency",
    paragrapgh:"The Platform will Offer and assure people of a dashboard which will allow them to take control of how they ontribute their money towards Projects"},
    {id:2,
    title:"Ease of Access",
    paragrapgh:"You will  have control when you sign up with GhProfund get to choose the type of Projects you can donate to"
    },
    {id:3,
    title:" Make Requests",
    paragrapgh:"User can make a request as to project progress they will be able to see it on their dashboard an know how crucial their donation was"
    }
  ]




  return (
    <>
      <div>
        
        
        <h2> What is the GhaProfund?</h2>
      </div>
      
      <div className=' mb-20 flex flex-wrap gap-10'> 


      {aboutCards.map ((aboutCards) =>(
     <div className='p-5 rounded-md shadow-md border-2 border-slate-300 w-56'key={aboutCards.id}>
        <img src="" alt="" />
        <h3>{aboutCards.title}</h3>
        <p>{aboutCards.paragrapgh}</p>
          <Link to="/">
            <button>
              Donate Now
            </button>
          </Link>
      
   </div>
        
  
      ))}  
 
      </div>

 

          

 
    </>
  )
}

