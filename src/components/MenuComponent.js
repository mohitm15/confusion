import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


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
        const menu = this.props.dishes.dishes.map((dish) => {
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
        if (this.state.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.state.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{this.state.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Menu</h3><hr />
                </div>
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