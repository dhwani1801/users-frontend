import React from 'react';
import UserList from '../components/UserList';

const UserListPage= () => {
    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1>Registered Users</h1>
            <UserList />
        </div>
    );
};

export default UserListPage;
