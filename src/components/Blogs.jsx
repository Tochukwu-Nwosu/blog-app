import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const Blogs = () => {
    const param = useParams()
    const { data: blog, error, loading } = useFetch(`http://localhost:8000/blogs/${param.id}`)
    const { title, date, author, image, body } = blog

    return (
        <article className="my-6 px-4 2xl:px-5 py-2 2xl:py-3">
            { loading && <div className="py-2 xl:py-3">Loading...</div> }
            { error && <div className="py-2 xl:py-3">{error}</div> }
            { blog && (
                <>
                    <h1 className="text-xl sm:text-4xl 2xl:text-5xl my-4 font-semibold text-blue-600">{title}</h1>
                    <div className="w-full mt-6 mb-4 flex items-center gap-2">
                        <img src={author.imgSrc} alt="author's image" className="w-[50px] h-[50px] object-cover rounded-full" />
                        <p className="text-gray-600 italic">Written by {author.name} {date}</p>
                    </div>
                    <div className="w-full my-6">
                        <img src={image} alt="image" className="w-full h-[400px] object-cover mb-6" />
                        <p className="text-justify">{body}</p>
                    </div>
                </>
            ) }
        </article>
    )
}

export default Blogs