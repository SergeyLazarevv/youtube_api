import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import addPlayVideo from '../../Actions/set_play_video'

import './VideoPreview.css'

let VideoPreview = ({ addPlayVideo,main100Videos,id,setPlayVideo,title,channelTitle,likes,videoImage }) => {
    setPlayVideo = (event) => {
        console.log(event.target.parentNode)
        main100Videos.forEach((item=>{
            if (item.id === event.target.parentNode.id) {
                addPlayVideo(item);
            }
        }))
    }
    return (
        <Link to='/PlayerPage' className='videoPreview' id={id} onClick={setPlayVideo}>  
            <img src={videoImage} className='videoPreview_image' alt='video_image'></img>
            <div className='videoPreviewInfo'>
                <p className='title'>{title}</p>
                <h5><img src='image/checkmark_icon.png' className='checkmark' alt='checkmark_logo'></img>{channelTitle}</h5>
                <span>{likes + ' просмотров'}</span>
            </div>   
        </Link>
    )
}
let mapStateToProps = (state) => {
    return {
        main100Videos: state.main100Videos
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
          addPlayVideo: (data) => {
            dispatch(addPlayVideo(data))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(VideoPreview)