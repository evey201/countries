export const theme = {
    colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        lightModeDarkBlue: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'   
    },
    fontSize: {
        small: '14px',
        medium: '16px'
    },
    fontWeight: {
        slim: 300,
        medium: 600,
        bold: 800,
    },
};

export const lightTheme = {
    ...theme,
    colors : {
        white: 'hsl(200, 15%, 8%)',
        veryDarkBlue: '#F5F5F5',
        darkBlue: 'white',
        lightModeDarkBlue: '#FAFAFA',
        darkGray: 'hsl(0, 0%, 52%)',
    }
}