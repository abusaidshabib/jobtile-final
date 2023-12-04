import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/resume/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
