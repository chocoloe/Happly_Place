import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col, Badge, CardGroup, Card, CardTitle, CardSubtitle, CardLink, CardBody, CardHeader, CardText } from 'reactstrap';

export default function Results() {
    
    return(
        <div>
        <h1>Results: It’s okay to feel overwhelmed </h1>
        <h2>For your health and safety, please use one of the appropriate resources below for immediate help and support.</h2>
        <h3>Summary of Results:</h3>
        <ul>
            <li>Your results indicated you are feeling high amounts of distress, could currently be experiencing a mental health crisis, and might be seeking urgent mental health help</li>
            <li>We recommend taking a look at the below resources to find the resource that best fits your situation and to help guide you through your mental health journey</li>
            <li>Remember that’s it okay to ask for help</li>
        </ul>
        <p></p>
        <CardGroup>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Call Blackline </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Provides peer support and counseling prioritizing BIPOC, with an LGBTQ+ Black Femme Lens.
                    </CardText>
                    <CardLink href="https://www.callblackline.com/">1 (800) 604-5841</CardLink>
                </CardBody>
            </Card>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Trans Lifeline</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Support for Transgender Community</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Hotline run by those who identify as part of the  transgender and separates itself from the police.
                    </CardText>
                    <CardLink href="https://translifeline.org/">(877) 565-8860</CardLink>
                </CardBody>
            </Card>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Trevor Lifeline</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">24/7 Support for LGBTQ+ Youths</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        If you are thinking about harming yourself — get immediate support. Connect to a crisis counselor 24/7, 365 days a year.
                    </CardText>
                    <CardLink href="https://www.thetrevorproject.org/get-help/?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke4d1873GqwolNoOodnJ0gW4w4JCoI1-OOkDK6NI4PwDhjnVrfyrCCYaAlrHEALw_wcB">(866)-488-7386</CardLink>
                </CardBody>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Call Blackline </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Provides peer support and counseling prioritizing BIPOC, with an LGBTQ+ Black Femme Lens.
                    </CardText>
                    <CardLink href="https://www.callblackline.com/">1 (800) 604-5841</CardLink>
                </CardBody>
            </Card>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Trans Lifeline</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Support for Transgender Community</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Hotline run by those who identify as part of the  transgender and separates itself from the police.
                    </CardText>
                    <CardLink href="https://translifeline.org/">(877) 565-8860</CardLink>
                </CardBody>
            </Card>
            <Card style={{width: '30rem'}}>
                <CardBody>
                    <CardTitle tag="h5">Trevor Lifeline</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">24/7 Support for LGBTQ+ Youths</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        If you are thinking about harming yourself — get immediate support. Connect to a crisis counselor 24/7, 365 days a year.
                    </CardText>
                    <CardLink href="https://www.thetrevorproject.org/get-help/?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke4d1873GqwolNoOodnJ0gW4w4JCoI1-OOkDK6NI4PwDhjnVrfyrCCYaAlrHEALw_wcB">(866)-488-7386</CardLink>
                </CardBody>
            </Card>
        </CardGroup>
        </div> 
    );
    

}