import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10'>
             <div className='md:w-1/2 flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                    
                    
            {/*....left side */}
            <div>
            <p className='text-3xl md:text-4xl lg:text-3xl text-blue font-semibold leading-tight md:leading-tight lg:leading-tight'>Learnin Management System</p>
            </div>
            <div>
               
            </div>
            {/**right side */}
            <div className='md:w-1/2 relative'>
            <img className='' src={assets.l1}/>
            </div>
        </div>
        </div>
    )
}

export default Header