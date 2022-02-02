import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsCategory = createAsyncThunk("getCategory", () => {
  return axios
    .get(`http://localhost:3001/api/products/categories`)
    .then((res) => res.data);
});
export const getProducts = createAsyncThunk("getProducts", () => {
  return axios
    .get(`http://localhost:3001/api/products/`)
    .then((res) => res.data);
});

export const getProductsLocation = createAsyncThunk("getLocation", () => {
  return axios
    .get(`http://localhost:3001/api/products/location`)
    .then((res) => res.data);
});

export const getSingleProduct = createAsyncThunk("getSingleProduct", (id) => {
  return axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then((res) => res.data);
});

//LISTAR PRODUCT POR CATEGORY Y LOCATION
export const getProductsByCategory = createAsyncThunk(
  "searchByCategory",
  (category) => {
    return axios
      .get(`http://localhost:3001/api/products/category/${category}`)
      .then((res) => {
        console.log("RES DATA", res.data);
        return res.data;
      });
  }
);

export const getProductsByLocation = createAsyncThunk(
  "searchByLocation",
  (location) => {
    return axios
      .get(`http://localhost:3001/api/products/location/${location}`)
      .then((res) => res.data);
  }
);

export const updateProduct = createAsyncThunk(
  "upProduct",
  ({ id, product }) => {
    return axios
      .put(`http://localhost:3001/api/admin/products/update/${id}`, product)
      .then((res) => res.data);
  }
);

export const deleteProduct = createAsyncThunk("delProduct", (id) => {
  return axios.delete(`http://localhost:3001/api/admin/delete/${id}`);
});

export const postProduct = createAsyncThunk("postProduct", (product) => {
  return axios
    .post(`http://localhost:3001/api/admin/products`, product)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
});

export const getFavoriteProduct = createAsyncThunk("favoriteProduct", (userId) => {
  return axios.get(`http://localhost:3001/api/favorites/${userId}`)
  .then((res) => res.data);
});

export const deleteFavoriteProduct = createAsyncThunk("delFavorite", (name) => {
  return axios.delete(`http://localhost:3001/api/favorites/delete/${name}`)
});


const initialState = {
  categories: [],
  location: [],
  allProducts: [],
  searchByCategory: [],
  searchByLocation: [],
  getSingleProduct: [],
  updateProduct: [],
  deleteProduct: [],
  postProduct: [],
  getFavoriteProduct:[],
  deleteFavoriteProduct:[]
};

const reducerProducts = createReducer(initialState, {
  [getProductsCategory.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
  [getProductsLocation.fulfilled]: (state, action) => {
    state.location = action.payload;
  },
  [getProducts.fulfilled]: (state, action) => {
    state.allProducts = action.payload;
  },
  [getProductsByLocation.fulfilled]: (state, action) => {
    state.searchByLocation = action.payload;
  },
  [getProductsByCategory.fulfilled]: (state, action) => {
    state.searchByCategory = action.payload;
  },
  [getSingleProduct.fulfilled]: (state, action) => {
    state.singleProduct = action.payload;
  },
  [updateProduct.fulfilled]: (state, action) => {
    state.update = action.payload;
  },
  [deleteProduct.fulfilled]: (state, action) => {
    state = {};
  },
  [postProduct.fulfilled]: (state, action) => (state = {}),
  [getFavoriteProduct.fulfilled]: (state, action) => {state.favorite = action.payload},
  [deleteFavoriteProduct.fulfilled]: (state, action) => {
    state = {};
  },
});

export default reducerProducts;
