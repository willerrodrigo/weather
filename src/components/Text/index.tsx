import * as React from 'react'
import { Text as ReactNativeText, TextProps, TextStyle } from 'react-native'
import { presets, TextPresets } from './text.presets'

interface Props extends TextProps {
  children?: React.ReactNode
  text?: string
  style?: TextStyle | TextStyle[]
  preset?: TextPresets
}

function Text(props: Props): JSX.Element {
  const {
    preset = 'default',
    text,
    children,
    style: styleOverride,
    ...rest
  } = props

  const content = text || children
  const style = [presets[preset] || presets.default, styleOverride]

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}

export default Text
