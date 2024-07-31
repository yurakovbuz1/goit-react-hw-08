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
            setHeaderToken(data.token)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            await axios.post('/users/logout', token)
            clearHeaderToken();
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