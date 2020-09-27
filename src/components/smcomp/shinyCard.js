import React from 'react';
import { Button, Card } from 'react-bootstrap'
import classes from './shiny.module.css'



const cards = (props) => {

    return (
        <Card className={classes.cards}>
            <a href={props.myLink}>
                <Card.Img variant="top" src={props.image} />
            </a>
            <Card.Body className={props.textClass}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default cards;