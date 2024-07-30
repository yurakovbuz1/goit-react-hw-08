import { createAsyncThunk } from "@reduxjs/toolkit";

const setHeaderToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', user)
            console.log('register data :>> ', data);
            // setHeaderToken(data.token)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', user)
            console.log('login data :>> ', data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/logout', token)
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios()
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)