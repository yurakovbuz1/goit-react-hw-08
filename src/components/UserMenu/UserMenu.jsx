import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from './UserMenu.module.css'

const UserMenu = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    const user = useSelector(selectUser)

    return (
        <>
             <div className={css.welcomeContainer}>
                <p className={css.welcome}>Welcome, {user.user.email}!</p>
                <button type="button" className={css.logout} onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default UserMenu;