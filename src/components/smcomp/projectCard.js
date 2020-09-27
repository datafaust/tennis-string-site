import React from 'react';
import { 
    //Button,
     Card } from 'react-bootstrap'
import classes from './projectCard.module.css'



const cards = (props) => {

    return (
        <Card className={classes.cards}>
            <a href={props.link}>
                <Card.Img variant="top" src={props.image} style = {props.image1}/>
                <Card.Body className={props.textClass} style = {{color:'black'}}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default cards;