


import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();  

if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
}

return user ? (
    <div>{children}</div>
) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
) 

   
};

export default PrivateRoute;