import React from 'react'
import LeftMenu from './Left_menu'
import Search from './SearchHeader'
import MobileSearch from './MobileSearch'
import RightIcons from './Right_icons'
import {connect} from 'react-redux'

import './Header.css'


let Header = (props) => {
    return (
        <header>
            <LeftMenu />

            {props.mobileSearchVisible ? <MobileSearch history={props.history} /> : 
            <Search history={props.history}/>}
            
            <RightIcons />
        </header>
    )
}
let mapStateToProps = (state) => {
    return {
        mobileSearchVisible: state.mobileSearchVisible
    }
}
export default connect(mapStateToProps)(Header)