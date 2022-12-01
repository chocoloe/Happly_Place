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
            <section>
                <h2>What is your focus for today?</h2>
                <div className="container">
                    {/* <div className="search-sort-container">
                    <div className="search-bar">
                        <input type="text" placeholder="Company Name" onChange={handleChange} value={searchInput}/>
                    </div>
                        <DropdownFeature />
                    </div> */}
                </div>
             </section>
            <section>
                <h2>Underrepresented College Students and Mental Health </h2>
                <div className="container">
                    <div className="container-image">
                        <img src="../img/College-Student-Mental-Health.jpg" alt="illustration of young women struggling with her mental health" />
                    </div>
                    <div>
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
                            However, some barriers that have prevented students from these communities in getting the treatment and support they need incude stigma, the need for mental health resources rapidly exceeding available resources, financial issues, and available resources not being a good fit (such as not being understanding of their unique struggles and lack of representation)
                        </p>
                    </div>
                </div>
                
            </section> 
            <section>
                <h2>About Us</h2>
                    <p>Happy Place is an application that allows underrepresented students at the University of Washington to access quality mental health care by providing them with an outlet through a journal. </p>
                    <p>This journal allows them to express their feelings and concerns and prompts them with questions through a guided questionnaire.  </p>
                    {/* <button className="btn btn-light home-link"><Link to="/">Start My Apartment Search</Link></button> */}
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    );
}