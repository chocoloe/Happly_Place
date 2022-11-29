import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

//import { Link } from "react-router-dom";


export default function homePage() {
  return (
         <div>
             <NavBar/>
             <main className="about">
                 <h2>About Us</h2>
                 <p>Happy Place is an application that allows underrepresented students at the University of Washington to access quality mental health care by providing them with an outlet through a journal. </p>
                 <p>This journal allows them to express their feelings and concerns and prompts them with questions through a guided questionnaire.  </p>
                <p>This journal allows them to express their feelings and concerns and prompts them with questions through a guided questionnaire.  </p>
                 //<button className="btn btn-light home-link"><Link to="/">Start My Apartment Search</Link></button>
             </main>
             //<Footer className="about-footer"/>
         </div>
     )

}
