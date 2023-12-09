import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/resume/formSlice";
import selectReducer from "./features/resume/selectSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    select: selectReducer,
  },
});
