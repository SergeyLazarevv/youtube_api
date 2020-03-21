import React from 'react'
import SearchVideoPreview from '../../Components/VideoPreview/SearchVideoPreview'
import {connect} from 'react-redux'
import addPlayVideo from '../../Actions/set_play_video'
import setVideosList from '../../Actions/set_videos_list'
import '../../Components/PlayList/PlayList.css'

import './Videos.css'
class Videos extends React.Component {
    constructor(props) {
        super(props)
        this.scrollTop = React.createRef();
    }
    componentDidMount() {
        console.log(this.scrollTop.current.scrollTop)
        console.log(window.scrollX)
        this.scrollTop.current.scrollTop = 999;
    }
    componentDidUpdate() {
        console.log('inside update')
        console.log(this.scrollTop.current.scrollTop)
    }
    setPlayVideo = (event) => {
        this.props.videos.forEach((item=>{
            if (item.id.videoId === event.target.parentNode.id) {
                this.props.addPlayVideo(item)
            }
        }))
    }
    render() { 
        return (
            <div className='videos'>
                {this.props.videos.length>0 ? this.props.videos.map((video,index)=><SearchVideoPreview 
                    setPlayVideo={this.setPlayVideo}
                    id={video.id.videoId}
                    videoImage={video.snippet.thumbnails.high.url} 
                    key={index}
                    channelTitle={video.snippet.channelTitle}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    />) : <h1>Loading...</h1>}
                    <h1 ref={this.scrollTop}>TEST</h1>
            </div>
        )
    }
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