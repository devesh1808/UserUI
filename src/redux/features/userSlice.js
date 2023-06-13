import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        firstName: "User",
        lastName: "1",
        email: "User1@123.com",
        role: "role1"
      },
      {
        id: 2,
        firstName: "User",
        lastName: "2",
        email: "User2@123.com",
        role: "role2",
      },
      {
        id: 3,
        firstName: "User",
        lastName: "3",
        email: "User3@123.com",
        role: "role3"
      },
      {
        id: 4,
        firstName: "User",
        lastName: "4",
        email: "User4@123.com",
        role: "role4"
      },
      {
        id: 5,
        firstName: "User",
        lastName: "5",
        email: "User5@123.com",
        role: "role5"
      },
      {
        id: 6,
        firstName: "User",
        lastName: "6",
        email: "User6@123.com",
        role: "role6"
      },
      {
        id: 7,
        firstName: "User",
        lastName: "7",
        email: "User7@123.com",
        role: "role7"
      },
      {
        id: 8,
        firstName: "User",
        lastName: "8",
        email: "User@123.com",
        role: "role8"
      },
      {
        id: 9,
        firstName: "User",
        lastName: "9",
        email: "User9@123.com",
        role: "role9"
      },
      {
        id: 10,
        firstName: "User",
        lastName: "10",
        email: "User10@123.com",
        role: "role10"
      },
      {
        id: 11,
        firstName: "User",
        lastName: "11",
        email: "User11@123.com",
        role: "11"
      },
      {
        id: 12,
        firstName: "User",
        lastName: "12",
        email: "User12@123.com",
        role: "12"
      },
    ],
    user: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  },
  reducers: {
    getUser: (state, action) => {
      state.user = state.users.find((el) => el.id == action.payload);
    },
    clearUser: (state) => {
      state.user = {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      };
    },
    addUser: (state, action) => {
      state.users = [action.payload, ...state.users];
    },
    updateUser: (state, action) => {
      state.users = state.users.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUser,
  clearUser,
  addUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
