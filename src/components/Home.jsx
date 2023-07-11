import { NavLink } from "react-router-dom"
import useFetch from "./useFetch"

const Home = () => {
  const { data: blogs, error, loading } = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="sm:my-6">
      <h1 className="text-3xl sm:text-4xl 2xl:text-5xl my-2 font-semibold text-blue-600">My Blogs</h1>
      { loading && <div className="py-2 xl:py-3">Loading...</div> }
      { error && <div className="py-2 xl:py-3">{error}</div> }
      { blogs && (
        blogs.map(({ id, title, author }) => (
          <NavLink key={id} to={`/blogs/${id}`}>
            <div className="my-6 px-4 2xl:px-5 py-2 2xl:py-3 shadow-sm rounded-md hover:shadow-md ease-in-out duration-100" >
                <h2 className="text-lg sm:text-xl 2xl:text-2xl py-1 font-semibold text-blue-600">{title}</h2>
                <p className="2xl:text-lg py-1 text-gray-600 italic">Written by {author.name}</p>
            </div>
          </NavLink>
        ))
      )}
      
    </div>
  )
}

export default Home
