import { TextStyle } from 'react-native'
import { colors } from '../../styles'

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: 'Barlow_500Medium',
  color: colors.tertiary,
  fontSize: 16
}

export const presets = {
  default: BASE,

  regular: { ...BASE, fontFamily: 'Barlow_400Regular' } as TextStyle,

  light: { ...BASE, fontFamily: 'Barlow_300Light' } as TextStyle
}

export type TextPresets = keyof typeof presets
