import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action){
      return action.payload
    },
    removeNotification(state, action){
      return ''
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const handleNotification = (message, time) => (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
        dispatch(removeNotification())
    }, time);
}



export default notificationSlice.reducer



    // handleNotification(state, action){
    //   console.log(JSON.parse(JSON.stringify((state))))
    //   dispatch(setNotification(action.payload[0]))
    //   setTimeout(() => {
    //     dispatch(removeNotification())
    // }, action.payload[1]);
    // }