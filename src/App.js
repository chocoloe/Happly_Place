import React from 'react';

import Quiz from './components/Quiz';

function App() {

import { Route, Routes, BrowserRouter, /*Outlet, Link */} from 'react-router-dom';

function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
            </Routes>

                <Route path="homePage" element={<homePage />} />
                {/* <Route path="Journaling" element={<Journaling />} /> */}
                <Route path="signIn" element={<signIn />} /> 
                {/* <Route path="Questionnaire" element={<Questionnaire />} /> */}
            </Routes> 
        </BrowserRouter>

    );
    // should sign-in route be nested in the homepage route?
}

export default App;
