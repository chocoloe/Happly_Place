import React from 'react'; //import React library
import {Container, Nav, Navbar} from 'react-bootstrap';


// Creates the navbar with it's link to other pages 'home' ' journaling 'Questionnaire''resources' and 'sign-in'
export default function NavBar(props) { 

    // const currentUser = props.currentUser.userId;

    // const handleSignOut = (event) => {
    //     console.log("signing out");
    //     signOut(getAuth());
    // }

    return (
        //nav bar code with collapsable hamburger menu -- responsive and depends on screen size
        //code inspired by react-bootstrap basic navbar example on official react-bootstrap package website 
        <div className='nav-happy'>
            <Navbar expand="lg"> 
            <Container>
                <Navbar.Brand href="/" className="nav-title" aria-label='navigates to home page'>Happy Place</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="sm-auto">
                        <Nav.Link href="/" aria-label='navigates to home page'>Home</Nav.Link>
                        <Nav.Link href="Journaling" aria-label='navigates to journaling page'>Journaling</Nav.Link>
                        <Nav.Link href="Quiz" aria-label='navigates to questionnnaire page'>Questionnaire</Nav.Link>
                        <Nav.Link href="Resources" aria-label='navigates to the resources page'>Resources</Nav.Link>
                        <Nav.Link href="SignIn"aria-label='navigates to the user sign in page'>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
