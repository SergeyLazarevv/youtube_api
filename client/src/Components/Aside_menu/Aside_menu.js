import React from 'react'
import { Link } from 'react-router-dom';
import './Aside_menu.css'

let Aside_menu = () => {
    return (
        <div className='aside_menu'>
            <Link to='#' className='aside_menu_link'>
                <img  className='aside_menu_img' src="image/home-button_icon.png" alt='menu'/>
                <span>Главная</span>
            </Link>
            <Link to='#' className='aside_menu_link'>
                <img  className='aside_menu_img' src="image/fire-button_icon.png" alt='menu'/>
                <span>В тренде</span>
            </Link>
            <Link to='#' className='aside_menu_link'>
                <img  className='aside_menu_img' src="image/subscriptions-button_icon.png" alt='menu'/>
                <span>Подписки</span>
            </Link>
            <Link to='#' className='aside_menu_link'>
                <img  className='aside_menu_img' src="image/video-library-button_icon.png" alt='menu'/>
                <span>Библиотека</span>
            </Link>
        </div>
    )
}

export default Aside_menu