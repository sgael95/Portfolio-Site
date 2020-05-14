import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialState: false
        };
    }

    render() {

        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"><i className="fas fa-laptop-code"></i></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration= {500}
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration= {500}
                            >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration= {500}
                            >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration= {500}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;