import React from 'react';
import { Router } from 'react-router-dom'
import AsideMenu from './Components/Aside_menu/Aside_menu'
import HiddenMenu from './Components/HiddenMenu/HiddenMenu'
import Content from './Content'
import './App.css'
import './youtube_app.css'
import './normalize.css'
import { createBrowserHistory } from 'history'

let history = createBrowserHistory();

//if app reload going to start page
history.push('/')

let App = () => {
  return (
    <div className='youtube_app'>
      <Router history={history}>
        <HiddenMenu />
        <AsideMenu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
