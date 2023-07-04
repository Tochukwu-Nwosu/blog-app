
const NavBar = () => {
  return (
    <nav className="max-w-[1024px] px-4 mx-auto border-b-2">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl text-blue-600 py-4 font-semibold">Tk Blog</h1>
        <ul className="flex items-center text-gray-500">
            <li className="mx-2 p-2">Home</li>
            <li className="mx-2 p-2">New Blog</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
