import { useState } from "react"

const NewBlog = () => {
  const [ data, setData ] = useState({
    title: '',
    image: '',
    date: '',
    authorName: '',
    authorImage: '',
    body: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(data)
  }

  const { title, image, authorName, authorImage, body } = data

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
            <label htmlFor="authorName">Enter author name:</label>
            <input type="text" name="authorName" id="authorName" value={authorName} required onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="authorImage">Enter author image url:</label>
            <input type="url" name="authorImage" id="authorImage" value={authorImage} required onChange={handleChange} />
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
