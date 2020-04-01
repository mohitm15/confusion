import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './components/MenuComponent.js';
import Home from './components/HomeComponent.js';
import Header from './components/HeaderComponent.js';
import Footer from './components/FooterComponent.js';
import { DISHES } from './shared/dishes';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { dishes: DISHES};  // Added dishes as lifted component to App
  }

  render() {

    const HomePage = () => {
      return (
        < Home />
      );
    }
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path= '/menu' component = {() => <Menu dishes = {this.state.dishes}/> } />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes = {this.state.dishes}/>  Menu : child and App: parent => availablr to props to menucomponent */}
        <Footer />
      </div>
    );
  }
}

export default App;
