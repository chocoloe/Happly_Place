import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function SelfCare() {
    
    return(
        <div>
        <header>
            <NavBar />
        </header>
        <main class="resources">
            <h1>Self-Care Tips and Resources</h1>
            <h2>Keep up the good work!</h2>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Emotionally Restorative Self-Care for PoC</CardTitle>
                    </CardBody>
                    <iframe alt="self care youtube video" src="https://www.youtube.com/embed/GuLT_YQLGF8" title="YouTube video player" frameborder="0" height="200px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <CardBody>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Self-Care Tips for College Students</CardTitle>
                    </CardBody>
                    <img alt="college students" src="https://891327.smushcdn.com/2078204/wp-content/uploads/2021/12/Untitled-design-2021-12-06T205018.956.png?lossy=1&strip=1&webp=1" height="200px"/>
                    <CardBody>
                        <Button href="https://whatcherithinks.com/25-self-care-tips-for-college-students/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">Serenity Space at the Samuel E. Kelly Ethnic Cultural Center </CardTitle>
                    </CardBody>
                    <img alt="self care room" src="https://depts.washington.edu/ecc/wordpress/wp-content/uploads/2022/06/Serenity-1-500x300.jpg" height="200px"/>
                    <CardBody>
                        <CardText></CardText>
                        <Button href="https://depts.washington.edu/ecc/serenity-space/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card className="mb-4">
                    <CardBody>
                        <CardTitle tag="h5">UW Recreation - Mindfulness, yoga and meditation</CardTitle>
                    </CardBody>
                    <img alt="people doing yoga" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/37/2022/04/07110053/Mindfulness-webpage-spring-2022-landscape-3_ccexpress-750x500.jpeg" height="200px"/>
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
                    <img alt="dog" src="https://post.healthline.com/wp-content/uploads/2020/08/pet-therapy_thumb.jpg" height="200px"/>
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
                    <img alt="person meditating" src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148911452.jpg?w=2000" height="200px"/>
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
                    <li>Write for 10 minutes about something or someone you are grateful for. </li>
                    <li>What are five things about yourself that you are proud of? Explain why.</li>
                    <li>Do you think your identity has shaped your values in any way? If so, explain why you think so and give examples of values.</li>
                    <li>Write a letter to someone you are grateful for.</li>
                    <li>What are some things you like to do for fun? Write out a plan to do at least one of these things this week. </li>
                    <li>Write affirmations about your personal life, academic year/term, social life, career, and goals. </li>
                    <li>How does your identity and background influence how you define happiness?</li>
                    <li>What does happiness mean to you? What does it look like? What’s one thing you can do to feel happy this week?</li>
                    <li>What are some things you are looking forward to one week from now? One month from now? One year from now? Several years from now?</li>
                </ol> 
                <a href="./Journaling" aria-label="navigates to the journaling page">Start Writing</a>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )}