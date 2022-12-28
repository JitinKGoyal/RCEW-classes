import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./navbar.css"
import "./navDesignJs.js"

function Navbar() {
    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                        {/* <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);"> <i className="fas fa-tachometer-alt"></i>Dashboard</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Address Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);"><i className="far fa-clone"></i>Components</a>
                        </li> */}
                        {/* <Link to='/login' className='myLink'>
                            <li className="nav-item active">
                                <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendar</a>
                            </li>
                        </Link> */}
                        <Link to='/login' className={`myLink `}>
                            <li className={`nav-item ${currentLocation == "/login" && "active"} `}>
                                <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Login</a>
                            </li>
                        </Link>

                        <Link to='/signup' className='myLink'>
                            <li className={`nav-item ${currentLocation == "/signup" && "active"} `}>
                                <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy"></i>Signup</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar