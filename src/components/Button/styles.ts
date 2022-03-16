import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import Text from 'components/Text'

import { colors } from 'styles'

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  background-color: ${colors.secondary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text).attrs(() => ({}))`
  font-size: 24px;
  color: ${colors.primary};
`
