import css from './RegistrationPage.module.css';
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from 'react-redux';
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import Loader from '../../components/Loader/Loader';

const RegisterPage = () => {

    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);


    return (
        <>
            {loading && <Loader />} 
            <RegistrationForm />
            {error && <h2 className={css.requestError}>{error}</h2>}
        </>
    );
};

export default RegisterPage;