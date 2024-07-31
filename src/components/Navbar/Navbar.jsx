import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from './Navbar.module.css'
import clsx from "clsx";

const Navbar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <nav className={css.navbar}>
                <div className={css.mainNavigation}>
                    <NavLink className={({isActive}) => {return clsx(css.navLink, isActive && css.isActive ) }} to='/'>Home</NavLink>
                    {isLoggedIn && <NavLink className={({isActive}) => {return clsx(css.navLink, isActive && css.isActive ) }} to='/contacts'>Phonebook</NavLink>}
                </div>                
                    {isLoggedIn && <NavLink className={css.navLink} to='/logout'>Logout</NavLink>}
                    {!isLoggedIn &&
                        <div className={css.loginNavigation}>
                            <NavLink className={css.navLink} to='/login'>Login</NavLink>
                            <NavLink className={css.navLink} to='/register'>Register</NavLink>
                        </div>
                    }                
                
            </nav>
        </>
    )
};

export default Navbar;