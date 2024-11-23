import React from 'react'
import logo from '../Assets/Untitled design.png'
import imag from '../Assets/img4.jpg'

function SchemeCard({scheme}) {
  return (
    <div className='group relative w-full border border-cyan-500 hover:border-2 transition-all h-[400px] overflow-hidden rounded-lg sm:w-[430px]'>
            <img src={imag} alt=""  className='h-[260px] w-full object-contain group-hover:h-[200px] transition-all duration-300 z-20'/>
        <div className='p-3 flex flex-col gap-2 '>
            <p className='text-lg font-semibold '>{scheme.name}</p>
            <div className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'>
                {scheme.description}
            </div>
        </div>
    </div>
  )
}

export default SchemeCard