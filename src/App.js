import React, { Component } from 'react';
import './App.css';

import Menu from './components/MenuComponent.js';
import Header from './components/HeaderComponent.js';
import Footer from './components/FooterComponent.js';
import { DISHES } from './shared/dishes';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { dishes: DISHES};  // Added dishes as lifted component to App
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes = {this.state.dishes}/>  {/*Menu : child and App: parent => availablr to props to menucomponent */}
        <Footer />
      </div>
    );
  }
}

export default App;
