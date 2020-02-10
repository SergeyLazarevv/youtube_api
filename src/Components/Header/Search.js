import React from 'react'
import {connect} from 'react-redux'
import YTSearch from '../../searchYoutubeApi'
import setVideosList from '../../Actions/set_videos_list'
import './Search.css'

const API_KEY = 'AIzaSyDrtW5dLU5FZwf-DV4ixXrIfeWDhZ1iB4c';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term:''
        }
        //this.onInputChange = this.onInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this)
        //this.videoSearch = this.videoSearch.bind(this)
    }
    /*componentDidMount() {
        console.log('search mount')
        console.log(this.props.history)
    }*/
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.videoSearch(this.state.term)
        this.setState({term:''})
        this.props.history.push('/SearchVideos')
    }
    videoSearch = (term) => {
        YTSearch({key:API_KEY,term:term},(data) => {
            console.log(data)
            this.props.addSearchVideos(data)
        })
    }
    render() {
        return (
            <form className='search_wrap' onSubmit={this.handleSubmit}>
            <input type='text' 
                    className='header_search' 
                    placeholder='Введите запрос' 
                    value={this.state.term}
                    onChange={this.onInputChange} />
            <button className='header_search_btn'>
                <img src="image/search-button_icon.png" 
                    alt='search_logo' 
                    className='header_search_btn_logo' />
            </button>
        </form>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        videos: state.videos
    };
  }

let mapDispatchToProps = (dispatch) => {
    return {
        addSearchVideos: (data) => {
            dispatch(setVideosList(data))  
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)