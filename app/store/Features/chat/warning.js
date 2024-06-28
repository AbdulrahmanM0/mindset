import { createSlice } from '@reduxjs/toolkit'

let isBrowser = typeof window !== 'undefined';

const initialState = {
  message_id: '',
  state: false,
}

export const warningSlice = createSlice({
  name: 'warning',
  initialState,
  reducers: {
    submit : (state, action) => {
      state.message = action.payload.message;
      state.id = action.payload.id;
      const {id,message} = action.payload
      state.conversation = [...state.conversation,{id,message,}]
      localStorage.setItem("conversation",JSON.stringify(state.conversation))
    },
    open_warning : (state , action) => {
        state.state = action.payload.state
        if(action.payload.id){
          state.message_id = action.payload.id
        }
    },
  },
})

export const { open_warning , submit } = warningSlice.actions
export default warningSlice.reducer