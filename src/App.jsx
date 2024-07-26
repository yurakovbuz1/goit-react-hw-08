import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from './store/contacts/contactsOps'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>

    </>
  )
}

export default App
