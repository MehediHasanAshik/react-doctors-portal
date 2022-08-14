import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();
    return (
        <div>
            {
                user.email ? children : <Navigate to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
            }
        </div>
    );
};

export default PrivateRoute;