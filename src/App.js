import React from 'react';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Quiz from './components/Quiz';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/questionnaire' element={<Quiz />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
