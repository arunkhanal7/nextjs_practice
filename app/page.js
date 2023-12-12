"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();
  return (
    <>
    <h1>Home Page</h1>
    <button className='border px-2 py-2 h-max w-max bg-black text-white' onClick={()=> router.push("about")}>about page</button>
    
    </>
  )
}

export default Home