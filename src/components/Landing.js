import React, { Component } from 'react';
import logo from '../imgs/logo.png';


class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landingContainer">
                    <img src={logo} className="logo" alt=" "/>
                </div>
            </div>
        )
    }
}

export default Landing; 
