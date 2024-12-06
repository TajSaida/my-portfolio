import React from 'react'
import notFoundImag from '../../public/notfound-removebg-preview.png'
import Image from 'next/image'
export default function NotFound  ()  {
  return (
       <div className="flex justify-center items-center flex-col h-screen">
  <div className="flex items-center justify-center" >
    <Image className="" src={notFoundImag} alt="loading-img" />
    
  </div>
  <h1 className='text-xl'>404 Not Found Page</h1>
</div>
  )
}

  