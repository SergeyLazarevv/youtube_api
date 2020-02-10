import React from 'react'
import LeftMenu from './Left_menu'
import Search from './Search'
import RightIcons from './Right_icons'
import './Header.css'


let Header = (props) => {
    return (
        <header>
            <LeftMenu />
            <Search history={props.history}/>
            <RightIcons />
        </header>
    )
}

export default Header