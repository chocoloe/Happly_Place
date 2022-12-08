import React from 'react'; //import React library
import {Container, Nav, Navbar} from 'react-bootstrap';


// Creates the navbar with it's link to other pages 'home' ' journaling 'Questionnaire'
export default function NavBar(props) { // passing in props breaks the code but I would need it for lines 8-13...


    // const [burgerOpen, setBurgerOpen] = useState (false);

    // // Handles the toggle action in the Nav bar
    // const toggleBurger = (useState) => {
    //     setBurgerOpen(!burgerOpen);
    // }

    // const currentUser = props.currentUser.userId;

    // const handleSignOut = (event) => {
    //     console.log("signing out");
    //     signOut(getAuth());
    // }

    return (
        <div className='nav-happy'>
            <Navbar expand="lg"> 
            <Container>
                <Navbar.Brand href="/" className="nav-title">Happy Place</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="sm-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="Journaling">Journaling</Nav.Link>
                        <Nav.Link href="Quiz">Questionnaire</Nav.Link>
                        <Nav.Link href="Resources">Resources</Nav.Link>
                        <Nav.Link href="SignIn">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
