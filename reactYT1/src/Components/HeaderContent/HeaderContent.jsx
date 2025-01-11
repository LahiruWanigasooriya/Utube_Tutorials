import React from 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
    return (
        <div id='navcontent'>
            <a href='https://www.youtube.com/'></a>
            <div>
                <MenuLink linkname="Home" url="#home" />
                <MenuLink linkname="About" url="#about" />
                <MenuLink linkname="App" url="#app" />
                <MenuLink linkname="Contact" url="#contact" />
            </div>
        </div>
    )
}

export default HeaderContent