import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id:string
}

const initialState: UserState = {
  id: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<string>) {
        state.id=action.payload
    }
  }})
// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;