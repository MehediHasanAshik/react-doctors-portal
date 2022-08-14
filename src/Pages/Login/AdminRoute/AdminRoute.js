import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, admin} = useAuth();
    return (
        <div>
            {
                user.email && admin ? children : <Navigate to={{
                    pathname: '/',
                    state: { from: location }
                }} />
            }
        </div>
    );
};

export default AdminRoute;