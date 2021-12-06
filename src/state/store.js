import { configureStore } from "@reduxjs/toolkit";
import logge from "redux-logger";
import reducerRegistration from "./registration";
import reducerProducts from "./products"
const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logge),
    reducer: {
        registration: reducerRegistration,
        products: reducerProducts,
    },
});

export default store;