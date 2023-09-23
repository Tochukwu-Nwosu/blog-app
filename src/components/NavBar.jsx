import { BsSun, BsMoonFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '../../data/constants'
import useTheme from './useTheme'

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const [ menu, setMenu ] = useState(false)  
  const [ theme, toggleTheme ] = useTheme()
    
  return (
    <nav className="max-w-[1024px] px-4 mx-auto border-b-2 dark:border-gray-800">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl text-blue-600 py-4 font-semibold">Tk Blog</h1>
        <div className="flex items-center">
            <ul className="hidden sm:flex items-center text-gray-600 dark:text-gray-400"> 
                { navLinks.map(
                    link => <NavLink key={link.value} to={link.to} className="navlink">{link.value}</NavLink>
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
            <div className='mobile-menu'>
                <ul className='flex flex-col justify-center items-center'> 
                    { navLinks.map(
                        link => <NavLink key={link.value} to={link.to} className="mobile-navlink" onClick={() => setMenu(false)}>{link.value}</NavLink>
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
