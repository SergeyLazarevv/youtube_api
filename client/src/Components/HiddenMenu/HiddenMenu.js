import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../Header/Search'
import LeftMenu from '../Header/Left_menu'
import './HiddenMenu.css'

let HiddenMenu = (props) => {
    return (
        <div className='hiddenMenu'style={props.hiddenMenuVisible ? {'transform':'translate(0)'}
                                                                    :{'transform':'translate(-100%)'}}>
            <LeftMenu />
            <hr className='line' />
            <Link to='#' className='hidden_menu_link'>
                <img  className='hidden_menu_img' src="image/home-button_icon.png" alt='menu'/>
                <span>Главная</span>
            </Link>
            <Link to='#' className='hidden_menu_link'>
                <img  className='hidden_menu_img' src="image/fire-button_icon.png" alt='menu'/>
                <span>В тренде</span>
            </Link>
            <Link to='#' className='hidden_menu_link'>
                <img  className='hidden_menu_img' src="image/subscriptions-button_icon.png" alt='menu'/>
                <span>Подписки</span>
            </Link>
            <Link to='#' className='hidden_menu_link'>
                <img  className='hidden_menu_img' src="image/video-library-button_icon.png" alt='menu'/>
                <span>Библиотека</span>
            </Link>
            <hr className='line' />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        hiddenMenuVisible : state.hiddenMenuVisible
    };
  }

export default connect(mapStateToProps)(HiddenMenu);