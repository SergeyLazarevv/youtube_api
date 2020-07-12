import React from 'react'
import Search from '../../Hoc/Search'
import './Search.css'
import {connect} from 'react-redux'
import setVideosList from '../../Actions/set_videos_list'

function SearchHeader(props) {
    return (
        <form className='search_wrap' onSubmit={props.handleSubmit}>
            <input type='text' 
                    className='header_search' 
                    placeholder='Введите запрос' 
                    value={props.state.term}
                    onChange={props.onInputChange} />
            <button className='header_search_btn'>
                <img src="image/search-button_icon.png" 
                    alt='search_logo' 
                    className='header_search_btn_logo' />
            </button>
        </form>
    )
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
export default Search(connect(mapStateToProps,mapDispatchToProps)(SearchHeader))