import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoslice";

export const Store = configureStore({
  reducer:todoReducer,
  },
);