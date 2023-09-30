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
  
  return (
    <div>
      <h1 className="h1">Add Blog</h1>
      <form onSubmit={handleSubmit} className="px-2 sm:px-4 2xl:px-5 my-8 text-gray-800 dark:text-gray-400">
        <div className="input-wrapper">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={title} required onChange={handleChange} className="input" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="image">Blog image url:</label>
            <input type="url" name="image" id="image" value={image} required onChange={handleChange} className="input" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="name">Author fullname:</label>
            <input type="text" name="name" id="name" value={name} required onChange={handleChange} className="input" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="imgSrc">Author image url:</label>
            <input type="url" name="imgSrc" id="imgSrc" value={imgSrc} required onChange={handleChange} className="input" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="body">Blog body:</label>
            <textarea name="body" id="body" value={body} required onChange={handleChange} className="resize-none input"></textarea>
        </div>
        <button className="btn-add">Add blog</button>
      </form>
    </div>
  )
}

export default NewBlog
