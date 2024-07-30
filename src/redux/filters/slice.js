import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
	name: 'filters',
    initialState: {
        filters: {
            name: "",
        },
    },
	reducers: {
        changeFilter: (state, { payload }) => {
			state.filters.name = payload
		}
	}
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;