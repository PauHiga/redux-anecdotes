import { createSlice } from "@reduxjs/toolkit"
import notesService from '../services/notes'
import { handleNotification } from '../reducers/notificationReducer'
import matchers from "@testing-library/jest-dom/matchers"

const anecdoteSlice = createSlice({
  name: 'anecdotes', 
  initialState: [],
  reducers:{
    vote(state, action){
      console.log(JSON.parse(JSON.stringify((state))))
      const editedAnecdote = action.payload
      return state.map(item => item.id !== editedAnecdote.id ? item : editedAnecdote)
    },
    appendAnecdotes(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const allAnecdotes = await notesService.getAll()
    dispatch(setAnecdotes(allAnecdotes))
  }
}

export const addAnecdote = (anecdote) => {
  return async dispatch =>{
    const newAnecdote = await notesService.addNewAnecdote(anecdote)
    dispatch(appendAnecdotes(newAnecdote))
    dispatch(handleNotification(`You added "${newAnecdote.content}"`, 5000))
  }
}

export const editAnecdoteReducer = (anecdote) => {
  return async dispatch => {
    const editedAnecdote = await notesService.editAnecdote(anecdote)
    dispatch(vote(editedAnecdote))
    dispatch(handleNotification(`You voted "${editedAnecdote.content}"`, 5000))
  }
}

export const { vote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer
