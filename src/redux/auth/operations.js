import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setHeaderToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const clearHeaderToken = () => {
    delete axios.defaults.headers.common['Authorization']
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', user)
            setHeaderToken(data.token)
            console.log('register data :>> ', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', user)
            console.log('login data :>> ', data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/logout', token)
            console.log('logout data :>> ', data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios()
        } catch (error) {
            clearHeaderToken();
            return rejectWithValue(error);
        }
    }
)