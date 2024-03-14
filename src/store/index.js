import { configureStore } from "@reduxjs/toolkit";
import helperSlice from "./slices/helperSlice";



export const store = configureStore({
    reducer: {
      helper:helperSlice
    },
  });