import { globalCss } from ".";

export const globaLStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor:'$gray900',
        color: '$gray100',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    media: {
        '(min-width: 1424px)': {
            html: {
                zoom: 0.7
            }
        },
    }
})