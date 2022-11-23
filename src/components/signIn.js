import React, {useState} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const FIREBASEUI_CONFIG_OBJ = {
    // sign in options displayed 
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true}, GoogleAuthProvider.PROVIDER_ID
    ],
    // for external sign-ins, show a popup login, don't redirect the page
    signInFlow: 'popup',
    callbacks: {
        //what to do after I successfully sign in (functions that get run) just return false -- makes sure it doesn't redirects 
        signInSuccessWithAuthResults: () => false
    },
    // to avoid showing account chooser (such as ' you previously signed in as this person, do you wanna sign in as them again?)
    credentialHelper: 'none',
}

export default function signIn(props) {

    const auth = getAuth(); // firebase authenticator

    return (
        <div>
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />
        </div>
    )
}