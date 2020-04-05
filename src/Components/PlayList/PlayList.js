import React from 'react'
import './PlayList.css'
import VideoPreview from '../VideoPreview/VideoPreview'
import VideosGet from '../../youtubeVideosGetApi'
import set100Videos from '../../Actions/set_100_videos'
//import addPlayVideo from '../../Actions/set_play_video'
import ShowMoreBtn from './ShowMoreBtn'
import {connect} from 'react-redux'

let API_KEY_ = 'AIzaSyDrtW5dLU5FZwf-DV4ixXrIfeWDhZ1iB4c';

class PlayList extends React.Component {
    constructor() {
        super()
        this.state = {
            videosOnPageValue: 20
        }
    }
    componentDidMount() {
        {/* getting videos from youtube api */}
        this.videosGet()
    }
    videosGet = (term) => {
        VideosGet({key:API_KEY_,term:term},(data) => {
            this.props.add100Videos(data)
        })
    }
    /*show more button add 20 videos on page*/
    ShowMore = () => {
        if (this.props.main100Videos.length > this.state.videosOnPageValue)
            this.setState({videosOnPageValue: this.state.videosOnPageValue+20})
    }
      render() {
        {/*if main vodeos in state is not empty return component or Loading title */}
        return this.props.main100Videos.length>0 ? (
            <div className='mainPlayList'>
                <h2 className='mainPlayList_title'>Самое просматриваемое за месяц</h2>
                {/* return videos */}
                {this.props.main100Videos.map((video,index)=> {
                    if (index+1 <= this.state.videosOnPageValue)
                    return <VideoPreview 
                    id={video.id}
                    videoImage={video.snippet.thumbnails.medium.url} 
                    key={index}
                    likes={video.statistics.viewCount}
                    channelTitle={video.snippet.channelTitle}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    />})
                } 
                    <ShowMoreBtn ShowMore={this.ShowMore}/>
            </div>
        ) : <h1 className='loading'>Loading</h1>
                }
}

let mapStateToProps = (state) => {
    return {
        main100Videos: state.main100Videos
    };
  }
  let mapDispatchToProps = (dispatch) => {
    return {
        add100Videos: (data) => {
            dispatch(set100Videos(data))  
          }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(PlayList);