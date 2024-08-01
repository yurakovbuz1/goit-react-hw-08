import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from './RegisterPage.module.css'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import Loader from "../../components/Loader/Loader";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";

const RegisterPage = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('This field is required'),
        email: Yup.string().email('Invalid email format').min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('Email address is required'),
        password: Yup.string().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('Password is required'),
    });

    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);

    const dispatch = useDispatch()

    const handleFormInput = (user) => {
        dispatch(register(user))
    };

    return (
        <>
            {loading && <Loader />} 
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values, actions) => {
                    handleFormInput({ ...values, id: nanoid() });
                    actions.resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
                    <div className={css.label}>
                        <p>Name</p>
                        <Field name='name' className={css.inputField}></Field>
                        <ErrorMessage name='name' component='p' className={css.errorMessage}/>
                    </div>
                    <div className={css.label}>
                        <p>Email</p>
                        <Field name='email' className={css.inputField}></Field>
                        <ErrorMessage name='email' component='p' className={css.errorMessage}/>
                    </div>
                    <div className={css.label}>
                        <p>Password</p>
                        <Field name='password' className={css.inputField}></Field>
                        <ErrorMessage name='password' component='p' className={css.errorMessage}/>
                    </div>
                    <button type='submit' className={css.addContact}>Add Contact</button>
                </Form>
            </Formik>
            {error && <h2 className={css.requestError}>{error}</h2>}
        </>
    );
};

export default RegisterPage;