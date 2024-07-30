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
                <NavLink className={({isActive}) => {return clsx(css.navLink, isActive && css.isActive ) }} to='/'>Home</NavLink>
                {isLoggedIn && <NavLink className={css.navLink} to='/contacts'>Phonebook</NavLink>}
            </nav>
        </>
    )
};

export default Navbar;