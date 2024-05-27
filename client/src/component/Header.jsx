import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
    return (

        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl max-auto p-6'>
                <Link to='/'>
                    <h1 className='font-bold text-xl sm:text-3xl flex flex-wrap'>
                        <span className='text-slate-500'>
                            BuY
                        </span>
                        <span className='text-slate-800'>
                            SeLL
                        </span>
                    </h1>
                </Link>
                <form className="bg-slate-100 p-2 rounded-xl flex items-center">
                    <input type='text'
                        placeholder='Search...'
                        className='bg-transparent foc   us:outline-none w-24 sm:w-64'

                    ></input>
                    <FaSearch className='text-slate-800 cursor-pointer'></FaSearch>


                </form>
                <ul className='flex gap-8'>

                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>About</li>
                    </Link>
                    <Link to='/signup'>
                        <li className='text-slate-600 hover:underline cursor-pointer'>Sign-in</li>
                    </Link>
                </ul>
            </div>

        </header>

    )
}
