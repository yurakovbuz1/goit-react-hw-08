import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { selectUser } from "../../redux/auth/selectors";

const PrivateRoute = () => {
    const { isLoggedIn, token } = useSelector(selectUser)
    if (!isLoggedIn && token) {
        return <Loader/>
    }

    if (!isLoggedIn && !token) {
        return <Navigate to="/" />
    }

    return  <Outlet/>
};

export default PrivateRoute;