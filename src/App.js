import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; //funcyion used for connecting component with redux store
import { addComment, fetchDishes } from './redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group'

import Menu from './components/MenuComponent.js';
import Home from './components/HomeComponent.js';
import Contact from './components/ContactComponent.js';
import About from './components/AboutComponent.js';
import Header from './components/HeaderComponent.js';
import Footer from './components/FooterComponent.js';
import Dishdetail from './components/DishdetailComponent';

//map redux store state into props
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

class App extends Component {
  
  componentDidMount(){
    this.props.fetchDishes();
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => { 
        return (
          <Dishdetail dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))[0]}
            addComment={this.props.addComment}
          />
        );
    }
    
    return (
      <div className="App">
        <Header />
        <TransitionGroup> 
          <CSSTransition key={this.props.location.key} className="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path='/home' component={HomePage}/>
              <Route path= '/about' component={About}/>
              <Route exact path= '/menu' component = {() => <Menu dishes = {this.props.dishes}/> } />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        {/* <Menu dishes = {this.state.dishes}/>  Menu : child and App: parent => availablr to props to menucomponent */}
        <Footer />
      </div>
    );
  }
}

//connecting app component to redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
