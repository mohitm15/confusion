import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem , Button, Modal, ModalBody, ModalHeader, Label, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control , LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Dishdetail extends Component
{
    
    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen : false
        };

        this.toggleModal =this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        alert("Value ADDDED IN PROGRESS !")
        //this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
        //event.preventDefault();	
    }	    
    
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
                            
                            <Button outline="success" onClick={this.toggleModal}>
                                <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                            </Button>
                            <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                                <ModalBody>
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="rating" md={12}>Rating</Label>
                                            <Col md={12}>
                                                <Control.select model=".rating" name="rating" className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="author" md={12}>Your Name</Label>
                                            <Col md={12}>
                                                <Control.text model='.author' name="author" id="author"
                                                    className="form-control" 
                                                    placeholder="Your name" 
                                                    validators = {{
                                                        required,minLength: minLength(3),maxLength: maxLength(15)
                                                    }}
                                                />
                                                < Errors 
                                                    className = "text-danger"
                                                    model = ".author"
                                                    show = "touched"
                                                    messages = {{
                                                        required: "Required :",
                                                        minLength: "Must be greater than 2 characters",
                                                        maxLength: "Must be less than 15 characters"
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="comment" md={12}>Comment</Label>
                                            <Col md={12}>
                                                <Control.textarea model='.comment' name = ".comment" id=".comment"
                                                    rows = "10"
                                                    className="form-control"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={{size:12}}>
                                                <Button type="submit" color="primary">
                                                    Send Comment
                                                </Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            )
    }

}

export default Dishdetail;