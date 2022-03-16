import styled from 'styled-components/native'
import { Fontisto } from '@expo/vector-icons'

export const Container = styled.ImageBackground`
  width: 100%;
  height: 320px;
  padding: 40px 0 0 16px;
`

export const CloudIcon = styled(Fontisto).attrs(({ theme }) => ({
  name: 'cloud-refresh',
  size: 32,
  color: theme.colors.primary
}))``
