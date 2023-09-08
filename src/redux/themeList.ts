import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/Themes'
import { themes } from '../styles/themes'

export interface ThemeState {
    theme: Theme,
    status: boolean,
}

const initialState: ThemeState = {
    theme: themes['light'],
    status: true,
}

export const themeSlice = createSlice({
    name: 'themeList',
    initialState,
    reducers: {
        toggleThemeAction: (state) => {
            state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light'];
            state.status = state.theme.name === 'light' ? true : false;
        },
    },
})

export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer
