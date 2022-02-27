import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <NavLink className="navbar-brand" to="/">
                Vicente Vicuña
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink className="nav-link" to="/portfolio">
                Portfolio
                </NavLink>
                <NavLink className="nav-link" to="/about">
                About
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                Contact
                </NavLink>
            </div>
            </div>
        </div>
        </nav>
    </div>
    )
}


