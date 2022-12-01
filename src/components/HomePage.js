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
                <div>
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
                <div>
                    {/* <div className="card-container">
                        {companyCards}
                    </div> */}
                </div>
            </section> 
            <h2>About Us</h2>
                 <p>Happy Place is an application that allows underrepresented students at the University of Washington to access quality mental health care by providing them with an outlet through a journal. </p>
                 <p>This journal allows them to express their feelings and concerns and prompts them with questions through a guided questionnaire.  </p>
                {/* <button className="btn btn-light home-link"><Link to="/">Start My Apartment Search</Link></button> */}
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    );
}