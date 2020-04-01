import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent'


class Menu extends Component 
{
    constructor(props) 
    {
        super(props);
        
        this.state = {
            selectedDish : null
        }; 
        //console.log('Menu Const is invoked');
    }

    // componentDidMount(){
    //     console.log('Menu Const componetn mounted');
    // }

    onDishSelect(dish) {
        this.setState({selectedDish: dish}); //value of slecteddish will = dish
    }


    render () {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className = "col-md-5 col-sm-12 m-1">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src = {dish.image} alt = {dish.name}/>
                        <CardImgOverlay>
                            <CardTitle><h2>{dish.name}</h2></CardTitle>
                            <CardSubtitle>{dish.subdecs}</CardSubtitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        //console.log('Menu Render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish = {this.state.selectedDish}/>   
                {/* dishdetail ko menu me lift kiya */}
            </div>
        );
    }
}

export default Menu;