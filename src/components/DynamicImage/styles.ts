import styled from 'styled-components/native'
import { Fontisto } from '@expo/vector-icons'

import { colors } from 'styles'

export const Container = styled.ImageBackground`
  width: 100%;
  height: 320px;
  padding: 40px 0 0 16px;
`

export const CloudIcon = styled(Fontisto).attrs(() => ({
  name: 'cloud-refresh',
  size: 32,
  color: colors.primary
}))``
