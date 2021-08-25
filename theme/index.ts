import { createTheme, createText, createBox, BaseTheme } from '@shopify/restyle'


const theme: BaseTheme = createTheme({
  colors: {
  	primary: '#2CB980',
  	secondary: '#0C0D34',
  	text: 'rgba(12, 13, 52, 0.7)',
  	default: 'rgba(12, 13, 52, 0.1)', 
  	white: "white",
  	black: "black" ,
    grey: "rgba(12, 13, 52, 0.05)",
    light: "#F4F0EF",
    danger: "#FF0058",
    primaryLight: "#E7F9F7"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
  	hero: {
    	fontSize: 60,
  		lineHeight: 60,
  		fontFamily: "montserrat-bold",
  		color: "white",
  		textAlign: "center"
  	},
  	title1: {
  		fontSize: 28,
  		fontFamily: "montserrat-semibold",
  		color: "secondary",
  	},
  	title2: {
  		fontSize: 22,
  		lineHeight: 30,
  		fontFamily: "montserrat-semibold",
  		color: "secondary"
  	},
  	body: {
  		fontSize: 16,
  		lineHeight: 24,
  		fontFamily: "montserrat-regular",
  		color: "text"
  	},
    button: {
      fontSize: 14,
      fontFamily: "montserrat-medium",
      color: "text"
    }
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;