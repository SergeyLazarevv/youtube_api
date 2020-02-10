import React from 'react'
import './Video.css'

let Video = (props) => {
    return (
        <iframe className='video' 
                src={'https://www.youtube.com/embed/'+props.videoId}   
                title={props.title}
                key={props.key}>

        </iframe>
    )
}

export default Video