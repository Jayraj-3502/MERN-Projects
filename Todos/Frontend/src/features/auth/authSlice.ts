import { createSlice, type Slice } from "@reduxjs/toolkit";
import type { InitialStateStructure } from "./authTypes";
import extraReducers from "./authApi";

const initialState: InitialStateStructure = {
  userDetails: {},
  tokenDetails: "",
  isLoading: false,
};

const authSlicer: Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: extraReducers,
});

export const authReducer = authSlicer.reducer;
