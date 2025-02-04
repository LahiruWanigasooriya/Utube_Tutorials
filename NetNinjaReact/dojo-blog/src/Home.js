import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

export const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogssss')
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch data for the resource');
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
