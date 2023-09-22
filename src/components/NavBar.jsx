import { BsSun, BsMoonFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '../../data/constants'

// eslint-disable-next-line react/prop-types
const NavBar = ({ theme, toggleTheme }) => {
  const [ menu, setMenu ] = useState(false)  
    
  return (
    <nav className="max-w-[1024px] px-4 mx-auto border-b-2 dark:border-gray-800">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl text-blue-600 py-4 font-semibold">Tk Blog</h1>
        <div className="flex items-center">
            <ul className="hidden sm:flex items-center text-gray-600 dark:text-gray-400"> 
                { navLinks.map(
                    link => <NavLink key={link.value} to={link.to} className="mx-2 p-2 hover:text-gray-400 dark:hover:text-gray-200">{link.value}</NavLink>
                ) }
            </ul>
            { theme === 'light' ? (
                    <BsMoonFill 
                        size={18} 
                        className='mx-2 cursor-pointer' 
                        onClick={() => toggleTheme()} 
                    />
                ) : (
                    <BsSun
                        size={18} 
                        className='mx-2 cursor-pointer text-gray-400' 
                        onClick={() =>  toggleTheme()} 
                    />
                ) 
            }
            <AiOutlineMenu 
                size={25} 
                className='sm:hidden mx-2 cursor-pointer dark:text-gray-400' 
                onClick={() => setMenu(true)} 
            />
        </div>
        {/* mobile menu */}
        { menu && (
            <div className='sm:hidden absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-white/50 backdrop-blur-md z-10 dark:bg-slate-950/90'>
                <ul className='flex flex-col justify-center items-center'> 
                    { navLinks.map(
                        link => <NavLink key={link.value} to={link.to} className="p-2 text-lg text-gray-800 font-semibold hover:text-gray-500 hover:scale-110 ease-in-out duration-100 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => setMenu(false)}>{link.value}</NavLink>
                    ) }
                </ul>
                <AiOutlineClose 
                    size={25} 
                    className='absolute top-4 right-4 cursor-pointer dark:text-gray-400'
                    onClick={() => setMenu(false)}
                />
            </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
