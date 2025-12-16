import {
  createAsyncThunk,
  type ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import type { InitialStateStructure, registerUserInterface } from "./authTypes";
import axios from "axios";
import { baseURL } from "../../constant";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: registerUserInterface, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/register`, {
        ...data,
      });
      console.log("This is running, ", response.data);
    } catch (error: any) {
      console.log(error?.message || error);
      return rejectWithValue(error);
    }
  }
);

export default function extraReducers(
  builder: ActionReducerMapBuilder<InitialStateStructure>
) {
  builder
    .addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      console.log("Register Pending");
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Register Fullfilled");
    })
    .addCase(registerUser.rejected, (state, action) => {
      console.log("Register Rejected");
    });
}
