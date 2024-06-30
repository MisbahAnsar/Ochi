import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-screen flex-col- bg-zinc-100 flex items-center px-24 gap-5">
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="hi" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-8'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex h-[50vh] gap-5 w-1/2'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="hi" />
              <button className='absolute px-5 py-1 border-2 rounded-full left-4 bottom-8'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="hi" />
              <button className='absolute px-5 py-1 border-2 rounded-full left-4 bottom-8'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards