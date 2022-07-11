import React from 'react';
import { Link } from 'react-router-dom';
function BlogList({blogs, title}) {
  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((obj) => (
        <div className='blog-preview' key={obj.id}>
          <Link to={`/blogs/${obj.id}`}>
            <h2>{obj.title}</h2>
            <p>{obj.author}</p>
          </Link>   
        </div>
        ))}
    </div>
  )
}

export default BlogList