import { createSlice } from '@reduxjs/toolkit'
let isBrowser = typeof window != "undefined"

const initialState = {
  dark_theme: isBrowser && localStorage.getItem("theme") && JSON.parse(localStorage.getItem('theme')) || false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle_theme : (state, action) => {
      state.dark_theme = action.payload
      JSON.stringify(localStorage.setItem('theme',action.payload))
    },
  },
})

export const { toggle_theme } = themeSlice.actions
export default themeSlice.reducer