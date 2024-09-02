import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/registerUser';
import UserListPage from './pages/listUser';

const AppRoutes  = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/users" element={<UserListPage />} />
                <Route path="/" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
