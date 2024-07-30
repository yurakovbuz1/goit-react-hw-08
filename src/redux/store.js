import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}

const tokenPersistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: tokenPersistedReducer,
}

export const store = configureStore({
    reducer: rootReducer
})

export const persistor = persistStore(store)