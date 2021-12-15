import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserLoged = createAsyncThunk("userLoged", (user) => {
    return axios.post(`http://localhost:3001/api/auth/login`, user).then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data))
        return res.data
    });
});

export const postUserRegister = createAsyncThunk("userRegister", (user) => {
    return axios

        .post(`/api/auth/register`, user)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
});


export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
    localStorage.removeItem("user")
    return axios.get("/api/auth/logout").then((userLogout) => userLogout);
});


export const getUsers = createAsyncThunk("users", () => {
    return axios.get("/api/users")
    .then((user) => user);
});
//action
export const setUser = createAction("SET_USER");

const reducerRegistration = createReducer(
    {},
    {
        [setUser]: (state, action) => {state.user = action.payload},
        [postUserLoged.fulfilled]: (state, action) => {state.user = action.payload},
        [postUserLoged.rejected]: (state, action) => console.log(action),
        [postUserRegister.fulfilled]: (state, action) => (state = {}),
        [sendLogoutRequest.fulfilled]: (state, action) => (state = {}),
        [getUsers.fulfilled]: (state, action) => {state.users = action.payload},
    }
);

export default reducerRegistration;