import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}) => {
  return (
    <div className='p-10 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 flex flex-col items-center justify-center '>
        {/* bg-gradient-to-br :- means the color is given from top-right (tr) to bottom-right this is thr tailwind css utility class */}
        <h2 className='text-3xl font-bold text-white'>Browse All Tmplates</h2>
        <p className='text-white'>What would you like to creat today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5'>
                <Search className='text-primary'/>
                <input type="text" placeholder='Search'
                className='bg-transparent  outline-none'onChange={(e)=>onSearchInput(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection