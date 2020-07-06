import React from 'react'
import SearchVideoPreview from '../VideoPreview/SearchVideoPreview'
import { connect } from 'react-redux'
import addPlayVideo from '../../Actions/set_play_video'
import setVideosList from '../../Actions/set_videos_list'
import '../../Components/PlayList/PlayList.css'

import './Videos.css'
let Videos = ({videos}) => {
    return (
        <div className='videos'>
            {videos.length>0 ? videos.map((video,index)=><SearchVideoPreview 
                id={video.id.videoId}
                videoImage={video.snippet.thumbnails.high.url} 
                key={index}
                channelTitle={video.snippet.channelTitle}
                title={video.snippet.title}
                description={video.snippet.description}
                />) : <h1>Loading...</h1>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        videos: state.searchedVideos
    };
  }

let mapDispatchToProps = (dispatch) => {
    return {
        addSearchVideos: (data) => {
          dispatch(setVideosList(data))  
        },
        addPlayVideo: (data) => {
            dispatch(addPlayVideo(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);