import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const addNewAnecdote = async (anecdote) => {
  const newAnecdote = {
    content: anecdote,
    votes: 0
  }
  const response = await axios.post(baseURL, newAnecdote)
  return response.data
}

const editAnecdote = async (anecdote) =>{
  const editedAnecdote = {
    ...anecdote, votes: anecdote.votes +1
  }
  const response = await axios.put(`${baseURL}/${anecdote.id}`, editedAnecdote)
  return response.data
}

export default { getAll, addNewAnecdote, editAnecdote }