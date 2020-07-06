import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import changeHiddenMenuVisible from '../../Actions/change_hidden_menu_visible'
import './Left_menu.css'


let Left_menu = (props) => {
    return (
        <div className='header_left'>
            <Link to='/' onClick={props.changeMenuVisible}>
                <img  className='header_menu_img' src="image/burger_line.svg" alt='menu'/>
            </Link>
            <Link to='/'>
                {/*<img className='header_logo' src="image/youtube_logo.jpg" alt='youtube_logo'/>*/}
                <span className='header_logo'><b>NO</b>tube</span>
            </Link>
        </div>
    )
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeMenuVisible: () => {
            dispatch(changeHiddenMenuVisible())  
          }
    }
}
export default connect(null,mapDispatchToProps)(Left_menu)