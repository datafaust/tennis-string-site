import React, { Component } from 'react'
import { Col, Row, Image, Button, Card } from 'react-bootstrap'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarC from './navbar';
import shiny from "../assets/shiny.png";
import metal from "../assets/metal.png";
import classes from "./smcomp/projectCard.module.css"
import Cards from './smcomp/projectCard';
import taxi from "../assets/taxi.png";
import iss from "../assets/iss.png";
import nuclear from "../assets/nuclear.png";
import datahub from "../assets/datahub.png";
import decoder from "../assets/decoder.jpg";
import meetup from "../assets/meetup.png";

class Pricing extends Component {

    render() {


        return (
            <div>
                <NavBarC />
                    <div style={{ marginTop: 150 }}>
                    <div>IMAGE GOES HERE</div>
                    <Row>
                        <div>
                            Below is our pricing. We currently carry 3 different types of strings to use. You can also elect to supply your own strings.
                        </div>
                    </Row>
                    <Row>
                        <Cards
                            link={'https://tlcanalytics.shinyapps.io/tlc_fast_dash/'}  
                            image={taxi}
                            image1 = {{width:'25%', padding:'10px'}}
                            textClass={classes.bodyText}
                            title={"FAST DASH"}
                            text={"TLC Fash Dash was built to quickly give users access to the NYC Taxi Industry indicators."}
                        />

                        <Cards
                            link={'https://nikitaprototypes.shinyapps.io/ISS_Tracker/'}
                            image={iss}
                            image1 = {{width:'22%', padding:'10px'}}
                            textClass={classes.bodyText}
                            title={"ISS TRACKER"}
                            text={"An App that tracks the International Space Station in real time from the NASA API."}
                        />

                        <Cards
                            link = {'https://nikitaprototypes.shinyapps.io/NuclearTests/'}
                            image={nuclear}
                            image1 = {{width:'24%', padding:'7px'}}
                            textClass={classes.bodyText}
                            title={"NUCLEAR EXPLOSIONS MAP"}
                            text={"Dynamically displaying every nuclear explosion between 1945 and 1998."}
                        />
                </Row>

                <Row style={{ backgroundColor: "#485671", marginTop: '100px' }}>
                    <p style={{ width: "40%", margin: "3% 30%", color: "white", textAlign: 'center' }}>
                        2019. VERYCOOL Studio. All Rights Reserved.
                    </p>
                </Row>
                </div>
            </div>
        )
    }
}

export default Pricing;