import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section
      data-scroll-speed="-.3" 
      className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-32 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
          return <div className="masker">
            <div className='w-fit flex items-end '>
              {index === 1 && (
                <motion.div
                 initial={{ width: 0 }} 
                 animate={{ width: "8vw" }} 
                 transition={{ ease: [0.76, 0, 0.24, 1], duration:1}} 
                 className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative top-[1.4vw] bg-green-500">
                </motion.div>)}
              <h1 className='pt-[2vw] -mb-[1.8vw] uppercase text-[8vw] leading-[7.5vw] tracking-tighter font-["Founders Grotesk Light"] font-medium'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and provate companies", "From the firsth pitch to IPO"].map((item,index) => (
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md capitalize rounded-full'>start the project</div>
          <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full'>
            <span className="rotate-[45deg]"></span>
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage




{/* <h1 className='flex items-center uppercase text-9xl leading-[5.5vw] tracking-tighter font-[" FoundersGrotesk, Roboto, sans-serif"] font-medium'>We create</h1> */}


// <div className='textstructure mt-40 px-16'>
//         <div className='masker'>
//           <div className='w-fit flex items-center'>
//             <h1 className='flex items-center uppercase text-9xl leading-[5.5vw] tracking-tighter font-[" FoundersGrotesk, Roboto, sans-serif"] font-medium'>We create</h1>
//           </div>
//         </div>
//         <div className='masker'>
//           <div className='w-fit flex items-center'>
//             <div className='w-[9vw h-[5vw] bg-red-300]'>
//             <h1 className='flex items-center uppercase text-9xl  tracking-tighter font-[" FoundersGrotesk, Roboto, sans-serif"] font-medium'>Eye Opening</h1>
//           </div></div>
//         </div>
//         <div className='masker'>
//           <div className='w-fit flex items-center'>
//             <h1 className='flex items-center uppercase text-9xl leading-[5.5vw] tracking-tighter font-[" FoundersGrotesk, Roboto, sans-serif"] font-medium'>Presentations</h1>
//           </div>
//         </div>
//       </div>