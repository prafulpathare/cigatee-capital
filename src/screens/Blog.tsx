import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Blog.css';
import Header from '../components/Header';

interface Blog {
  title: string;
  content: string;
  time: string;
  author: string;
}


function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    fetchBlogs();

  }, []);


  const fetchBlogs = () => {
    fetch('data/blogs.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((response) => response.json()).then((data) => setBlogs(data.blogs));

  }

  return (
    <div >
      <Header />

      <div className="blogs-pane">


        {blogs.map((blog: Blog) => {
          return (
            <div className="blog-wrapper">
              <div className="title">{blog.title}</div>
              <div className="author">{blog.author}</div>
              <div className="content">
                {blog.content.split("\n").map((c: string) => <div>{c}</div>)}
              </div>
              <div className="time">{new Date(Date.parse(blog.time)).toISOString()}</div>

            </div>
          )
        })}


      </div>
    </div>
  );
}

export default Blog;
