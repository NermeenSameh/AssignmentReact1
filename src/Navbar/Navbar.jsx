import React from 'react'
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container">
                    <Link className="navbar-brand Logo" to=''>START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className={(isActive) => isActive == true ? "nav-link activeNav" : "nav-link"} to='about'>About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className={(isActive) => isActive == true ? "nav-link activeNav" : "nav-link"} to='potfolio'>Portfolio</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className={(isActive) => isActive == true ? "nav-link activeNav" : "nav-link"} to='contact'>Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
