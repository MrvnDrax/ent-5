import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
      setIsLoadingG: (state, action) => action.payload
    }
})

export const { setIsLoadingG } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
