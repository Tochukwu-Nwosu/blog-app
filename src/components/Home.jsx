import { useState } from "react"

const Home = () => {
  const [ blogs, setBlogs ] = useState([
    {
        id: 1,
        title: "What is Machine Learning?",
        author: "Isak Gupta",
    },
    {
        id: 2,
        title: "IoT, the future?",
        author: "Micheal Mitrovic",
    }
  ])

  return (
    <div className="my-6">
      <h1 className="text-xl sm:text-4xl xl:text-5xl my-2 font-semibold text-blue-600">My Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id} className="my-6 px-4 py-2 shadow-sm rounded-md hover:shadow-md ease-in-out duration-100" >
            <h2 className="text-lg xl:text-2xl py-1 sm:py-2 font-semibold text-blue-600">{blog.title}</h2>
            <p className="xl:text-lg py-1 sm:py-2 text-gray-600 italic">Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
