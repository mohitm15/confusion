import React, { Component } from 'react';
import './App.css';

import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent.js';
import { DISHES } from './shared/dishes';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { dishes: DISHES};  // Added dishes as lifted component to App
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color = "primary">
          <div className="container">
            <NavbarBrand href="/">
              Mohit ka Fusion Dhabaa !
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>  {/*Menu : child and App: parent => availablr to props to menucomponent */}
      </div>
    );
  }
}

export default App;
