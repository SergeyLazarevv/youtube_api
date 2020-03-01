import React from 'react'
import './PlayerPage.css'
import { connect } from 'react-redux'

let PlayerPage = ({currentPlayVideo}) => {
    let ID = currentPlayVideo.id.videoId ? currentPlayVideo.id.videoId : currentPlayVideo.id
        return ( 
            <div className='playerPage'>
                <div className='videoPlayer'>
                    <iframe src={'https://www.youtube.com/embed/'+ ID} title={ID}></iframe> 
                    <h4>{/*props.video.snippet.title*/}</h4>
                </div>
                <div className='nextVideos'>
                    <span>next videos...in process</span>
                </div>
            </div>
        )
}
let mapStateToProps = (state) => {
    return {
        currentPlayVideo: state.currentVideo
    };
  }

export default connect(mapStateToProps)(PlayerPage);