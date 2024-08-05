import ContactForm from "../../pages/components/ContactForm/ContactForm";
import SearchBox from "../../pages/components/SearchBox/SearchBox";
import ContactList from "../../pages/components/ContactList/ContactList";
import css from './ContactsPage.module.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchContacts())
    }, [dispatch])


    return (
        <>
            <div className={css.container}>
                <ContactForm />
                <hr/>
                <SearchBox />
            </div>
            <ContactList />
        </>
    );
};

export default ContactsPage;