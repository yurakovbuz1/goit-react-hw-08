import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
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
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)