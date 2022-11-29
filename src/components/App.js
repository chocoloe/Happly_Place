import React from 'react';
import Quiz from './Quiz';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage';


function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<Quiz />} />
        </Routes> 
    );
    // should sign-in route be nested in the homepage route?
}

export default App;
