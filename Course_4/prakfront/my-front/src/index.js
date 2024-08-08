import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import {ApartmentPage} from "./pages/ApartmentPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ProfilePage} from "./pages/ProfilePage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {Homepage} from "./pages/Homepage";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Homepage/>} />
                <Route path="apartment/:apartmentId" element={<ApartmentPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="registration" element={<RegistrationPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
