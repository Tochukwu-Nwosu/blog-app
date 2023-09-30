import { NavLink } from "react-router-dom"
import useFetch from "./useFetch"

const Home = () => {
  const { data: blogs, error, loading } = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="sm:my-6">
      <h1 className="h1">My Blogs</h1>
      { loading && <div className="txt-info">Loading...</div> }
      { error && <div className="txt-info">{error}</div> }
      { blogs && (
        blogs.map(({ id, title, author }) => (
          <NavLink key={id} to={`/blogs/${id}`}>
            <div className="blog-list-wrapper" >
                <h2 className="h2">{title}</h2>
                <p className="blog-list-txt">Written by {author.name}</p>
            </div>
          </NavLink>
        ))
      )}
      
    </div>
  )
}

export default Home
