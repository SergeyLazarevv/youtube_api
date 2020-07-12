import React from 'react'
import {Link} from 'react-router-dom';
import mobileSearchVisible from '../../Actions/change_mobileSearch_visible'
import {connect} from 'react-redux'
import './Right_icons.css'

let Right_icons = (props) => {
    return (
        <div className='right_icons'>
            <Link to='#' className='search_video_icon' onClick={props.mobileSearchToggle}>
                <img  className='aside_menu_img search_logo' src="image/search-button_icon.png" alt='search_video'/>
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

let mapDispatchToProps = (dispatch) => {
    return {
        mobileSearchToggle: () => {
            dispatch(mobileSearchVisible())  
          }
    }
}

export default connect(null,mapDispatchToProps)(Right_icons);