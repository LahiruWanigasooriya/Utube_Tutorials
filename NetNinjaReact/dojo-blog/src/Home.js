import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

export const Home = () => {

 const {data:blogs,isLoading,error} = useFetch('http://localhost:3000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
