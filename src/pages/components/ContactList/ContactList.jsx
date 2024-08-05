import { selectContactsError, selectContactsLoading, selectFilteredContacts } from "../../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";

const ContactList = () => {
    const contactList = useSelector(selectFilteredContacts);
    const contactsLoading = useSelector(selectContactsLoading);
    const contactsError = useSelector(selectContactsError);

    const dispatch = useDispatch();

    const handleDelete = (contactId) => {     
        dispatch(deleteContact(contactId));
    };    

    return (
        <>            
            {contactsLoading && <Loader />}      
            {contactsError ? <h2>{contactsError}</h2> :                 
                <ul className={css.contactList}>
                    {contactList.map((contact) => (                    
                    <li key={contact.id} className={css.listItem}>
                        <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={handleDelete} />
                    </li>
                    ))}                
                </ul>                       
            }            
        </>
    );
}

export default ContactList