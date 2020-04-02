import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class Dishdetail extends Component
{
    render() {
        const dish = this.props.selectedDish; //added dish variable to use property of MenuComponent i.ie.Selected dish
        if (dish==null)
            return(<div></div>);
        else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                <Link to='/menu'>{dish.name}</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3><hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 m-1">
                            <Card>
                                <CardImg width="100" src = {dish.image} alt = {dish.name}/>
                                <CardBody>
                                    <CardTitle><h3>{ dish.name }</h3></CardTitle>
                                    <CardText>{ dish.description }</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5 col-sm-12 m-1">
                            <h4>Comments</h4>
                            {dish.comments.map((cmt, i ) => {
                                return(
                                    <div key = {cmt.id}>
                                        <p>{ cmt.comment }</p>
                                        <p>-- { cmt.author }, 
                                            {new Intl.DateTimeFormat('en-US', {
                                                year: 'numeric', month: 'long', day: '2-digit'
                                                    }).format(new Date(cmt.date))}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
    }

}

export default Dishdetail;