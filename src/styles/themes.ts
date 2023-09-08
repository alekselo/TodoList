import { Theme, Themes } from "../models/Themes";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#cf6679',
        backgroundSecondary: '#018786'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#34495e',
        backgroundSecondary: 'gray'
    }
}

export const themes: Themes = { light, dark }
