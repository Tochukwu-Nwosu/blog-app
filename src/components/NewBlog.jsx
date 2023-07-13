import { useState } from "react"
import moment from "moment"

const NewBlog = () => {
  const [ data, setData ] = useState({
    title: '',
    image: '',
    date: moment().format('LL'),
    author: {
        imgSrc: '',
        name: ''
    },
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

    console.log(data)
  }

  const { title, image, author: { imgSrc, name }, body } = data
  
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
