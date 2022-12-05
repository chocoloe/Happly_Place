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
            <p>crisis resources (diversity-focused)</p>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Call Blackline </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            Provides peer support and counseling prioritizing BIPOC, with an LGBTQ+ Black Femme Lens.
                        </CardText>
                        <Button href="https://www.callblackline.com/">1 (800) 604-5841</Button>
                    </CardBody>
                </Card>
                <Card>
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
                <Card>
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
            <p>crisis resources (general)</p>
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
            <p>Non-urgent help from therapists (diversity-focused)</p>
            <CardGroup>
                <Card style={{width: '30rem'}}>
                    <CardBody>
                        <CardTitle tag="h5">Inclusive Therapists</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">For people of all identities</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.inclusivetherapists.com/images/img/random/inclusive-therapists-cover-photo.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                            Connect with therapists near you who understand your backgrounds and identity. 
                        </CardText>
                        <Button href="https://www.inclusivetherapists.com/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card style={{width: '30rem'}}>
                    <CardBody>
                        <CardTitle tag="h5">UW Q Center Drop-In Hours</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Celebrating all sexual and gender orientations, identities, and expressions</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://hub.washington.edu/wordpress/wp-content/uploads/2022/04/q_center.png" height="200px"/>
                    <CardBody>
                        <CardText>
                            Advising about higher education, academic guidance, sexual health, wellbeing, and more.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/drop-in-hours/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card style={{width: '30rem'}}>
                    <CardBody>
                        <CardTitle tag="h5">UW Queer Mentorship and Peer Program</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Support for LGBTQ+ students</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://sites.uw.edu/qcenter/files/2022/10/quote-3.png" height="200px"/>
                    <CardBody>
                        <CardText>
                            Provides a safe, affirming, and exciting environment in which a mentee’s sexual orientation, gender identity, and gender expression is supported and celebrated by an educated and experienced mentor.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/queer-mentoring-program/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Multicultural Counselors</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Washington Counselors of Color Network</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/06/Multicultural-counseling.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                        Serves an array of ethnic clients needing counseling and therapy from providers who understand the specific needs of people of color and various cultures
                        </CardText>
                        <Button href="https://www.multiculturalcounselors.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Asian Mental Health Collective</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Mental health support for the Asian community</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.asianmhc.org/wp-content/uploads/2021/06/AMHC_Logos_OneLine.png" height="200px"/>
                    <CardBody>
                        <CardText>
                            AMHC aspires to make mental health easily available, approachable, and accessible to Asian communities worldwide.
                        </CardText>
                        <Button href="https://www.asianmhc.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Call Blackline</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://images.squarespace-cdn.com/content/v1/5a4691e19f07f5d01c0a3df3/8fb38b89-dc8b-4719-9385-66177a2e9621/call-blackline-black-logo.png" height="200px"/>
                    <CardBody>
                        <CardText>
                        Provides a space for peer support, counseling, witnessing and affirming the lived experiences to folxs who are most impacted by systematic oppression with an LGBTQ+ Black Femme Lens
                        </CardText>
                        <Button href="https://www.callblackline.com/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <p>Non-urgent help from therapists</p>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">UW Drop-In Counseling</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Virtual "Let's Talk</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://pbs.twimg.com/profile_images/1311037517571870720/0dymsNUW_400x400.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                        Virtual Let’s Talk is a program that connects UW students with support from experienced counselors from the Counseling Center without an appointment.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/virtual-lets-talk/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Crisis Text Line</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Text HOME to 741741 to connect with a volunteer Crisis Counselor</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://www.crisistextline.org/wp-content/uploads/2020/03/social-share.png" height="200px"/>
                    <CardBody>
                        <CardText>
                        Pairs you up with a volunteer specific to your needs and situation. Great for those who would like to access support within minutes and prefers a text conversation.
                        </CardText>
                        <Button href="https://www.crisistextline.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">My SSP</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">Prioritizes BIPOC</CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://pbs.twimg.com/profile_images/553300445083365376/Z-KxAjNY_400x400.png" height="200px"/>
                    <CardBody>
                        <CardText>
                        Provides a space for peer support, counseling, witnessing and affirming the lived experiences to folxs who are most impacted by systematic oppression with an LGBTQ+ Black Femme Lens
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/mental-health/myssp/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <p>Peer Support and Community (Diversity focused)</p>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">UW Gender Discussion Group</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://localist-images.azureedge.net/photos/39544966490336/card/4e1d84d3427f132197f026f342c51c5894985304.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                            Confidential, drop-in group that centers trans, non-binary, and gender non-conforming experiences.
                        </CardText>
                        <Button href="https://sites.uw.edu/qcenter/programs-and-services-hub/gender-discussion-group-2/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">UW Peer Support Network for Undocumented Students - Purple Group </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
                    </CardBody>
                    <img alt="Sample" src="https://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/purple-group-image-1-750x750.jpg" height="200px"/>
                    <CardBody>
                        <CardText>
                            Meet weekly to foster community building, connect with allies, share resources, participate in workshops, and discuss issues affecting immigrant communities.
                        </CardText>
                        <Button href="https://www.crisistextline.org/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">UW BIPOC Grief Group</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://adaa.org/sites/default/files/2022-04/iStock-1352277872%20purchase%20BIPOC%20community%20small_0.jpeg" height="200px"/>
                    <CardBody>
                        <CardText>
                            Provides a space for BIPOC folx to talk about grief and loss.
                        </CardText>
                        <Button href="https://wellbeing.uw.edu/mental-health/groups-workshops-trainings/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <p>Peer Support and Community</p>
            <CardGroup>
                <Card>
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
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">UW Pet Therapy</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://wellbeing.uw.edu/wp-content/uploads/2022/12/Capture.png" height="200px"/>
                    <CardBody>
                        <CardText>
                            For those who would like to enjoy time with furry friends and destress.
                        </CardText>
                        <Button href="https://www.washington.edu/ima/mindfulness/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
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
            <p>Self-Care Tips</p>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Emotionally Restorative Self-Care for PoC</CardTitle>
                    </CardBody>
                    <iframe src="https://www.youtube.com/embed/GuLT_YQLGF8" title="YouTube video player" frameborder="0" height="200px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <CardBody>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Self-Care Tips for College Students</CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://891327.smushcdn.com/2078204/wp-content/uploads/2021/12/Untitled-design-2021-12-06T205018.956.png?lossy=1&strip=1&webp=1" height="200px"/>
                    <CardBody>
                        <Button href="https://whatcherithinks.com/25-self-care-tips-for-college-students/">Visit Site</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Serenity Space at the Samuel E. Kelly Ethnic Cultural Center </CardTitle>
                    </CardBody>
                    <img alt="Sample" src="https://depts.washington.edu/ecc/wordpress/wp-content/uploads/2022/06/Serenity-1-500x300.jpg" height="200px"/>
                    <CardBody>
                        <CardText></CardText>
                        <Button href="https://depts.washington.edu/ecc/serenity-space/">Visit Site</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div> 
    )}