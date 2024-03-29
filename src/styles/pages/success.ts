import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    margin: '0 auto', 
    height: 456,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },
    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        marginTop: '2rem',
        textAlign: 'center',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 138,
    height: 145,
    background:'Linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: '4rem',

    img: {
        objectFit: 'cover'
    }
})