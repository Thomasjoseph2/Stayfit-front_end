import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth) || {}; 

    // If trainerInfo is not defined or null, redirect to login, else render the nested routes
    // return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
    return userInfo && !userInfo.blocked ? <Outlet /> : <Navigate to='/login' replace />;
}

export default UserPrivateRoute;
