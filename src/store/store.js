import { configureStore } from "@reduxjs/toolkit";
import userSlide from "./userSlide";

export const store = configureStore({
  reducer: {
    user: userSlide,
  },
});
