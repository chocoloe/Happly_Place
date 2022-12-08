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
            <div class="prompts">
                <h2>Student Organizations</h2>
                <p>Resgistered Student Organizations are a great way to meet other people, especially those with similar interests and backgrounds as you. The University of Washington offers over a hundred different organizations, and these are just a few examples. If none of these peak your interest, we encourage you to look through the <a href="https://huskylink.washington.edu/">RSO directory</a> for a more suitable option for you.</p>
                <h4><a href="https://huskylink.washington.edu/organization/lsamp">Louis Stokes Alliance for Minority Participation</a></h4>
                <p>The Louis Stokes Alliance for Minority Participation (LSAMP) is designed to increase the quality and number of students from under-represented minority groups who complete undergraduate degrees in science, technology, engineering, and mathematics (STEM).</p>
                <h4><a href="https://huskylink.washington.edu/organization/asa">African Student Association</a></h4>
                <p>The African Students Association at UW strives to spread cultural awareness throughout this institution, engage in community service through high school outreach, and provide social & academic networks of equally accomplished individuals to its members.</p>
                <h4><a href ="https://huskylink.washington.edu/organization/uwblackstudentunion">Black Student Union</a></h4>
                <p>The purpose of this organization is to establish a cohesive union between Black students, Black faculty, other Black organizations and the greater UW community.</p>
                <h4><a href ="https://huskylink.washington.edu/organization/huskyh">Husky Help Organization</a></h4>
                <p>HHO dedicates on helping international students at UW, especially Chinese students, to understand resources on campus and in Seattle, fitting themselves better in the new living/social/studying environment.</p>
                <h4><a href ="https://careers.uw.edu/organizations/indigenous-students-of-latin-america/">Indigenous Students of Latin America</a></h4>
                <p>Safe Place for Indiegenous Students whose families are from an indigenous community in Latin America.</p>
                <h4><a href ="http://students.washington.edu/dasa/">DASA - University of Washington’s Disability Advocacy Student Alliance</a></h4>
                <p>For students with disabilities</p>
                <h4><a href ="https://careers.uw.edu/organizations/evans-international-students-association/">Evans International Student Association</a></h4>
                <p>EISA aims to provide community and professional support to all international students at Evans, creating a space for their voices to be heard, celebrated and shared with the wider student community.</p>
                <h4><a href ="https://careers.uw.edu/organizations/trans-collective-at-university-of-washington/">Trans Collective at University of Washington</a></h4>
                <p>Aims to center trans joy and resilience through community building and to dismantle cis normative ideals.</p>
                <h4><a href ="https://huskylink.washington.edu/organization/qpoca">Queer People of Color Alliance</a></h4>
                <p>Supports queer and trans folks of color to build and share community, make friends, have fun, and discuss race, ethnicity, gender and sexuality as it relates to our lives, experiences and marginalization</p>
                <h4><a href ="https://mit.cs.washington.edu/">Minorities in Tech at the University of Washington</a></h4>
                <p>Build and foster a diverse community that increases solidarity, allyship, and support to promote higher retention rates of minorities within the technology industry and academia with focus on supporting Black and Latinx students.</p>
                <h4><a href ="https://huskylink.washington.edu/organization/lsuuw">Latine Student Union at the University of Washington</a></h4>
                <p>Committed to building a friendly, supportive and empowering community for Latine students from different cultural and racial backgrounds</p>
            </div>
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
            <div class="prompts">
                <h2>Here are some journaling prompts that may help you:</h2>
                <ol type="1">
                    <li>What are some values that you would like your friends and acquaintances to share?</li>
                    <li>What does a community that accepts and welcomes your identity look like?</li>
                    <li>What do you look for in quality friendships?</li>
                    <li>Do you have any concerns about forming friendships with others? </li>
                    <li>How do you know that a community is supportive of your backgrounds/ identity? </li>
                    <li>How might you confront someone who is not being supportive or welcoming of your identity?</li>
                    <li>What kind of people do you want to be friends with? What kind of friend would you want to be for others?</li>
                    <li>What are three actions you can take this week to expand your network and meet new people?</li>
                </ol> 
                <a href="./Journaling" aria-label="navigates to the journaling page">Start Writing</a>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )}