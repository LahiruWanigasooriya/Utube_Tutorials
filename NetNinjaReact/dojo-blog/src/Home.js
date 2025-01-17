import React from 'react'
import { useState } from 'react';

export const Home = () => {

  const [name,setName]=useState('lahiru');

  const handleClick = () => {
    setName('nisal');
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
