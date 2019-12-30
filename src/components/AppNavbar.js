import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification'


class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Tuotteet
                    </Link>

                    <div className="navbar-brand">
                        <ul className="navbar-nav mr-auto">
                            <li><Notification /></li>
                            <li className="nav-item">
                                <Link to="/ostoskori" className="navbar-brand">
                                    <i className="fas fa-shopping-cart"></i> Ostoskori
                            </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar