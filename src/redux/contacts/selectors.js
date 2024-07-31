import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";


const selectContacts = (state) => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterValue) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue?.toLowerCase())
        || contact.number.includes(filterValue));
})
export const selectLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;