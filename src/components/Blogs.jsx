import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const Blogs = () => {
    const param = useParams()
    const { data: blog, error, loading } = useFetch(`http://localhost:8000/blogs/${param.id}`)
    const { title, date, author, image, body } = blog
    console.log(blog)

    return (
        <article className="my-6">
            { loading && <div className="py-2 xl:py-3">Loading...</div> }
            { error && <div className="py-2 xl:py-3">{error}</div> }
            { blog && (
                <>
                    <h1 className="text-xl">{title}</h1>
                    <div>
                        <img src={author.imgSrc} alt="author's image" />
                        <p>Written by {author.name} {date}</p>
                    </div>
                    <div>
                        <img src={image} alt="image" />
                        <p>{body}</p>
                    </div>
                </>
            ) }
        </article>
    )
}

export default Blogs