import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function HomePage() {
    return(
        <div>
            <header>
                <NavBar />
                <h1>Happy Place</h1>
            </header>
            <main>
                <section className="feature-selection">
                    <h2>What is your focus for today?</h2>
                    <div className="card">
                        <div className="card">
                            <q>
                                Questionnaire
                            </q>
                            <q>

                            </q>
                        </div>

                        <button type="button" class=""> Get Started </button>
                        <div className="card">

                        </div>
                    </div>
                </section>
                <section className="stats">
                    <h2>Underrepresented College Students and Mental Health </h2>
                    <div className="container">
                        <div className="container-stats-video col-6">
                            <iframe width="751" height="480" src="https://www.youtube.com/embed/4g_QzVuVU2I" title="Mental Health and Wellness for Students of Color: Transitioning to College" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="container-stats-content col-6">
                            <h3>
                                Quick Statistics and Facts 
                            </h3>
                            <p>
                                There is a mental health crisis among college students: 'more than 60% of college students diagnosed with at least one mental health condition' - Healthy Minds Study
                            </p>
                            <p>
                                Covid-19 introduced a additional set of challenges for college students to navigate through and exacerbated the effects of existing stressors: In a recent study by TimelyMD, they found that 70% of the 1,600 college students they surveyed experienced emotional distress from the COVID-19 pandemic. 
                            </p>
                            <p>
                                COVID-19 related stress disproportionately affected students from underrepresented and marginalized communities:  76% of women and 81% of non-binary individuals were negatively impacted by COVID-19 related stress according to 
                            </p>
                            <p>
                                Some barriers preventing students from these communities in getting the treatment and support they need incude: stigma, supply of resources not meeting high demand, financial complications, and available resources not being a good fit (i.e. lack of understanding towards their unique set of challenges)
                            </p>
                        </div>
                    </div>
                    
                </section> 
                <section className="about">
                    <div className="container">
                        <div className="about-content col-6">
                            <h2>About Us</h2>
                                <h3>What is Happy Place</h3>
                                <p>Happy Place is an application that allows underrepresented college students at the University of Washington to access quality mental health care by providing them with an outlet through a journal. </p>
                                <p>Our app consists of two features</p>
                                <ol>
                                    <li>
                                        a journal feature that allows these students to express their feelings, concerns, and thoughts.
                                    </li>
                                    <li>
                                        A questionnaire feature that allows them to better understand their mental health. The results page of the questionnnaire also  suggests journal prompts and resources that are dependant on the user's mental health state.
                                    </li>
                                </ol> 
                                <p>Unlike other solutions, the questions asked in the questionnaire are more relatable to those who identify as part of these communities. The suggested journal prompts and resource are also specifically for people in these communities. </p>
                            <h3>
                                Who We Are and Our Mission
                            </h3>
                            <p> 
                                A group of University of Washington students in INFO 442 seeking to answer the following statement: "How might we provide underrepresented students at UW access to specialized mental health resources in order to overcome their mental health struggles?"
                            </p>
                        </div>
                        <div className="about-image col-6">
                            <img src="../img/College-Student-Mental-Health.jpg" alt="illustration of young women struggling with her mental health" />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}