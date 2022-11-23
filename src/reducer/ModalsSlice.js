import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feedBackOpen: false,
};

export const ModalsSlice = createSlice({
    name: "authModalSlice",
    initialState,
    reducers: {
        handleFeedBackModal(state, action) {
            state.feedBackOpen = action.payload;
        },
    },
});

export default ModalsSlice.reducer;
