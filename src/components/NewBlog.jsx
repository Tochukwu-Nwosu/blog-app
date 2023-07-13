import { useState } from "react"
import moment from "moment"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
      <h1 className="text-3xl sm:text-4xl 2xl:text-5xl my-4 font-semibold text-blue-600">Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Enter title:</label>
            <input type="text" name="title" id="title" value={title} required onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="image">Enter image url:</label>
            <input type="url" name="image" id="image" value={image} required onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="name">Enter author fullname:</label>
            <input type="text" name="name" id="name" value={name} required onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="imgSrc">Enter author image url:</label>
            <input type="url" name="imgSrc" id="imgSrc" value={imgSrc} required onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="body">Blog body:</label>
            <textarea name="body" id="body" value={body} required onChange={handleChange}></textarea>
        </div>
        <button>Add blog</button>
      </form>
    </div>
  )
}

export default NewBlog
