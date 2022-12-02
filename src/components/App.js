import React from 'react';
import SurveyComponent from './SurveyComponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage';
import Results from './Results';


function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<SurveyComponent />} />
            <Route path="/results" element={<Results />} />
        </Routes> 
    );
    // should sign-in route be nested in the homepage route?
}

export default App;
