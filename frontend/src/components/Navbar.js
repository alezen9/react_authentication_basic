import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar as Bootstrapbar,
    NavbarToggler,
    Nav,
    NavItem } from 'reactstrap';

    import './Navbar.css';


class Navbar extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            /*
            <ul className="navbar-nav ml-auto">
                <a href="" className="nav-link active" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>*/
            <Nav className="ml-auto" navbar>
                <NavItem >
                    <Link className="nav-link" to="/profile">
                        <img src={user.avatar} alt={user.name} title={user.name}
                                className="rounded-circle usrImg"
                        />
                    </Link>
                </NavItem>
                <NavItem >
                    <Link className="nav-link" to="/profile">
                        <p style={{margin: '.3rem .7rem', fontSize: '1.2em'}} className="user">
                            {user.name}
                        </p>
                     </Link>
                </NavItem>
                <NavItem onClick={this.onLogout.bind(this)}>
                    <Link className="nav-link" to="">
                        <p style={{margin: '.3rem .7rem', fontSize: '1.2em'}}>Log Out</p>
                    </Link>
                </NavItem>
            </Nav>
        )
      const guestLinks = (
          /*
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>*/
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Link className="nav-link" to="/register" style={{verticalAlign: 'middle'}}>
                    <p style={{margin: '.3rem 1rem', fontSize: '1.2em'}}>Sign Up</p>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/login">
                    <p style={{margin: '.3rem 1rem', fontSize: '1.2em'}}>Log In</p>
                </Link>
            </NavItem>
        </Nav>
      )
        return(
            <div>
            <Bootstrapbar color="dark" dark expand="md">
              <Link to="/">
                <span className="brand">
                    <img style={{filter: 'drop-shadow(0 0 2px white)'}} alt="Logo" src="avengers.png" height="30" />
                </span>
              </Link>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Collapse>
            </Bootstrapbar>
          </div>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));