import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Badge, CardImg, Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function Results() {
    
    return(
        <div>
        <header>
            <NavBar />
        </header>
        <main class="results resources">
            <h1>Thank you for completing our questionnaire!</h1>
            <h2>We encourage you to fill it out every once in a while as a self-check on your mental health. </h2>
            <h3>Mental health is a continuous  work in progress; please use these general and identity-specific resources to support your mental health journey.</h3>
            <Row>
                <Col>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle tag="h5">Urgent Help</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">For Crisis Scenarios</CardSubtitle>
                                <CardText>
                                    Please call 911 if you are in danger. For other crisises (like if you are at risk for self-harm) and if you would like to speak to someone please check out our urgent resources.
                                </CardText>
                                <Link to="/UrgentResources"><Button>Visit</Button></Link>
                            </CardBody>
                        </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{width: '25rem'}} className="mb-6">
                        <CardImg alt="shows therapy session" src="https://www.stylist.co.uk/images/app/uploads/2021/11/25112324/therapy-myths-misconceptions-crop-1637839516-1440x1440.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress" height="350px"/>
                        <CardBody>
                            <CardTitle tag="h5">Non-Urgent Professional Help</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">Explore ways to get connected with specialists</CardSubtitle>
                            <CardText>
                                Speaking with someone can give you an opportunity to explore your thoughts, feelings, and patterns of behavior. This is especially useful if you are feeling anxious, depressed, or hopeless.
                            </CardText>
                            <Link to="/nonurgenthelp"><Button>Visit</Button></Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '25rem'}} className="mb-6">
                        <CardImg alt="group of people hugging each other" src="https://www.outfrontmagazine.com/wp-content/uploads/2021/03/finding-peer-support-has-improved-my-management-of-type-2-diabetes-722x406-1.jpg" height="350px"/>
                        <CardBody>
                            <CardTitle tag="h5">Peer Support & Community</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">Meet others like you</CardSubtitle>
                            <CardText>
                                Find peers & communities of people who may share similar identities and experiences as you. This is especially useful if you are feeling isolated or lonely or are craving a sense of belonging.
                            </CardText>
                            <Link to="/community"><Button>Visit</Button></Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '25rem'}} className="mb-6">
                        <CardImg alt="person showing self-love" src="https://img.freepik.com/free-vector/self-care-concept_23-2148531134.jpg?w=2000" height="350px"/>
                        <CardBody>
                            <CardTitle tag="h5">Self Care Tips</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">Take care of yourself</CardSubtitle>
                            <CardText>
                               Even if you're doing great, mental health is a continous journey and requires actively taking care of yourself! Here are some ways to prioritize your well-being.
                            </CardText>
                            <Link to="/selfcare"><Button>Visit</Button></Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </main>
        <footer>
            <Footer />
        </footer>
        </div> 
        
    )}