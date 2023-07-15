import { useParams, useNavigate } from "react-router-dom"
import useFetch from "./useFetch"
import axios from "axios"

const Blogs = () => {
    const param = useParams()
    const navigate = useNavigate()
    const { data: blog, error, loading } = useFetch(`http://localhost:8000/blogs/${param.id}`)
    const { title, date, author, image, body } = blog

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/blogs/${param.id}`)
            .then( () => navigate('/') )
            .catch( err => console.log(err) )
    }

    return (
        <article className="sm:my-6 px-2 sm:px-4 2xl:px-5 py-2 2xl:py-3">
            { loading && <div className="py-2 xl:py-3">Loading...</div> }
            { error && <div className="py-2 xl:py-3">{error}</div> }
            { blog && (
                <>
                    <h1 className="text-3xl sm:text-4xl 2xl:text-5xl my-4 font-semibold text-blue-600">{title}</h1>
                    <div className="w-full sm:mt-6 flex items-center gap-1 sm:gap-2">
                        <img src={author.imgSrc} alt="author's image" className="w-[50px] h-[50px] object-cover rounded-full scale-75 sm:scale-100" />
                        <p className="text-gray-600 italic text-xs sm:text-base">Written by {author.name} {date}</p>
                    </div>
                    <div className="w-full my-3 sm:my-6">
                        <img src={image} alt="image" className="w-full h-[400px] object-cover mb-6 sm:mb-8" />
                        <p>{body}</p>
                    </div>
                    { param.id === '1' || param.id === '2' ? (
                        <button className="mt-4 px-3 py-2 bg-blue-600 text-gray-100 font-semibold rounded-md opacity-50 cursor-not-allowed">Delete</button>
                      ) : (
                        <button className="mt-4 px-3 py-2 bg-blue-600 text-gray-100 font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700" onClick={handleDelete}>Delete</button>
                      )
                    }
                </>
            ) }
        </article>
    )
}

export default Blogs