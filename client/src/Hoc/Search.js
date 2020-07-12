import React from 'react'
//import {connect} from 'react-redux'
import YTSearch from '../searchYoutubeApi'
//import setVideosList from '../Actions/set_videos_list'
//import './Search.css'

const API_KEY = 'AIzaSyDrtW5dLU5FZwf-DV4ixXrIfeWDhZ1iB4c';

function SearchWrapper(Wrapped) {
    return class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term:''
        }
    }
    onInputChange = (event) => {
        console.log(this.state.term)
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
            <Wrapped handleSubmit={this.handleSubmit} 
                    state={this.state}
                    videoSearch={this.videoSearch} 
                    onInputChange={this.onInputChange} 
                    {...this.props} />
        )
    }
}
}

export default SearchWrapper