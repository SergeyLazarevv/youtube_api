import React from 'react'
import {Link} from 'react-router-dom';
import './Left_menu.css'

let Left_menu = () => {
    return (
        <div className='header_left'>
            <Link to='/'>
                <img  className='header_menu_img' src="image/burger_line.svg" alt='menu'/>
            </Link>
            <Link to='/'>
                <img className='header_logo' src="image/youtube_logo.jpg" alt='youtube_logo'/>
            </Link>
        </div>
    )
}

export default Left_menu