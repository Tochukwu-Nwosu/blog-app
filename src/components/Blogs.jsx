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
            { loading && <div className="txt-info">Loading...</div> }
            { error && <div className="txt-info">{error}</div> }
            { blog && (
                <>
                    <h1 className="h1">{title}</h1>
                    <div className="w-full sm:mt-6 flex items-center gap-1 sm:gap-2">
                        <img src={author.imgSrc} alt="author's image" className="img-author" />
                        <p className="txt-author">Written by {author.name} {date}</p>
                    </div>
                    <div className="w-full my-3 sm:my-6">
                        <img src={image} alt="image" className="img-blog" />
                        <p className="txt-blog">{body}</p>
                    </div>
                    { param.id === '1' || param.id === '2' ? (
                        <button className="btn-delete opacity-50 cursor-not-allowed">Delete</button>
                      ) : (
                        <button className="btn-delete" onClick={handleDelete}>Delete</button>
                      )
                    }
                </>
            ) }
        </article>
    )
}

export default Blogs