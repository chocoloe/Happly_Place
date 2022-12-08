import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import NavBar from './NavBar';
import Footer from './Footer.js';

const FIREBASEUI_CONFIG_OBJ = {

    //code was from inspired from Joel Ross's INFO 340 Lecture Demo on firebase authentification

    // sign in options displayed 
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true}, GoogleAuthProvider.PROVIDER_ID
    ],
    // for external sign-ins, show a popup login, don't redirect the page
    signInFlow: 'popup',
    callbacks:{
        //what to do after I successfully sign in (functions that get run) just return false -- makes sure it doesn't redirects 
        signInSuccess: () => false,
        signInSuccessWithAuthResults: () => {
            return false;
        }

    },
    
    // to avoid showing account chooser (such as ' you previously signed in as this person, do you wanna sign in as them again?)
    credentialHelper: 'none',
}

export default function SignIn(props) {

    const currentUser = props.currentUser;

    const auth = getAuth(); // firebase authenticator

    const handleClick = (event) => {
        const whichUser = event.currentTarget.name 
        const userObj = {
            userId: whichUser.toLowerCase() || null,
            userName: whichUser || null
        }
        props.loginFunction(userObj)
    }
    

    return (
        <div>
            <NavBar />
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
            <footer className="signIn-Footer">
                <Footer />
            </footer>
        </div>
    )
}
