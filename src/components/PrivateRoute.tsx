import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC = () => {
    const { user } = useAuth();

    // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    if (!user) {
        return <Navigate to="/connexion" replace />;
    }

    // Si l'utilisateur est connecté, rendre le composant enfant
    return <Outlet />;
};

export default PrivateRoute;