import React, { Component } from 'react';
import axios from 'axios';
let testStyles = {
    maxHeight: "150px"
}
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            topPlaylists: []
        }
    }
    getPlaylists = () => {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.props.tokens.access_token
          }
        })
        .then((res) => {
          console.log(res.data)
          return res.data
        })
        .then((res) => {
          this.setState({topPlaylists:res})
          
        })
        .catch(function (res) {
          console.log(res)
        }) 
    }
    renderPlaylists = () => {
        return(
            this.state.topPlaylists.map()
        )
    }
    render(){
        return(
        <div>
            <div class="row">
                        <div class="col-sm">
                        <img src="/images/Cover.jpg"  style={testStyles}></img>
                        </div>
                        <div class="col-sm">
                            <img src="/images/Cover.jpg" style={testStyles}></img>
                        </div>
                        <div class="col-sm"><img src="/images/Cover.jpg" style={testStyles}></img></div>
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
            </div>
            <div class="row">
                <div class="col text-center">
                        <a href="http://localhost:8888/login">
                            <button >
                                Login
                            </button>
                        </a>
                </div>
            </div>
            
        </div>

        );
    }
}
export default Login
