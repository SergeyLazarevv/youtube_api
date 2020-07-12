import React from 'react'
import Search from '../../Hoc/Search'
import './MobileSearch.css'
import {connect} from 'react-redux'
import setVideosList from '../../Actions/set_videos_list'
import mobileSearchVisible from '../../Actions/change_mobileSearch_visible' 

function MobileSearch(props) {
    return (
        <form className='mobileSearch_wrap' onSubmit={props.handleSubmit}>
            <div className='MobileSearch-closeBtn' onClick={props.mobileSearchToggle}>
                x
            </div>
            <input type='text' 
                    className='mobile_search' 
                    placeholder='Введите запрос' 
                    value={props.state.term}
                    onChange={props.onInputChange} />
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
        },
        mobileSearchToggle: () => {
            dispatch(mobileSearchVisible())
        }
    }
}
export default Search(connect(mapStateToProps,mapDispatchToProps)(MobileSearch))