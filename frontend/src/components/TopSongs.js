import React, { Component } from 'react';
import axios from 'axios';
class TopSongs extends Component{
    constructor(props){
        super(props);

        this.state = {
            tokens: this.props.token,
            topTracks: [],
            timeRange: ['short_term','medium_term', 'long_term']
        }

    }

    getTracks = ()=>{
        // GET https://api.spotify.com/v1/me/top/tracks
        console.log(this.state.params)

        let tracks = []
        for(let timeSpan of this.state.timeRange){
            tracks.push(
            axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeSpan}&limit=10&offset=5`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.tokens.access_token
            }
            })
            .then((res) => {
            console.log(res.data)
            return res
            })
            .then((res) => {
                // tracks.push(res.data.items)
                console.log(tracks)
                return res.data.items
            })
            .catch(function (res) {
            console.log(res)
            })
            ) 
        }
        
        Promise.all(tracks).then((values) => {
            console.log(tracks)
            this.setState({ topTracks: values }) }
        )
    }
    
    
    songCol = () => {
            return(

                this.state.topTracks.map(tracks => {
                    return(
                    <div class="col-md-4">
                    {this.songCard(tracks)}
                    </div>)
            }))

        
    }      

    songCard = (tracks) => {
        console.log("ahhh"+this.state.topTracks.length)
        let result = []
            result.push(tracks.map( track => {
            return(
            <div class="card" key={track.uri}>
                <div class="row">
                    <div class="col">
                        <img src={track.album.images[1].url} alt="..." class="float-left"></img>
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
        )
        
        return result
    }

    
    render(){
    return(
        <>
        <button onClick={this.getTracks}>
        Get top tracks
        </button>
        <div class="row">
            {this.songCol()}
        </div>
        </>
    );
    }
}

export default TopSongs;