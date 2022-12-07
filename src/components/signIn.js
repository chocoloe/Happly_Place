import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import NavBar from './NavBar';

const FIREBASEUI_CONFIG_OBJ = {

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
    

    // if(props.currentUser.userId){
    //     return <Navigate to="/" />
    // }

    return (
        <div>
            <NavBar />
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
        </div>
    )
}