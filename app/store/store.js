import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Features/themeSlice/themeSlice'
import chatSlice from './Features/chat/chatSlice'
import warningSlice from './Features/chat/warning'


export const store = configureStore({
  reducer: {
    themeSlice,
    chatSlice,
    warningSlice,
  },
})