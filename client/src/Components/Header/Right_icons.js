import React from 'react'
import {Link} from 'react-router-dom';
import './Right_icons.css'

let Right_icons = () => {
    return (
        <div className='right_icons'>
            <Link to='#' className='search_video_icon'>
                <img  className='aside_menu_img' src="image/search-button_icon.png" alt='search_video'/>
            </Link>
            <Link to='#' className='make_video_icon noActive'>
                <img  className='aside_menu_img' src="image/video-add-button_icon.png" alt='make_video'/>
            </Link>
            <Link to='#' className='youtube_apps_icon noActive'>
                <img  className='aside_menu_img' src="image/show-apps-button_icon.png" alt='show_apps'/>
            </Link>
            <Link to='#' className='notification_icon noActive'>
                <img  className='aside_menu_img' src="image/bell_icon.png" alt='bell_info'/>
            </Link>
            <Link to='#' className='user_logo_icon noActive'>
                <img  className='aside_menu_img' src="image/user-button_icon.png" alt='my_cabinet'/>
            </Link>
        </div>
    )
}

export default Right_icons