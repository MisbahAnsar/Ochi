import React from 'react'

const Feature = () => {
  return (
    <div className='w-full py-16'>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl tracking-tighter font-["Founders Grotesk Light"]'>Featured Projects</h1>
            
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div className="cardcontainer relative w-1/2 h-[75vh]">
                  <div className='w-full h-full rounded-xl overflow-hidden'>
                <h1 className='absolute text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders Grotesk Light"]'>
                  {"FYDE".split('').map((item, index) => (
                    <span>{item}</span>
                  ))}
                </h1>
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img1" />
                  </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh]">
                  <div className='w-full h-full rounded-xl overflow-hidden'>
                <h1 className='absolute text-[#CDEA68] z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders Grotesk Light"]'>
                  {"VISE".split('').map((item, index) => (
                    <span>{item}</span>
                  ))}
                </h1>
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img1" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature