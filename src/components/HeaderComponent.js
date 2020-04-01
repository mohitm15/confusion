import React, { Component , Fragment} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {

    render() {
        return (
        <Fragment>
            <Navbar dark >
            <div className="container">
                <NavbarBrand href="/">
                    Mohit ka Fusion Dhabaa !
                </NavbarBrand>
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