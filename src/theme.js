import { theme } from 'rebass'

export const colors = {
  text: '#000e1a',
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  blue: '#3498db'
}

export const fontSizes = [12, 14, 16, 24, 32, 48, 64, 96]

export const buttons = {
  primary: {
    color: '#fff',
    backgroundColor: '#3498db'
  },
  outline: {
    color: '#3498db',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 2px'
  },
  tag: {
    color: '#fff',
    fontWeight: 'bold',
    background: '#3498db',
    padding: '2px 5px',
    borderRadius: '10em',
    margin: '5px'
  }
}

export default {
  ...theme,
  colors,
  fontSizes,
  buttons
}
