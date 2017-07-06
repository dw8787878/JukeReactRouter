import React, { Component } from 'react';
import Songs from '../components/Songs';
import SingleAlbum from '../components/SingleAlbum';
import axios from 'axios';



export default class SingleArtist extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedArtist: {}
    };
  }

  componentDidMount(){
    const artistId = this.props.match.params.artistId;
      axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => {
        console.log('-----------------', artist)
        this.setState({ selectedArtists: artist })
      });
  }

  render () {
    return (
     <div>
      <h3>ARTIST NAME</h3>
      <h4>ALBUMS</h4>
      < SingleAlbum albums={this.state} />
      <h4>SONGS</h4>
      < Songs />
    </div>

    );
  }
}
