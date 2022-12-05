import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function Therapy() {
    
    return(
        <div>
            <header>
                <NavBar />
            </header>
        <main class="resources">
            <h1>Non-Urgent Professional Help</h1>
            <h2>Resources Catered to Certain Identities</h2>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Inclusive Therapists</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">For people of all identities</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.inclusivetherapists.com/images/img/random/inclusive-therapists-cover-photo.jpg" height="250px"/>
                    <CardBody>
                        <CardText>
                            Connect with therapists near you who understand your backgrounds and identity. 
                        </CardText>
                        <Button href="https://www.inclusivetherapists.com/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Q Center Drop-In Hours</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Celebrating all sexual/gender orientations & identities</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://sites.uw.edu/qcenter/files/2021/02/Q-outline--375x375.png" height="250px"/>
                    <CardBody>
                        <CardText>
                            Advising about higher education, academic guidance, sexual health, wellbeing, and more.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/drop-in-hours/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Queer Mentorship and Peer Program</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Support for LGBTQ+ students</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.childnet.com/wp-content/uploads/2022/05/Untitled-design-1024x1024.png" height="250px"/>
                    <CardBody>
                        <CardText>
                            Provides a safe environment to discuss sexual orientation & gender identity/expression.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/queer-mentoring-program/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Multicultural Counselors</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Washington Counselors of Color Network</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/06/Multicultural-counseling.jpg" height="250px"/>
                    <CardBody>
                        <CardText>
                        Serves an array of ethnic clients needing counseling and therapy from providers who understand the specific needs of people of color and various cultures
                        </CardText>
                        <Button href="https://www.multiculturalcounselors.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Asian Mental Health Collective</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Mental health support for the Asian community</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://causes.benevity.org/clogo/standard_image/840-852046622" height="250px"/>
                    <CardBody>
                        <CardText>
                            AMHC aspires to make mental health easily available, approachable, and accessible to Asian communities worldwide.
                        </CardText>
                        <Button href="https://www.asianmhc.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Call Blackline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://images.squarespace-cdn.com/content/v1/5a4691e19f07f5d01c0a3df3/8fb38b89-dc8b-4719-9385-66177a2e9621/call-blackline-black-logo.png" height="250px"/>
                    <CardBody>
                        <CardText>
                        Provides a space for peer support for the lived experiences to folxs who are most impacted by oppression with an LGBTQ+ Black Femme Lens
                        </CardText>
                        <Button href="https://www.callblackline.com/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <h2>General Resources</h2>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Drop-In Counseling</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Virtual "Let's Talk"</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://play-lh.googleusercontent.com/otMQBOueuiS6mxADdmn-eDzdOChnQmUKrW1OCnwTf69bwrHP03N1KiKNp6iw6Kec0f6R" height="250px"/>
                    <CardBody>
                        <CardText>
                        Virtual Let’s Talk is a program that connects UW students with support from experienced counselors from the Counseling Center without an appointment.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/virtual-lets-talk/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Crisis Text Line</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Text HOME to 741741 to connect with a counselor</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.crisistextline.org/wp-content/uploads/2020/03/social-share.png" height="250px"/>
                    <CardBody>
                        <CardText>
                        Pairs you up with a volunteer specific to your needs and situation. Great for those who would like to access support within minutes and prefers a text conversation.
                        </CardText>
                        <Button href="https://www.crisistextline.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">My SSP</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Mental health support for UW students</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://pbs.twimg.com/profile_images/553300445083365376/Z-KxAjNY_400x400.png" height="250px"/>
                    <CardBody>
                        <CardText>
                            24/7 chat via My SSP website or call. Request a consultation with a counselor and have call returned on the same day.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/mental-health/myssp/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )}