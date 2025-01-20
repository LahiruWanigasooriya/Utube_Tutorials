import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList';

export const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "My first blog", body: "This is my first blog", author: "Lahiru", id: 1 },
    { title: "My second blog", body: "This is my second blog", author: "Udeshika", id: 2 },
    { title: "My third blog", body: "This is my third blog", author: "Lahiru", id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog)=>blog.author==="Lahiru")} title="Lahiru's Blogs"/>
    </div>
  );
}


export default Home;
