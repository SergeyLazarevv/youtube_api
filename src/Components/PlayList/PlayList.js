import React from 'react'
import './PlayList.css'
import VideoPreview from '../VideoPreview/VideoPreview'
//import VideosGet from '../../100videosGet'
import VideosGet from '../../youtubeVideosGetApi'
import set100Videos from '../../Actions/set_100_videos'
import addPlayVideo from '../../Actions/set_play_video'
import ShowMoreBtn from './ShowMoreBtn'
import {connect} from 'react-redux'

let API_KEY_ = 'AIzaSyDrtW5dLU5FZwf-DV4ixXrIfeWDhZ1iB4c';

class PlayList extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoaded : false,
            videosOnPageValue: 20
        }
    }
    componentDidMount() {
        this.videosGet()
    }
    videosGet = (term) => {
        VideosGet({key:API_KEY_,term:term},(data) => {
        //console.log('videoGet method run')
            //console.log(data)
            this.props.add100Videos(data)
            this.setState({isLoaded:true})
        })
    }
    setPlayVideo = (event) => {
        this.props.main100Videos.forEach((item=>{
            if (item.id === event.target.parentNode.id) {
                console.log('dobavleno')
                this.props.addPlayVideo(item);
            }
        }))
    }
    ShowMore = () => {
        if (this.props.main100Videos.length > this.state.videosOnPageValue)
            this.setState({videosOnPageValue: this.state.videosOnPageValue+20})
    }
      render() {
          if (!this.state.isLoaded) {
              return <div className='mainPlayList'><h1>Loading...</h1></div>
          } else {
        return (
            <div className='mainPlayList'>
                <h2 className='mainPlayList_title'>Самое просматриваемое за месяц</h2>
                {this.props.main100Videos.map((video,index)=> {
                    if (index+1 <= this.state.videosOnPageValue)
                    return <VideoPreview 
                    setPlayVideo={this.setPlayVideo}
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
        )
                }
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
          },
          addPlayVideo: (data) => {
            dispatch(addPlayVideo(data))
        }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(PlayList);