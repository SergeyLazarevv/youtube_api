import React from 'react'
import {Link} from 'react-router-dom'
import './VideoPreview.css'

let VideoPreview = (props) => {
    return (
        <Link to='/PlayerPage' className='videoPreview' id={props.id} onClick={props.setPlayVideo}>  
            <img src={props.videoImage} className='videoPreview_image' alt='video_image'></img>
            <div className='videoPreviewInfo'>
                <p className='title'>{props.title}</p>
                <h5><img src='image/checkmark_icon.png' className='checkmark' alt='checkmark_logo'></img>{props.channelTitle}</h5>
                <span>{props.likes + ' просмотров'}</span>
            </div>   
        </Link>
    )
}

export default VideoPreview