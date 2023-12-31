import React from 'react'
import { Link } from 'react-router-dom'

export default function BoardMembers() {
  const members = [
    {id:1,
    name:"Ernest Gyedu",
    position:"Project Lead",
    bio:"The project lead is reponsible for the overall running development and deployment of this project he is also looking for funds and contributors",
    imageUrl:"src/images/image1.png"
  },
    {id:2,
    name:"Jeremiah Baah",
    position:"Technical Director",
    bio:"The tech director will be responsible for the development coding and recruitment of volunteers",
    imageUrl:"src/images/image2.png"
  },
    {id:3,
    name:"Calculus Nii",
    position:"Marketing manager",
    bio:"The marketer of this project will be responsible for commercializing the product",
    imageUrl:"src/images/image3.png"
  }
  ]
  
  return (
    <>

<div className='bg-slate-100 py-10'>
      <div className=''> 


{members.map ((members) =>(
<div className='p-5 mx-auto mb-10 rounded-md shadow-md  w-56'key={members.id}>
    <img src={members.imageUrl} alt="" className='border-4 border-pink-400 w-24 h-24 rounded-full' />
  <div className='w-24 h-24 rounded-full flex mx-auto '>
  </div>
  <h4 className='text-slate-900 '>{members.name}</h4>
  <h5 className='mb-2'>{members.position}</h5>
  <p className='text-slate-500 text-center mb-5'>{members.bio}</p>
    <Link to="/">
      <button className='w-full py-2 bg-blue-500 shadow-md rounded-md font-semibold
     text-white focus:ring-4 focus:ring-pink-500'>
        Get in Contact
      </button>
    </Link>

</div>
  

))}  

</div>
</div>


    
    </>
  )
}
