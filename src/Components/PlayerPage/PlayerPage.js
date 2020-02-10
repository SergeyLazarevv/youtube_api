import React from 'react'
import './PlayerPage.css'
//import {Redirect} from 'react-router-dom'

let PlayerPage = (props) => {
    console.log(props)
    let ID = props.video.id.videoId ? props.video.id.videoId : props.video.id
    console.log(ID)
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

export default PlayerPage;