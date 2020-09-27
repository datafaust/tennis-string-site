import React from 'react';
import {Button, Card} from 'react-bootstrap'
import classes from './price.module.css'



const cards = (props) => {

    return (
<Card className = {classes.cards}>
  <Card.Header>{props.title}</Card.Header>
  <Card.Body>
    <Card.Title>{props.option1}</Card.Title>
    <Card.Text>
      {props.text1}
    </Card.Text>
    <Card.Title>{props.option2}</Card.Title>
    <Card.Text>
    {props.text2}
    </Card.Text>
    <Card.Title>{props.option3}</Card.Title>
    <Card.Text>
    {props.text3}
    </Card.Text>
    <Button href = {props.addrs} variant="primary" style = {{width: '120px', margin: 'auto'}}>Examples</Button>
  </Card.Body>

</Card>
    )}

export default cards;