import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function Community() {
    
    return(
        <div>
        <header>
            <NavBar />
        </header>
        <main class="resources">
            <h1>Peer Support & Community</h1>
            <h2>Resources Catered to Certain Identities</h2>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Gender Discussion Group</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://i0.wp.com/depts.washington.edu/qcenter/wordpress/wp-content/uploads/2020/10/G.png?fit=1181%2C1181&ssl=1" height="300px"/>
                    <CardBody>
                        <CardText>
                            Confidential, drop-in group that centers trans, non-binary, and gender non-conforming experiences.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/gender-discussion-group-2/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Peer Support Network for Undocumented Students - Purple Group </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/purple-group-image-1-750x750.jpg" height="300px"/>
                    <CardBody>
                        <CardText>
                            Meet weekly to foster community building, connect with allies, share resources, participate in workshops, and discuss issues affecting immigrant communities.
                        </CardText>
                        <Button href="https://www.crisistextline.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW BIPOC Grief Group</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://adaa.org/sites/default/files/2022-04/iStock-1352277872%20purchase%20BIPOC%20community%20small_0.jpeg" height="300px"/>
                    <CardBody>
                        <CardText>
                            Provides a space for BIPOC folx to talk about grief and loss.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/mental-health/groups-workshops-trainings/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <h2>General Resources</h2>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Recreation - Mindfulness, yoga and meditation</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/37/2022/04/07110053/Mindfulness-webpage-spring-2022-landscape-3_ccexpress-750x500.jpeg" height="200px"/>
                    <CardBody>
                        <CardText>
                            Discover ways to nurture your body and mind and experience more moments of reflection, clarity, empowerment and connection in your daily lives.
                        </CardText>
                        <Button href="https://www.washington.edu/ima/mindfulness/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Pet Therapy</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://post.healthline.com/wp-content/uploads/2020/08/pet-therapy_thumb.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                            For those who would like to enjoy time with furry friends and destress.
                        </CardText>
                        <Button href="https://www.washington.edu/ima/mindfulness/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Mindfulness Meditation group workshops</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148911452.jpg?w=2000" height="200px"/>
                    <CardBody>
                        <CardText>
                            Practice and discussion oriented group that helps people calm and soothe their nervous systems, looking at different aspects of mindfulness and sharing thoughts about the practice.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/mental-health/groups-workshops-trainings/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )}