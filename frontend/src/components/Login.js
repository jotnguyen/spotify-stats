import React, { Component } from 'react';
let testStyles = {
    maxHeight: "150px"
}
class Login extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div class="row">
                <div class="col-md-3">
                    <a href="http://localhost:8888/login">
                        <button >
                            Login
                        </button>
                    </a>
                </div>

                <div class="col-md-9">
                    <div class="row">
                        <div class="col-sm">
                        <img src="/images/Cover.jpg"  style={testStyles}></img>
                        </div>
                        <div class="col-sm">
                        <img src="/images/Cover.jpg" style={testStyles}></img></div>
                        <div class="col-sm"><img src="/images/Cover.jpg" style={testStyles}></img></div>
                    </div>
                    <div class="row">
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
                    </div>
                </div>
            
            </div>

        );
    }
}
export default Login
