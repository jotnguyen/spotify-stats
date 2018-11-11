import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import axios from 'axios';
import TopSongs from './components/TopSongs'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: this.getHashParams(),
      topTracks: [{}]
    }
    this.getTracks = this.getTracks.bind(this)
    // this.displayTrack = this.displayTrack.bind(this)
    this.getHashParams = this.getHashParams.bind(this)
  }

  getHashParams() {
    if(window.location.hash != ""){
      console.log(window.location.hash)
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      e = r.exec(q)
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      window.location.hash = ""
      return hashParams
   }
   console.log("DIDNT RETURN HASH")
   return "";
  }
  // displayTrack(){
  //   this.state.topTracks.map(=>)
  // }
  getTracks = ()=>{
    // GET https://api.spotify.com/v1/me/top/tracks
    console.log(this.state.params)

    axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5", {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.state.params.access_token
      }
    })
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .then((res) => {
      this.setState({topTracks:res.items})
    })
    .catch(function (res) {
      console.log(res)
    }) 
  }

  render() {
    return (
      <>
            <MyNavbar></MyNavbar>
            {this.state.params?<TopSongs token={this.state.params}/>:<Login/>}
      </>
    );
  }
}

export default App;