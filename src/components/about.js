import React, {Component} from 'react'
import {
    //Col,
     Row,
      Image,
       //Button
    } from 'react-bootstrap'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarC from './navbar';
import classes from "./about.module.css"
import logo from "../assets/logo.png";
// import {Link} from 'react-router-dom'



class About extends Component {




    
    render(){
        return(
<div>
<NavBarC/> 
<div className={classes.flex} style = {{marginTop: '100px'}}>
              <FontAwesomeIcon
                className={classes.AppLogo1}
                icon={faCog}
                size="3x"
              />
              <FontAwesomeIcon
                className={classes.AppLogo2}
                icon={faCog}
                size="2x"
              />
              {/* <FontAwesomeIcon className={classes.AppLogo3} icon={faCog} size="3x"/> */}
            </div>
  

<div className={classes.main}>
<Image
                  src={logo}
                  rounded
                  style={{
                    width: "50%",
                    height: "auto",
                    marginLeft: "25%",
                    marginRight: "25%",
              
                  }}
                />
<h3 style = {{margin: '2% auto'}}>About</h3> 
    <p className={classes.textp}> 
        VERYCOOL Studio is a two-person Prototype and Development team located in New York City with a focus in
         prototyping and building scalable applications;
          automating complex analytical processes; selecting, building, and integrating databases; 
          creating dynamic visualizations, and providing full-stack support to our clients.
          
    </p>
    <p>
        We are experienced data engineers with more than five years of programming background in 
        R, Python, JavaScript, ReactJS, React-Native, and SQL. We both hold advanced degrees (MPA in Public Policy and MS in Applied Research),
        as well as a BS in Sociology, a BS in Economics, and a BA in Political Science. 
    </p>
    <p>
        For years, we have been expanding and automating big data analytical processes, 
        building databases, data pipelines, dashboards and apps, and conducting innovative policy research to help  
        the government of New York City create impactful legislation in the area of transportation.
    </p>

    <p>
        We listed some examples of our R and ReactJS app and data developement under 
        the <a href = "/shiny">R Shiny Projects</a> and <a href = "/shiny">React JS Projects </a>sections of this site.
        A good place to start would be the <a href = "/r">Data Analysis</a> section. Go ahead and check it out and <a href = "/r">Contact Us </a> 
        if you would like to get more information about us and what we can do for you.
    </p> 
</div>



{/* <Row>
      
        <Card className={classes.card}>
                    <a>
                        <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/1391/6001/products/HA22137W_large.jpg?v=1550154664" />
                    </a>  
                <Card.Body>
                <Card.Title style={{textAlign:"center"}}>Fausto Lopez</Card.Title>
                    <Card.Text>
                        <h4 style={{textAlign:"center"}}>Co-Founder</h4>
                        <p style={{textAlign:"center"}}>The Streets</p>
                        <p>Fausto likes to take long walks on the beach and shoot bad guys . . .</p>
                        <div style={{"display":"block","marginLeft":"10%"}}>
                            <a href="https://www.faustolopez.com/"><img src="https://img.icons8.com/nolan/64/000000/domain.png"/></a>
                            <a href="#"><img src="https://img.icons8.com/nolan/64/000000/resume.png"/></a>
                            <a href="https://www.linkedin.com/in/lopezfausto"><img src="https://img.icons8.com/nolan/64/000000/linkedin.png"/></a>
                        </div>
                        <Button>Contact</Button>
                    </Card.Text>
                </Card.Body>
                </Card>
       

         <Card className={classes.card}>
                    <a>
                        <Card.Img variant="top" src="https://www.meme-arsenal.com/memes/7dab461a96b2dd77abc33758f773cb8e.jpg" />
                    </a>  
                <Card.Body>
                <Card.Title style={{textAlign:"center"}}>Nikita Voevodin</Card.Title>
                    <Card.Text>
                        <h4 style={{textAlign:"center"}}>Co-Founder</h4>
                        <p style={{textAlign:"center"}}>Stalin University</p>
                        <p>Nikita enjoys watchign homeless people fight for money and food. On his free time he plays beach volleyball . . .</p>
                        <div style={{"display":"block","marginLeft":"10%"}}>
                            <a href="https://nikitavoevodin.com/"><img src="https://img.icons8.com/nolan/64/000000/domain.png"/></a>
                            <a href="#"><img src="https://img.icons8.com/nolan/64/000000/resume.png"/></a>
                            <a href="https://www.linkedin.com/in/nvoevodin"><img src="https://img.icons8.com/nolan/64/000000/linkedin.png"/></a>
                        </div>
                        <Button>Contact</Button>
                    </Card.Text>
                </Card.Body>
         </Card>
</Row> */}



<Row  style={{ backgroundColor: "#485671", marginTop: '100px'}}>


          <p style={{width: "40%", margin: "3% 30%", color: "white", textAlign:'center'}}>
            2019. VERYCOOL Studio. All Rights Reserved.
          </p>
        </Row>
</div>
        )
    }
}

export default About;