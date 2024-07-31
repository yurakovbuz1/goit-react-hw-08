import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from './ContactsPage.module.css'

const ContactsPage = () => {
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