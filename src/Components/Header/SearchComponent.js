import React from 'react'
import './Search.css'

let SearchComponent = (props) => {
    return (
        <form className='search_wrap' onSubmit={props.handleSubmit}>
            <input type='text' 
                    className='header_search' 
                    placeholder='Введите запрос' 
                    value={props.term}
                    onChange={props.onInputChange} />
            <button className='header_search_btn'>
                <img src="image/search-button_icon.png" 
                    alt='search_logo' 
                    className='header_search_btn_logo' />
            </button>
        </form>
    )
}

export default SearchComponent