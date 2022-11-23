import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { api } from "../services/api";

import ModalsSlice from "../reducer/ModalsSlice";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    ModalsSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });
};
