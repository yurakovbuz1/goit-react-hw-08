import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";

const PublicRoute = () => {
    const { isLoggedIn, token } = useSelector(selectUser)
    
    if (!isLoggedIn && token) {
        return <Loader/>
    }

    if (isLoggedIn && token) {
        return <Navigate to="/contacts" />
    }

    return  <Outlet/>
};

export default PublicRoute;