import React, { Component } from 'react';
import Songs from '../components/Songs';
import SingleAlbum from '../components/SingleAlbum';
import AllAlbums from '../components/AllAlbums';
import axios from 'axios';

//      < SingleAlbum albums={this.state.selectedArtist} />

export default class SingleArtist extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: []
    };

  }

  componentDidMount(){
    const theArtistId = this.props.match.params.aristId;
      axios.get(`/api/artists/${theArtistId}`)
      .then(res => res.data)
      .then(artist => {
        this.setState({ selectedArtist: artist })
      });
            axios.get(`/api/artists/${theArtistId}/albums/`)
      .then(res => res.data)
      .then(albums => {
        this.setState({ artistAlbums: albums })
      });
            axios.get(`/api/artists/${theArtistId}/songs/`)
      .then(res => res.data)
      .then(songs => {
        this.setState({ artistSongs: songs })
      });
  }
    // albumNames(props) {
    //   return (
    //     <h4>{props.toDisplay}</h4>
    //   )
    // }

      // <h3>{this.state.selectedArtist.name}</h3>
  render () {

    return (
      <div>
     <h4><AllAlbums albums ={ this.state.artistAlbums } />  </h4>

      <h4>{this.state.artistSongs.songs}</h4>
      </div>
    );
  }
}
