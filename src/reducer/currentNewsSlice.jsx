import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentNews: null
};

export const currentNewsSlice = createSlice({
    name: 'currentNews',
    initialState,
    reducers: {
        sendNews: (state, action) => {
            state.currentNews = action.payload;
        }
    },
});

export const { sendNews } = currentNewsSlice.actions;

export default currentNewsSlice.reducer;
