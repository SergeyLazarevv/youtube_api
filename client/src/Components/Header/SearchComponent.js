import React from 'react'
import Search from './Search'
import './Search.css'

let DefaultSearch = (props) => {
    return (
        <Search>
            <button className='header_search_btn'>
                <img src="image/search-button_icon.png" 
                    alt='search_logo' 
                    className='header_search_btn_logo' />
            </button>
        </Search>
    )
}

export default DefaultSearch