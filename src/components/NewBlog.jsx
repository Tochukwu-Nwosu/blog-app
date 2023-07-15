import { useState } from "react"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import axios from "axios"


const NewBlog = () => {
  const navigate = useNavigate()
  const [ data, setData ] = useState({
    title: '',
    date: moment().format('LL'),  // displays current date
    author: {
        imgSrc: '',
        name: ''
    },
    image: '',
    body: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    
    name === 'imgSrc' || name === 'name' ? (
        setData({ ...data, author: { ...data.author, [name]: value } })
    ) : (
        setData({ ...data, [name]: value })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/blogs', data)
      .then( () => navigate('/') )    // redirects after POST
      .catch( err => console.log(err) )

  }

  const { title, author: { imgSrc, name }, image, body } = data
  
  // style form
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl 2xl:text-5xl my-4 font-semibold text-blue-600">Add Blog</h1>
      <form onSubmit={handleSubmit} className="px-2 sm:px-4 2xl:px-5 my-8 text-gray-800">
        <div className="my-4 flex flex-col gap-3 sm:text-lg 2xl:text-xl">
            <label htmlFor="title">Enter title:</label>
            <input type="text" name="title" id="title" value={title} required onChange={handleChange} className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:border-blue-400 focus:ring-blue-400" />
        </div>
        <div className="my-4 flex flex-col gap-3 sm:text-lg 2xl:text-xl">
            <label htmlFor="image">Enter image url:</label>
            <input type="url" name="image" id="image" value={image} required onChange={handleChange} className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:border-blue-400 focus:ring-blue-400" />
        </div>
        <div className="my-4 flex flex-col gap-3 sm:text-lg 2xl:text-xl">
            <label htmlFor="name">Enter author fullname:</label>
            <input type="text" name="name" id="name" value={name} required onChange={handleChange} className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:border-blue-400 focus:ring-blue-400" />
        </div>
        <div className="my-4 flex flex-col gap-3 sm:text-lg 2xl:text-xl">
            <label htmlFor="imgSrc">Enter author image url:</label>
            <input type="url" name="imgSrc" id="imgSrc" value={imgSrc} required onChange={handleChange} className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:border-blue-400 focus:ring-blue-400" />
        </div>
        <div className="my-4 flex flex-col gap-3 sm:text-lg 2xl:text-xl">
            <label htmlFor="body">Blog body:</label>
            <textarea name="body" id="body" value={body} required onChange={handleChange} className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:border-blue-400 focus:ring-blue-400"></textarea>
        </div>
        <button>Add blog</button>
      </form>
    </div>
  )
}

export default NewBlog
