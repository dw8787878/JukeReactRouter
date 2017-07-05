import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';


export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };

  }

  render () {
    return (
      <Router>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
          <Switch>
              <Route exact path='/' component={AllAlbums}/>
              <Route exact path='/albums'  component={AllAlbums}/>
              <Route exact path='/albums/:albumId'  component={SingleAlbum}/>
          </Switch>
          </div>
        <Player />
      </div>
        </Router>
    );
  }
}
