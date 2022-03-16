import styled from 'styled-components/native'
import Text from 'components/Text'

import { colors } from 'styles'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 16px;
`

export const Info = styled(Text).attrs(() => ({
  preset: 'light'
}))`
  font-size: 24px;
  margin: 8px 0 32px 0;
  color: ${colors.tertiaryLight};
  text-align: center;
`

export const ButtonWrapper = styled.View`
  width: 88%;
`
