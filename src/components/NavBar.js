import { React , useState} from 'react'; //import React library
import { NavLink } from "react-router-dom";


// Creates the navbar with it's link to other pages 'home' ' journaling 'Questionnaire'
export default function NavBar() {

    const [burgerOpen, setBurgerOpen] = useState (false);

    // Handles the toggle action in the Nav bar
    const toggleBurger = (useState) => {
        setBurgerOpen(!burgerOpen);
    }

    return (
        
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Happy Place</a> */}

                    <button className="navbar-toggler float-right" onClick={toggleBurger} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Journaling">Journaling</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Quiz">Questionnaire</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Resources">Resources</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/SignIn">Sign In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
