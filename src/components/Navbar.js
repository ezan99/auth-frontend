import React from "react";
import { useLocation } from 'react-router-dom'

export default function (props) {
    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/auth">AuthApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                location.pathname !== '/dashboard' && (
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/auth">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Signup</a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}