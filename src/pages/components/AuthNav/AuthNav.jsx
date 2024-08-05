import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

const AuthNav = () => {

    return (
        <>
            <div>
                <NavLink className={css.navLink} to='/login'>Login</NavLink>                
                <NavLink className={css.navLink} to='/register'>Register</NavLink>   
            </div>    
        </>
    );
};

export default AuthNav;