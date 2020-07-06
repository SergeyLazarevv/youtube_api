import React from 'react'
import PlayerPage from './Components/PlayerPage/PlayerPage'
import PlayList from './Components/PlayList/PlayList'
import Videos from './Components/Videos/Videos'
import Header from './Components/Header/Header'
import { Route } from 'react-router-dom'

let Content = () => {
    
    return (
        <div className='app_content'>
            <Route path='/'component={Header}/>
            <Route exact path='/PlayerPage' component={PlayerPage} />
            <Route exact path='/SearchVideos' component={Videos} />
            <Route exact path='/' component={PlayList} />
        </div>
    )
}
export default Content