import { configureStore } from "@reduxjs/toolkit";
import logge from "redux-logger";
import reducerRegistration from "./registration";
const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logge),
    reducer: {
        registration: reducerRegistration,
    },
});

export default store;