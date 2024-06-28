import { createSlice } from '@reduxjs/toolkit'

let isBrowser = typeof window !== 'undefined';

const initialState = {
  message: '',
  id: '',
  conversation: isBrowser && localStorage.getItem('conversation') ? JSON.parse(localStorage.getItem('conversation')) :  [],
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    submit: (state, action) => {
      const { message } = action.payload;
      let newId;
      if (state.conversation.length > 0) {
        const lastMessage = state.conversation[state.conversation.length - 1];
        newId = parseInt(lastMessage.id, 10) + 1;
      } else {
        newId = 1;
      }
      state.id = newId.toString();
      state.message = message;
      state.conversation.push({ id: state.id, message });
      localStorage.setItem('conversation', JSON.stringify(state.conversation));
    },
    delete_conversation: (state) => {
      state.conversation = []
      localStorage.removeItem('conversation')
    },
    delete_message: (state,action) => {
      state.conversation = state.conversation.filter(item => item.id !== action.payload.id)
      localStorage.setItem("conversation",JSON.stringify(state.conversation))
    }

  },
})

export const { submit , delete_conversation , delete_message} = chatSlice.actions
export default chatSlice.reducer