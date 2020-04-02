import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './components/MenuComponent.js';
import Home from './components/HomeComponent.js';
import Contact from './components/ContactComponent.js'
import Header from './components/HeaderComponent.js';
import Footer from './components/FooterComponent.js';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { 
      dishes: DISHES,  // Added dishes as lifted component to App
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS };
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path= '/menu' component = {() => <Menu dishes = {this.state.dishes}/> } />
          <Route exact path= '/contactus' component = {Contact} /> 
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes = {this.state.dishes}/>  Menu : child and App: parent => availablr to props to menucomponent */}
        <Footer />
      </div>
    );
  }
}

export default App;
