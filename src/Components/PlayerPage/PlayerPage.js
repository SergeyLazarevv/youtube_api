import React from 'react'
import './PlayerPage.css'
import { connect } from 'react-redux'
import VideoPreview from '../VideoPreview/SearchVideoPreview'

let PlayerPage = ({currentPlayVideo,main100Videos}) => {
    let ID = currentPlayVideo.id.videoId ? currentPlayVideo.id.videoId : currentPlayVideo.id
        return ( 
            <div className='playerPage'>
                <div className='videoPlayer'>
                    <iframe src={'https://www.youtube.com/embed/'+ ID} title={ID}></iframe> 
                    <h4>{/*props.video.snippet.title*/}</h4>
                </div>
                <div className='nextVideos'>
                    {main100Videos.map((video,index)=> <VideoPreview 
                    
                    id={video.id}
                    videoImage={video.snippet.thumbnails.medium.url} 
                    key={index}
                    likes={video.statistics.viewCount}
                    channelTitle={video.snippet.channelTitle}
                    title={video.snippet.title}
                    description={video.snippet.description}/>)}
                </div>
            </div>
        )
}
let mapStateToProps = (state) => {
    return {
        currentPlayVideo: state.currentVideo,
        main100Videos: state.main100Videos
    };
  }

export default connect(mapStateToProps)(PlayerPage);