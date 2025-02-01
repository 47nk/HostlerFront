import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ProtectedRouteProps } from './ProtectedRoute.types';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	// TODO: ByPass Login
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
};
