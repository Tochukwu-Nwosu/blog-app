import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {
  const [ blogs, setBlogs ] = useState([])
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:8000/blogs')
        .then( response => {
            setBlogs(response.data) 
            setError('')
            setLoading(false)
        })
        .catch( err => {
            err.message === "Network Error" ? 
                setError("Network Error!") : 
                setError('Data Not Found!')
            setBlogs([])
            setLoading(false)
        })
  }, [])
  
  return (
    <div className="my-6">
      <h1 className="text-xl sm:text-4xl 2xl:text-5xl my-2 font-semibold text-blue-600">My Blogs</h1>
      { loading && <div className="py-2 xl:py-3">Loading...</div> }
      { error && <div className="py-2 xl:py-3">{error}</div> }
      { blogs && (
        blogs.map(({ id, title, author }) => (
            <div key={id} className="my-6 px-4 2xl:px-5 py-2 2xl:py-3 shadow-sm rounded-md hover:shadow-md ease-in-out duration-100" >
                <h2 className="text-lg sm:text-xl 2xl:text-2xl py-1 font-semibold text-blue-600">{title}</h2>
                <p className="2xl:text-lg py-1 text-gray-600 italic">Written by {author.name}</p>
            </div>
        ))
      )}
      
    </div>
  )
}

export default Home
