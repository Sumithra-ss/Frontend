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
                <a href="" className='class="text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500"' >
                    Book Appoinment
                    </a>
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