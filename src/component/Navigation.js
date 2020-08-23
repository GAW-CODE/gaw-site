import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import Home from "../page/Home";
import About from "../page/About";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

class Navigation extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="blue" dark expand="md">
                    <MDBNavbarBrand>
                        <a href="/">
                            <strong className="white-text">GAWCODE</strong>
                        </a>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/tryout">TRYOUT</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/about-us">ABOUT US</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <a href="https://github.com/GAW-CODE/gaw-site" target="_blank" className="text-light">SITE SOURCE ON GITHUB</a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about-us">
                        <About />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Navigation;
