import React from 'react';
import { Route, Routes, BrowserRouter, Outlet, Link } from 'react-router-dom';

function App(props) {
    // const [currentUser, setCurrentUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="homePage" element={<homePage />} />
                <Route path="Journaling" element={<Journaling />} />
                <Route path="signIn" element={<signIn />} />
                <Route path="Questionnaire" element={<Questionnaire />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
