import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div id='bodycontent'>
          <p>Main Content</p>
          {props.children}
        </div>
  )
}

export default BodyContent