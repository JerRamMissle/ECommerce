import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';



const Auth0ProviderWithHistory = ({ children }) => {
    const domain = 'dev-t5iwmy3cd4rzhqwv.us.auth0.com';
    const clientId = 'R5lx7fbGoj1BWOJSWnjJHGcRQ01axMmX';
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
        navigate.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;