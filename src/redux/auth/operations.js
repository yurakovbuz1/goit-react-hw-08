import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
    'auth/register',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios()
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios()
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios()
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