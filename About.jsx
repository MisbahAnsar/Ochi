import React from 'react'

const About = () => {
  console.log("Jo bhi console check kiya wo gay.")
  return (
    <div className='w-full py-20 px-[4.5vw] bg-[#CDEA68] rounded-t-3xl text-black'>
      <h1 className='font-[neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-16 border-[#90a158]'>
        <div className='w-1/2'>
          <h1 className='text-7xl'>Our approach:</h1>
          <button className='flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh]'><img className='rounded-3xl w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About