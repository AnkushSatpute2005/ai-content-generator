import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const WelcomPage = () => {
    return (
        
          <div className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  h-fit w-screen text-white flex flex-col justify-center items-center' >
            {/* <h2 className='font-bold text-3xl'>Welcom</h2>
            <h3 className='font-bold text-3xl p-3'>to</h3> */}
            <h1 className='font-bold lg:text-8xl p-5 m-10 sm:text-4xl'>AI Containtent Generator</h1>
            <Link href={"/dashboard"}><button type="button" className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  rounded-full lg:px-10 lg:py-3.5 text-center lg:text-2xl sm:p-2 mb-10 sm:mb-5">Go to home &gt; </button></Link>
            
          </div>
       
      );
}

export default WelcomPage