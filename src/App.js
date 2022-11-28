import React from 'react';
import React, { useMood } from 'react'; //import React library
import NavBar from './NavBar';
import Footer from "./Footer";
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import { getAuth } from "firebase/auth";
function App() {

    return (
        <BrowserRouter>
            <Routes>
//             <Route path="/" element={<HomePage companies={companies} setCompanyData={companyDataInfo} average={average} />} />
// <Route path="homePage" element={<hometPage />} />
// <Route path="Journalling" element={<CloserLookPage data={companyData} average={average} companies={companies} setCompanies={companiesInfo} />} />
// <Route path="logIn" element={<RequestPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
