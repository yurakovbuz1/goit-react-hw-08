import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from './Navigation.module.css'
import clsx from "clsx";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <div>
                <NavLink className={({ isActive }) => { return clsx(css.navLink, isActive && css.isActive) }} to='/'>Home</NavLink>                
                {isLoggedIn && <NavLink className={({ isActive }) => { return clsx(css.navLink, isActive && css.isActive) }} to='/contacts'>Phonebook</NavLink>}   
            </div>    
        </>
    )
};

export default Navigation;