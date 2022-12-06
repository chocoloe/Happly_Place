import React from 'react';
import SurveyComponent from './SurveyComponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage';
import Results from './Results';
import Journaling from './Journaling';
import UrgentResources from './UrgentResources';
import Therapy from './Therapy';
import Community from './Community';
import SelfCare from './SelfCare';
import Resources from './Resources';


function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<SurveyComponent />} />
            <Route path="/results" element={<Results />} />
            <Route path="/journaling" element={<Journaling />} />
            <Route path="/urgentresources" element={<UrgentResources />} />
            <Route path="/nonurgenthelp" element={<Therapy />} />
            <Route path="/community" element={<Community />} />
            <Route path="/selfcare" element={<SelfCare />} />
            <Route path="/resources" element={<Resources />} />
        </Routes> 
    );
    // should sign-in route be nested in the homepage route?
}

export default App;
