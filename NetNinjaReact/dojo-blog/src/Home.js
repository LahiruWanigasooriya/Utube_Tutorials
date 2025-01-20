import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList';

export const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "My first blog", body: "This is my first blog", author: "Lahiru", id: 1 },
    { title: "My second blog", body: "This is my second blog", author: "Udeshika", id: 2 },
    { title: "My third blog", body: "This is my third blog", author: "Ula", id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
  );
}


export default Home;
