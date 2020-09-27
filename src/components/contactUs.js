import React, {Component} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarC from './navbar';
import * as emailjs from 'emailjs-com';
import classes from './contact.module.css'


class Contact extends Component {
  state = {
    email: '',
    message: '',
    subject: '',
    show: false
  }
  
  handleSubmit(e) {

    alert("Email is sent");

    e.preventDefault()    
    
    const { email, message, subject } = this.state    
    
    let templateParams = {
      from_name: email,
      to_name: 'fauslyfox110@gmail.com',
      subject: subject,
      message_html: message,
     }     
     
     emailjs.send(
      'gmail',
      'template_KxZ6nMx5',
       templateParams,
      'user_PsBDguKpQFEu7NJ2R82hM'
     )     
     this.resetForm()
 }

 
 resetForm() {
    this.setState({
      email: '',
      subject: '',
      message: '',
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
 
    render(){
        return(
<div>
<NavBarC/> 




<Form   onSubmit={this.handleSubmit.bind(this)}
       className = {classes.form}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Your Email address</Form.Label>
    <Form.Control 
      type="email" 
      placeholder="name@example.com" 
      value={this.state.email}
      onChange={this.handleChange.bind(this, 'email')} 
      />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Subject</Form.Label>
    <Form.Control 
      type="subject" 
      placeholder="My Subject" 
      value={this.state.subject}
      onChange={this.handleChange.bind(this, 'subject')} 
      />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter your Message</Form.Label>
    <Form.Control as="textarea" rows="10" 
        value={this.state.message}
        onChange={this.handleChange.bind(this, 'message')}
        placeholder="Any questions you have ask away."
        />
  </Form.Group>
  
  <Button variant="warning" type="submit" style = {{width: '38%',margin:'5% 31%', padding: '10px 20px'}}>
    Submit
  </Button>
</Form>

<Row  style={{ backgroundColor: "#485671", marginTop: '100px'}}>


<p style={{width: "40%", margin: "3% 30%", color: "white", textAlign:'center'}}>
            MobileStringer 2020. All Rights Reserved.
          </p>
        </Row>
        </div>
        )
    }
}

export default Contact;


/**
 * old code
 * What should I write here?&#10;1. Leave your name and/or company&#10;2. Preferred contact method and info&#10;3. Your project in a few words&#10;4. Technology you prefer (ex.:&#10;a. Up to you;&#10;b. R or Python for analysis and aggregation; ReactJS for visualization; MySQL for database.&#10;5. Estimated timeline
 */