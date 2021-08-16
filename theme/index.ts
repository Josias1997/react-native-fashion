import { createTheme, createText, BaseTheme } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme: BaseTheme = createTheme({
  colors: {
  	primary: '#2CB980',
  	title: '#0C0D34',
  	body: 'rgba(12, 13, 52, 0.7)',
  	default: 'rgba(12, 13, 52, 0.1)', 
  	hero: "white",
  	white: "white",
  	black: "black"  
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
  	hero: {
  		fontSize: 60,
		lineHeight: 60,
		fontFamily: "montserrat-bold",
		color: "hero",
		textAlign: "center"
  	},
  	title1: {
  		fontSize: 28,
  		fontFamily: "montserrat-semibold",
  		color: "title",
  	},
  	title2: {
  		fontSize: 22,
  		lineHeight: 30,
  		fontFamily: "montserrat-semibold",
  		color: "title"
  	},
  	body: {
  		fontSize: 16,
  		lineHeight: 24,
  		fontFamily: "montserrat-regular",
  		color: "body"
  	}
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;