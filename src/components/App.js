import React from 'react';
import Quiz from './Quiz';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './signIn';
import HomePage from './HomePage';
import Results from './Results';
import Journaling from './Journaling';


function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/journaling" element={<Journaling />} />
        </Routes> 
    );
    // should sign-in route be nested in the homepage route?
}

export default App;
