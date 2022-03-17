import Text from 'components/Text'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Time = styled(Text).attrs(() => ({
  preset: 'regular'
}))`
  padding: 16px;
  color: ${({ theme }) => theme.colors.tertiaryLight};
`

export const Address = styled.View`
  flex-direction: row;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom-left-radius: 24px;
  align-items: center;
`

export const AddressText = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 4px;
`

export const LocationIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: 'location-sharp',
  size: 16,
  color: theme.colors.secondary
}))``
