import React, { Component , Fragment} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalBody, ModalHeader,Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false ,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: "+ this.username.value + " \nPassword: " + this.password.value + "\nRemember: " + this.remember.value);
        event.preventDefault();
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
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <Button outline="success" onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"> Login</span>
                        </Button>
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
            <Modal isOpen = { this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} style={{backgroundColor:'#07B9AE'}}>Login</ModalHeader>
                <ModalBody style={{backgroundColor:'#C8EAEA'}}>
                    <Form onSubmit={this.handleLogin} >
                        <FormGroup>
                            <Label htmlFor="usernsme">Username</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username = input} 
                                style={{backgroundColor:'#C8EAEA'}}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" 
                            innerRef={(input) => this.password = input}
                            style={{backgroundColor:'#C8EAEA'}}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input} />
                                Remember Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-success"
                            style={{margin:'5% 0% 5% 40%', }}>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
        );
    }
}

export default Header;