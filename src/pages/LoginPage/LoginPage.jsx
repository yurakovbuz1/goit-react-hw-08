import css from './LoginPage.module.css'
import Loader from "../../components/Loader/Loader";
import { useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';

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