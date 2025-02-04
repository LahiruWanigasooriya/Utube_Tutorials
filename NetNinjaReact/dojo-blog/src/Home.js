import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

export const Home = () => {

  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('lahiru');



  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setBlogs(data);
    }
    )
  }, [name]);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Lahiru")} title="Lahiru's Blogs" handleDelete={handleDelete} /> */}
      <button onClick={() => setName('udeshika')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}


export default Home;
