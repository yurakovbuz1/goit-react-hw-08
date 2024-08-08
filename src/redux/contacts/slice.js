import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error: null,
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
                
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })
            //ADD
            .addCase(addContact.pending, (state) => {
                state.contacts.loading = true;
            })   
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items.push(payload);
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })
            //DELETE
            .addCase(deleteContact.pending, (state) => {
                state.contacts.loading = true;
            })   
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;                
                state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);  
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = payload;
            })        
            //LOGOUT
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.items = [];
            })
            .addCase(logout.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
        
    }
})

export const contactsReducer = contactsSlice.reducer;