import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Profile.css';

class Profile extends Component {
    render() {
        const {user} = this.props.auth;
        return (
            <div className="profile">
                <div className="homeText">
                    <div className="blur"></div>
                    <h2>Profile of {user.name}</h2>
                </div>
                <div className="wolf"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Profile));