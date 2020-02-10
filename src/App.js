import React from 'react';
import {Route,Router} from 'react-router-dom'
import Header from './Components/Header/Header'
import AsideMenu from './Components/Aside_menu/Aside_menu'
import PlayList from './Components/PlayList/PlayList'
import Videos from './Containers/Videos/Videos'
import {connect} from 'react-redux'
import PlayerPage from './Components/PlayerPage/PlayerPage'
import './App.css'
import './youtube_app.css'
import { createBrowserHistory } from 'history'

let history = createBrowserHistory();

//if app reload going to start page
history.push('/')

class App extends React.Component {
  render() {
  return (
    <div className='youtube_app'>
      <Router history={history}>
        <AsideMenu />
        <div className='app_content'>
          <Route path='/'component={Header}/>
          {/* ??? */}
          <Route exact path='/PlayerPage' component={()=><PlayerPage video={this.props.currentPlayVideo} />} />
          <Route exact path='/SearchVideos' component={Videos} />
          <Route exact path='/' component={PlayList} />
        </div>
      </Router>
    </div>
  );
  }
}

let mapStateToProps = (state) => {
  return {
      searchVideosList: state.videos,
      currentPlayVideo: state.currentVideo,
      main100Videos: state.main100Videos
  };
}
export default connect(mapStateToProps)(App);
