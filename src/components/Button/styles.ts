import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import Text from 'components/Text'

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`
