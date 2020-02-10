import React from 'react'
import {Link} from 'react-router-dom'
import './SearchVideoPreview.css'

let SearchVideoPreview = (props) => {
    return (
        <Link to='/PlayerPage' className='searchVideoPreview' id={props.id} onClick={props.setPlayVideo}>  
            <img src={props.videoImage} className='searchVideoPreview_image' alt='search_logo'></img>
            <div className='searchVideoPreviewInfo'>
                <h4>{props.title}</h4>
                <h5><img src='image/checkmark_icon.png' className='checkmark' alt='checkmark_logo'></img>{props.channelTitle}</h5>
                <span>{props.description}</span>
            </div>   
        </Link>
    )
}

export default SearchVideoPreview