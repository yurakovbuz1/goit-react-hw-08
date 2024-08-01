import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from './Navbar.module.css'
import clsx from "clsx";
import { logout } from "../../redux/auth/operations";

const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser)

    return (
        <>
            <nav className={css.navbar}>
                <div className={css.mainNavigation}>
                    <NavLink className={({isActive}) => {return clsx(css.navLink, isActive && css.isActive ) }} to='/'>Home</NavLink>
                    {isLoggedIn && <NavLink className={({isActive}) => {return clsx(css.navLink, isActive && css.isActive ) }} to='/contacts'>Phonebook</NavLink>}
                </div>    
                <div className={css.loginNavigation}>
                    {!isLoggedIn &&
                        <div>
                            <NavLink className={css.navLink} to='/login'>Login</NavLink>
                            <NavLink className={css.navLink} to='/register'>Register</NavLink>
                        </div>                        
                    }    
                    {isLoggedIn &&
                        <div className={css.welcomeContainer}>
                            <p className={css.welcome}>Welcome, {user.user.email}!</p>
                            <button type="button" className={css.logout} onClick={handleLogout}>Logout</button>
                        </div>
                    }
                </div>
                
            </nav>
        </>
    )
};

export default Navbar;