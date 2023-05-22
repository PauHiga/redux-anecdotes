import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editAnecdoteReducer } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
  const allAnecdotes = useSelector(state => {
    return state.anecdotes.filter(item => item.content.includes(state.filter))
  })

  const sortedAnecdotes = allAnecdotes.sort((a, b)=>{let keyA = a.votes; let keyB = b.votes; if(keyA>keyB){return -1} else if(keyA<keyB){return 1} else{return 0}})

  const dispatch = useDispatch()

  const voteHandler = async (anecdote) => {
    dispatch(editAnecdoteReducer(anecdote))
  }

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList