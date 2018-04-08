import React, { Component } from 'react';
import logo from '../components/images/logo.png';

// /Users/rach3tralph/PPROJECTS/REALTR/src/components/images
class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landingContainer">
                    <img src={logo} className="logo" alt="" />
                </div>
            </div>
        )
    }
}

export default Landing; 
