import React from 'react'
import {Link} from 'react-router-dom';
import './Left_menu.css'

let Left_menu = () => {
    return (
        <Link to='/' className='header_left'>
            <img className='header_logo' src="image/youtube_logo.jpg" alt='youtube_logo'/>
        </Link>
    )
}

export default Left_menu