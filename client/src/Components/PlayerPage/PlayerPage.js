import React from 'react'
import './PlayerPage.css'
import { connect } from 'react-redux'
import VideoPreview from '../VideoPreview/SearchVideoPreview'
import VideoInfo from './VideoInfo'
import { useEffect } from 'react'

let PlayerPage = ({ currentPlayVideo,main100Videos }) => {
    useEffect(() => {
        /* scroll page to top after render or update */
        window.scrollTo(0,0)
      })
    let ID = currentPlayVideo.id.videoId ? currentPlayVideo.id.videoId : currentPlayVideo.id;
    let nextVideos = main100Videos.map((video,index) => {
        if (currentPlayVideo.id !== video.id) return <VideoPreview 
            id={video.id}
            videoImage={video.snippet.thumbnails.medium.url} 
            key={index}
            likes={video.statistics.viewCount}
            channelTitle={video.snippet.channelTitle}
            title={video.snippet.title}
            description={video.snippet.description}/>})
        return ( 
            <div className='playerPage'>
                <div className='videoPlayer'>
                    <iframe src={'https://www.youtube.com/embed/'+ ID} title={ID}></iframe> 
                    {/*console.log(currentPlayVideo)*/}
                    {/*Information block under video - view,likes,dislikes... */}
                    <VideoInfo video={currentPlayVideo}/>
                </div>
                <div className='nextVideos'>
                    {nextVideos}
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