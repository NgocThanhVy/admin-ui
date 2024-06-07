import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk("users/fetchList", async () => {
  const response = await axios.get("http://localhost:3000/users");
  // console.log("response: ", response);
  return response.data;
});


//Hành động xóa người dùng
export const deleteUser = createAsyncThunk("users/deleteByID",
  async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
  });


export const createUser = createAsyncThunk("user/create", async (user) => {
  await axios.post("http://localhost:3000/users", user);
});


const initialState = {
  status: "idle",
  users: [],
  error: "",
};
export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.users = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;

