import React from 'react';
import './App.css';

import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent.js';

function App() {
  return (
    <div className="App">
      <Navbar dark color = "primary">
        <div className="container">
          <NavbarBrand href="/">
            Mohit Da Dhabaa !
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
