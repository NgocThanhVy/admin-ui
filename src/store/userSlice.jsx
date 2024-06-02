import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log("response: ", response);
      return response.data;
      

    } catch (error) {
      throw error;
    }
    
  });

 
  // Hành động xóa người dùng
export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      return userId;
    } catch (error) {
      throw error;
    }
  });

const initialState = {
  status: "idle",
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, function (state, action) {
        state.status = "success";
        state.users = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;

