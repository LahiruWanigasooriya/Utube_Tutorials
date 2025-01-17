import React from 'react'

export const Home = () => {

  const handleClick = (e) => {
    console.log("hello ", e);
  }

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('lahiru', e)}>Click me Again</button>
    </div>
  )
}
