import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification'


class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        e-kauppa
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/ostoskori" className="nav-link">
                                    Ostoskori
                            </Link>
                                <Notification />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar