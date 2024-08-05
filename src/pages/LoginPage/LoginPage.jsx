import css from './LoginPage.module.css'
import Loader from "../../pages/components/Loader/Loader";
import LoginForm from "../components/LoginForm/LoginForm";
import { useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from '../../redux/auth/selectors';

const LoginPage = () => {

    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);

    return (
        <>
            {loading && <Loader />}                  
            <LoginForm />
            {error && <h2 className={css.requestError}>{error}</h2>}
        </>
    );
};

export default LoginPage;