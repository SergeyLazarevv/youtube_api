import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './SearchVideoPreview.css'

let SearchVideoPreview = ({ id,setPlayVideo,title,channelTitle,description,videoImage }) => {
    //remade
    setPlayVideo = (event) => {
        videos.forEach((item=>{
            if (item.id.videoId === event.target.parentNode.id) {
                this.props.addPlayVideo(item)
            }
        }))
    }
    return (
        <Link to='/PlayerPage' className='searchVideoPreview' id={id} onClick={setPlayVideo}>  
            <img src={videoImage} className='searchVideoPreview_image' alt='search_logo'></img>
            <div className='searchVideoPreviewInfo'>
                <h4>{title}</h4>
                <h5><img src='image/checkmark_icon.png' className='checkmark' alt='checkmark_logo'></img>{channelTitle}</h5>
                <span>{description}</span>
            </div>   
        </Link>
    )
}
let mapStateToProps = (state) => {
    return {
        videos: state.searchedVideos
    };
  }

let mapDispatchToProps = (dispatch) => {
    return {
        addPlayVideo: (data) => {
            dispatch(addPlayVideo(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchVideoPreview)