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
    },
    extraReducers: (builder) => {
        builder
        // REGISTER
            // .addCase(register.pending, () => {
            //     isLoading = true;
            // })
            .addCase(register.fulfilled, (state, { payload }) => {
                // isLoading = false;
                // error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(register.rejected, (_, {payback}) => {
            //     isLoading = false;
            //     error = payback;
            // })
        // LOGIN
            // .addCase(register.pending, () => {
            //     isLoading = true;
            // })
            .addCase(login.fulfilled, (state, { payload }) => {
                // isLoading = false;
                // error = null;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(register.rejected, (_, {payback}) => {
            //     isLoading = false;
            //     error = payback;
        // })
        // LOGOUT
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
            })
        // REFRESH
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                // isLoading = false;
                // error = null;
                state.user.name = payload.name;
                state.user.email = payload.email;
                state.isLoggedIn = true;
            })
    }
});

export const authReducer = authSlice.reducer;