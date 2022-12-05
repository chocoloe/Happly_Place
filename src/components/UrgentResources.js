import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function UrgentResources() {
    
    return(
        <div>
        <header>
            <NavBar />
        </header>
        <main class="resources">
            <h1>Urgent Resources</h1>
            <h2>Resources Catered to Certain Identities</h2>
            <CardGroup>
                <Card class="resources" className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Call Blackline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            Provides peer support and counseling prioritizing BIPOC, with an LGBTQ+ Black Femme Lens.
                        </CardText>
                        <Button href="https://www.callblackline.com/">1 (800) 604-5841</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Trans Lifeline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Support for Transgender Community</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            Hotline run by those who identify as part of the  transgender and separates itself from the police.
                        </CardText>
                        <Button href="https://translifeline.org/">(877) 565-8860</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Trevor Lifeline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">24/7 Support for LGBTQ+ Youths</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            If you are thinking about harming yourself — get immediate support. Connect to a crisis counselor 24/7, 365 days a year.
                        </CardText>
                        <Button href="https://www.thetrevorproject.org/get-help/?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke4d1873GqwolNoOodnJ0gW4w4JCoI1-OOkDK6NI4PwDhjnVrfyrCCYaAlrHEALw_wcB">(866) 488-7386</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <h2>General Resources</h2>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Crisis Connections</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Seattle-area mental health support</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            24-hour crisis line for people in the Seattle area.
                        </CardText>
                        <Button href="https://www.crisisconnections.org/">(866) 427-4747</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Crisis Text Line</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Text HOME to 741741 to connect with a volunteer Crisis Counselor</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                        Access support within minutes through text.
                        </CardText>
                        <Button href="https://www.crisistextline.org/">Text 74174</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">988 Suicide and Crisis Lifeline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">National Crisis Lifeline</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                        24/7, free and confidential support for people in distress & prevention and crisis resources for you or your loved ones.
                        </CardText>
                        <Button href="https://988lifeline.org/">Call 988</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )}