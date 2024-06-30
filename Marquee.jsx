import { motion } from 'framer-motion'
import { Linear } from 'gsap'
import React from 'react'

const Marquee = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".2" 
      className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] flex'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}  className='text-[20vw] leading-none tracking-tighter font-["Founders Grotesk Light"] uppercase mb-2 -mt-6 font-bold pr-10'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}  className='text-[20vw] leading-none tracking-tighter font-["Founders Grotesk Light"] uppercase mb-2 -mt-6 font-bold pr-10'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee