import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainer.slice'
import isLoading from "./slices/isLoading.slice";

export default configureStore({
  reducer: {
    trainer,
    isLoading
  }
})