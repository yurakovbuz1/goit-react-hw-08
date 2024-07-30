import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from './LoginPage.module.css'

const LoginPage = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.stsring().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('This field is required'),
        email: Yup.string().email('Invalid email format').min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('Email address is required'),
        password: Yup.string().min(3, 'Minimum number of digits is 3').max(50, 'Maximum number of digits is 50').required('Password is required'),
    })

    const dispatch = useDispatch()

    const handleFormInput = (user) => {
        dispatch(login(user))
    }

    return (
        <>
            <Formik
                initialValues={{email: '', password: '' }}
                onSubmit={(values, actions) => {
                    handleFormInput({ ...values, id: nanoid() });
                    actions.resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
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
        </>
    );
};

export default LoginPage;