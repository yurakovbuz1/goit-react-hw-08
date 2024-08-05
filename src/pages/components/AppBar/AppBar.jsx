import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from './AppBar.module.css'

const Appbar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <nav className={css.navbar}>
                <Navigation />
                {!isLoggedIn ? <AuthNav /> : <UserMenu />}
            </nav>            
        </>
    );
};

export default Appbar;