import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducerRegistration from "./registration";
import reducerProducts from "./products";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
  reducer: {
    registration: reducerRegistration,
    products: reducerProducts,
  },
});

export default store;
