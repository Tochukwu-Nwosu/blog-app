

const NewBlog = () => {
  const handleSubmit = () => {

  }

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl 2xl:text-5xl my-4 font-semibold text-blue-600">Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Enter title:</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div>
            <label htmlFor="image">Enter image url:</label>
            <input type="url" name="image" id="image" required />
        </div>
        <div>
            <label htmlFor="date">Select date</label>
            <input type="date" name="date" id="date" required />
        </div>
        <div>
            <label htmlFor="authorName">Enter author name:</label>
            <input type="text" name="authorName" id="authorName" required />
        </div>
        <div>
            <label htmlFor="authorImage">Enter author image url:</label>
            <input type="url" name="authorImage" id="authorImage" required />
        </div>
        <div>
            <label htmlFor="body">Blog body:</label>
            <textarea name="body" id="body" required></textarea>
        </div>
        <button>Add blog</button>
      </form>
    </div>
  )
}

export default NewBlog
