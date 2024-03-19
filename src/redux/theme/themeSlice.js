import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state,action) {
            const currentTheme = state.theme == 'light' ? 'dark' : 'light'
            state.theme = currentTheme
            localStorage.setItem('theme', currentTheme)
        },
        initTheme(state) {
            const getTheme = localStorage.getItem('theme')
            if(getTheme) {
                state.theme = getTheme
            }
        }
    },
    extraReducers: (builder) => {
        
    }
})

export const { toggleTheme, initTheme } = themeSlice.actions

export default themeSlice.reducer