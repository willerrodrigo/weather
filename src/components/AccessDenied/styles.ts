import styled from 'styled-components/native'
import Text from '../Text'

import { colors } from '../../styles'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Info = styled(Text).attrs(() => ({
  preset: 'light'
}))`
  font-size: 24px;
  margin: 8px 16px 32px 16px;
  color: ${colors.tertiaryLight};
  text-align: center;
`

export const ButtonWrapper = styled.View`
  width: 80%;
`
