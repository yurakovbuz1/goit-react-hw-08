import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

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
                console.log('payload :>> ', payload);
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(register.rejected, (_, {payback}) => {
            //     isLoading = false;
            //     error = payback;
            // })
    }
});

export const authReducer = authSlice.reducer;