import React from 'react';
import {Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle,Jumbotron } from 'reactstrap';
import { Loading } from './LoadingComponent';


function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return(

            <Card height="45rem">
                <CardImg src={item.image} alt={item.name} style={{ height:"20rem", width:"100%" }} />
                <CardBody style={{ backgroundColor:'#C8EAEA'}}> 
                    <CardTitle><h3>{item.name}</h3></CardTitle>
                    {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>

        );
}


function Home(props) {
    return(
        <div className="container">
            <div>
                <Jumbotron style={{backgroundColor: '#C8EAEA', textAlign:'center'}}>
                    <h1>Todays' Features !</h1>
                </Jumbotron>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
            </div>
        </div>
    );
}

export default Home;