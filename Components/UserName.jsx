import React from 'react';

import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';

import { useAuth0 } from '@auth0/auth0-react';

const UserName = () => {
    const { isAuthenticated, user } = useAuth0();

    return isAuthenticated ? <h2>{user.nickname}</h2> : null;
};

export default UserName;