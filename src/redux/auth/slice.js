import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {      
            name: null,            
            email: null,    
        },
        token: null,  
        isLoggedIn: false,  
        isRefreshing: false,  
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // REGISTER
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            // LOGIN
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            // LOGOUT
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
            })
            .addCase(logout.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            // REFRESH
            .addCase(refreshUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.user.name = payload.name;
                state.user.email = payload.email;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
    }
});

export const authReducer = authSlice.reducer;