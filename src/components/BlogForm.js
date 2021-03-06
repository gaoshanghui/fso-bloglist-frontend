import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })


  const handleBlogTitleChange = (event) => {
    setNewBlog({ ...newBlog, title: event.target.value })
  }

  const handleBlogAuthorChange = (event) => {
    setNewBlog({ ...newBlog, author: event.target.value })
  }

  const handleBlogUrlChange = (event) => {
    setNewBlog({ ...newBlog, url: event.target.value })
  }

  const handleCreate = (event) => {
    event.preventDefault()

    createBlog(newBlog)
    setNewBlog({ title: '', author: '', url: '' })
  }


  return (
    <div className="new-blog-form">
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>
            title:
            <input
              className="new-blog-form__title-input"
              type="text"
              value={newBlog.title}
              name="title"
              onChange={handleBlogTitleChange}
            />
          </label>
        </div>
        <div>
          <label>
            author:
            <input
              className="new-blog-form__author-input"
              type="text"
              value={newBlog.author}
              name="author"
              onChange={handleBlogAuthorChange}
            />
          </label>
        </div>
        <div>
          <label>
            url:
            <input
              className="new-blog-form__url-input"
              type="text"
              value={newBlog.url}
              name="url"
              onChange={handleBlogUrlChange}
            />
          </label>
        </div>
        <button type="submit" className="new-blog-form__submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm