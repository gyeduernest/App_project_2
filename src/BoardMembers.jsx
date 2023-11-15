import React from 'react'
import { Link } from 'react-router-dom'

export default function BoardMembers() {
  const members = [
    {id:1,
    name:"Ernest Gyedu",
    position:"Project Lead",
    bio:" "},
    {id:2,
    name:"Jeremiah Baah",
    position:"Community manager",
    bio:"lorem"},
    {id:3,
    name:"Calculus Nii",
    position:"Systems Manager",
    bio:"lorem"}
  ]
  
  return (
    <>

<div>
      <div className=''> 


{members.map ((members) =>(
<div className='p-5 rounded-md shadow-md border-2 border-slate-300 w-56'key={members.id}>
  <img src="" alt="" />
  <h2>{members.name}</h2>
  <h3>{members.position}</h3>
  <p>{members.bio}</p>
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
