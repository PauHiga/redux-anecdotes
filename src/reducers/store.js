import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer, { setAnecdotes } from './anecdoteReducer'
import filterReducer from './filterReducer'
import notificationReducer from "./notificationReducer";

const Store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer, 
    filter: filterReducer, 
    notification: notificationReducer
  }
})

export default Store