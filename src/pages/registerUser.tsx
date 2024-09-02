import React from 'react';
import RegistrationForm from '../components/Registration';

const RegisterPage = () => {
    return (
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h1>Register User</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegisterPage;
