import React, { Component } from 'react';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="homeText">
                    <div className="blur"></div>
                    <h2>Homepage</h2>
                </div>
                <div className="wolf"></div>
            </div>
        );
    }
}