import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { userService } from '../apis/userApis';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUsers().then(response => {
            if (response && Array.isArray(response.data)) {
                setUsers(response.data);
            } else {
                console.error("Unexpected response format:", response);
            }
        }).catch(error => {
            console.error("Error fetching users:", error);
        });
    }, []);

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
    ];

    return <Table columns={columns} dataSource={users} rowKey="_id" />;
};

export default UserList;
