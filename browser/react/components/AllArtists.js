import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


export default class AllArtists extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists: []
    };
        // this.deselectAlbum = this.deselectAlbum.bind(this);
  }



  componentDidMount(){
      axios.get(`/api/artists/`)
      .then(res => res.data)
      .then(artistsList => {
        this.setState({ artists: artistsList })
      });
  }

  render () {
    return(
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        this.state.artists.map(artist => {
          return (
            <div className="list-group-item" key={artist.id}>
              <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
            </div>
          )
        })
      }
    </div>
  </div>
    )
  }
}


