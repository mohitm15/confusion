import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle} from 'reactstrap';


class Menu extends Component 
{

    render () {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.iid} className = "col-md-5 col-sm-12 m-1">
                    <Card onClick = {() => this.props.onClick(dish.iid)}>
                        <CardImg width="100%" src = {dish.image} alt = {dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
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
            </div>
        );
    }
}

export default Menu;