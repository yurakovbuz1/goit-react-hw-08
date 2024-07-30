import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { contactsReducer } from "./contacts/slice";

const persistConfigContacts = {
    key: 'contacts',
    storage
}

// const contactsPersistedReducer = persistReducer(persistConfigContacts, contactsReducer)

const rootReducer = {
    contacts: contactsReducer,
    filters: filtersReducer,
}

export const store = configureStore({
    reducer: rootReducer
})

// export const persistor = persistStore(store)