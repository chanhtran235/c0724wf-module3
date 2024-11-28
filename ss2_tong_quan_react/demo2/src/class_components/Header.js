import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {Link, NavLink} from "react-router-dom"


class Header extends React.Component{


    render() {
       return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink   className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}  to="/home/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>`nav-link ${isActive?'active-link':''}`} to="/students">List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       )
    }
}
export default Header ;