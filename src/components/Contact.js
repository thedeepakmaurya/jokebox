import React from 'react'

const Contact = () => {
  return (
    <div className='h-[500px] flex flex-col justify-center items-center'>
    <h1 className='font-bold text-2xl pb-5'>Contact </h1>
    <form className='flex flex-col'>
      <label>Name</label>
      <input className='mb-2 pl-2 w-96 border border-zinc-500 outline-none rounded-sm' type='text' name='name' placeholder='Your name..' required/>
      <label>Email</label>
      <input className='w-96 pl-2  mb-2  border border-zinc-500 outline-none rounded-sm' type='text' name='name' placeholder='Your email..' required/>
      <label>Comment</label>
      <input className='w-96  pl-2  text-wrap h-40  border border-zinc-500 outline-none rounded-sm' type='text' name='name' placeholder='Your comment..' required/>
      <button className='mt-2  rounded-sm border border-zinc-500 '>Submit</button>

      </form>
    </div>
  )
}

export default Contact