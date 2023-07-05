import { MdOutlineDarkMode } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
  return (
    <nav className="max-w-[1024px] px-4 mx-auto border-b-2">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl text-blue-600 py-4 font-semibold">Tk Blog</h1>
        <div className="flex items-center">
            <ul className="hidden sm:flex items-center text-gray-500"> 
                <li className="mx-2 p-2">Home</li>
                <li className="mx-2 p-2">New Blog</li>
            </ul>
            <MdOutlineDarkMode size={25} className='mx-2 cursor-pointer' />
            <AiOutlineMenu size={25} className='sm:hidden mx-2 cursor-pointer' />
        </div>
        {/* mobile view */}
        <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-md'>
            <ul className='flex flex-col justify-center items-center text-gray-500'> 
                <li className="p-2 text-lg">Home</li>
                <li className="p-2 text-lg">New Blog</li>
            </ul>
            <AiOutlineClose 
                size={25} 
                className='absolute top-4 right-4 cursor-pointer'
            />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
