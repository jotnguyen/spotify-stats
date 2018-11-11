import React, { Component } from 'react';
import axios from 'axios';
class TopSongs extends Component{
    constructor(props){
        super(props);

        this.state = {
            tokens: this.props.token,
            topTracks: []
        }

    }
    getTracks = ()=>{
        // GET https://api.spotify.com/v1/me/top/tracks
        console.log(this.state.params)
    
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5", {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.tokens.access_token
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

    songCard = () => {
        console.log("ahhh"+this.state.topTracks)
        return this.state.topTracks.map( track => {
        return(
        <div class="card" key={track.uri}>
            <div class="row">
                <div class="col">
                    <img src={track.album.images[3].url} alt="..." class="float-left"></img>
                </div>
                <div class="col">
                    <div class="card-body">
                    <h5 class="card-title">{track.name}</h5>
                    <p class="card-text">{track.album.name}</p>
                    </div>
                </div>
            </div>
            

         </div>
        )
        }
        )
    }

    
    render(){
    return(
        <>
        <button onClick={this.getTracks}>
        Get top tracks
        </button>
        <div class="row">
        <div class="col">{this.songCard()}</div>
        <div class="col">test</div>
        <div class="col">test</div>
        </div>
        </>
    );
    }
}

export default TopSongs;