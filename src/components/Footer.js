import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex bg-white sticky bottom-0 justify-center items-center h-10 mt-5'>
        <p>2024 <Link to="/"><span className='text-cyan-800'>JokeBox</span></Link> - All rights reserved</p>
    </div>
  )
}

export default Footer