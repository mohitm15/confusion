import React, { Component , Fragment} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
        <Fragment>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/logo.png" height="30" width="41" alt="Mohit ka Fusion Dhabaa !" />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar> {/* for small screen */}
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <span className="fa fa-info fa-lg"></span> AboutUs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
            </Navbar>
            <Jumbotron fluid>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6">
                          <h1>Mohit ka Fusion Dhabaa !</h1>
                          <p>
                            We take inspiration from the World's best cuisines, 
                            and create a unique fusion experience. Our lipsmacking 
                            creations will tickle your culinary senses !
                          </p>
                          <hr className="my-2" />
                          <p>
                              Serving food for new India.
                          </p>
                      </div>
                  </div>
              </div>  
            </Jumbotron>
        </Fragment>
        );
    }
}

export default Header;