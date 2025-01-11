import React from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'
import MenuLink from './Components/MenuLink/MenuLink'

const App = () => {
  return (
    <>
      <div id='wrapper'>
        <HeaderContent />
        <BodyContent>{
          <button>Click Here</button>
        }</BodyContent>
        <BodyContent>{<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sit dolor facere repudiandae hic, tempora consequatur minima in commodi cumque, eaque necessitatibus similique veniam quisquam eum inventore officiis? Distinctio, laborum?</p>}</BodyContent>

        <MenuLink />
      </div>
    </>
  )
}

export default App
