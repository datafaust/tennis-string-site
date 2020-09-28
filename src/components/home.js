import React, { Component } from "react";
import {
  Row,
  Col,
  Carousel,
  Container
} from "react-bootstrap";
//import { faCog } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import classes from "./home.module.css";
import NavBarC from "./navbar";
import Cards from './smcomp/projectCard';
import Contact from './contactUs';
import classes from './home.module.css'


import tournaBigHitter from "../assets/tournaBigHitter.jpeg";
import tournaSilver from "../assets/tournaSilver7.jpg";
import tournaGrit from "../assets/tournaGrit.png";
import tennis from "../assets/tennis.png"
import tennis2 from "../assets/singles.png"

import string1 from "../assets/string1.png"
import string2 from "../assets/string2.png"
import string3 from "../assets/string3.png"
// import {Link} from 'react-router-dom'

import ReactMapGL from 'react-map-gl';
import Popup from 'react-map-gl';

class Jumbo extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.7450,
      longitude: -73.8643,
      zoom: 12
    }
  };

  
  render() {
    return (
      <div>
        <NavBarC />
        {/** IMAGE ROW */}
          <Row className={classes.carousel}>
            <Col>
              <Carousel interval={3000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={string1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={string2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={string3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                </Carousel>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.title} id = "pricing">Services I Offer</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" xs lg="11">
              <p className = {classes.writing}>
                I offer reasonably priced and straight to your door tennis racket stringing services. I charge a flat rate for all racket stringing and can arrange to pick up and dropoff rackets. All rackets are strung and tested for tension accuracy. I am located in Queens New York and able to travel so feel free to ask if I am able to service your location. At the moment the best way to reach me is to call or text me; you can also email me. All contact information is provided below. Online payments coming soon!
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.title} id='pricing' >General Pricing</Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" xs lg="11">
              <p className = {classes.writing}>
                I like to keep things simple so stringing is offered at flat rates shown below. Taxes and string fees are included so no need to worry about any extra charges. 
              </p>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.priceBlock}>

              <img 
                className={classes.icon}
                src={tennis}
                width="80"
                height="80"
                alt="React Bootstrap logo"
              />
              <div className={classes.priceText}>40$ for 1 racket</div>


            </Col>
            <Col xs={2}></Col>
            <Col md="auto" className={classes.priceBlock}>
              <img 
                className={classes.icon}
                src={tennis2}
                width="80"
                height="80"
                alt="React Bootstrap logo"
              />
              <div className={classes.priceText}>35$ each for 2 or more rackets</div>
            </Col>
          </Row>

    

          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.title} >Available Strings</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" xs lg="11">
              <p className = {classes.writing}>
                You can supply your own string or choose one of the three strings in my inventory. I carry three categories of strings, x,y and z. As someone with over 25 years experience playing tennis I have tried many strings and I believe these three offer the best performance all around for a wide variety of players. Click the panels below to see more information about each one and my reccomendations.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
          
            <Cards
              link={'https://tlcanalytics.shinyapps.io/tlc_fast_dash/'}  
              image={tournaBigHitter}
              image1 = {{width:'80%', padding:'10px', marginLeft:'10%'}}
              textClass={classes.bodyText}
              title={"Tourna Big Hitter Rough"}
              text={"A very powerful string meant for an all-arounder, it provides a soft but firm bounce off balls with heavy topspin. This is my favorite string and the one I now use. If you aren't sure which string to choose I would reccomend starting out with this one as it is very forgiving."}
            />
            <Cards
              link={'https://tlcanalytics.shinyapps.io/tlc_fast_dash/'}  
              image={tournaSilver}
              image1 = {{width:'80%', padding:'10px', marginLeft:'10%'}}
              textClass={classes.bodyText}
              title={"Tourna Big Hitter Silver 7 Tour"}
              text={"For a more advanced player who needs maximum control, the silver 7 series offers a solid balanced feel that will help you manage shot placement. A great choice for serve and volley players."}
            />
            <Cards
              link={'https://tlcanalytics.shinyapps.io/tlc_fast_dash/'}  
              image={tournaGrit}
              image1 = {{width:'80%', padding:'10px', marginLeft:'10%'}}
              textClass={classes.bodyText}
              title={"Tourna Grit Silver"}
              text={'For more defensive players or "pushers", this string offers a good balance of power and control that will improve your ability to respond to lots of spin and power.'}
            />
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.title} id = "contact">My Location</Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" xs lg="11">
              <p className = {classes.writing}>
                I am located near Flushing Meadows Corona Park and generally service a 10 mile area. I encourage you to contact me if you live farther away to see if I can still provide service.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.map}>
            <ReactMapGL
              
              mapboxApiAccessToken = 'pk.eyJ1IjoiZmF1c2x5Zm94MTEwIiwiYSI6ImNrMW94eTZ0ajBxNnAzbXMxMDQwcG9rbGUifQ.mNzYj-mjqarze1Cht4V9hg'
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
               
            </ReactMapGL>
            </Col>
          </Row>
          
          <Row className="justify-content-md-center">
            <Col md="auto" className={classes.title} id = "contact" >Contact Me</Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto" xs lg="11">
              <p className={classes.writing}>
                The best way to reach me is to call or text me at 718-777-777. If you perfer to email, enter your details below and send me a message. I will do my best to respond within 24 hours.
              </p>
            </Col>
          </Row>

          <Contact />
          
          
          
          
      </div>
    );
  }
}

export default Jumbo;
