import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import Text from 'components/Text'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: -32px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

export const Scroll = styled.ScrollView.attrs(() => ({
  nestedScrollEnabled: true
}))``

export const Header = styled.View`
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

export const InfoWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 8px 8px 8px;
`

export const InfoItem = styled.View`
  width: 33.33%;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

export const Column = styled.View`
  align-items: center;
`

export const WeatherImage = styled.Image`
  width: 50px;
  height: 50px;
`

export const WeatherDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`

export const Row = styled.View`
  flex-direction: row;
`

export const CurrentTemp = styled(Text).attrs(() => ({
  preset: 'light'
}))`
  font-size: 64px;
`

export const Degraus = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiaryLight};
  font-size: 24px;
  margin-top: 16px;
`

export const TempVariation = styled(Text).attrs(() => ({
  preset: 'light'
}))`
  margin: 4px 0;
`

export const ArrowUp = styled(Ionicons).attrs(({ theme }) => ({
  name: 'arrow-up',
  size: 12,
  color: theme.colors.tertiaryLight
}))`
  margin: 8px 0;
`

export const ArrowDown = styled(Ionicons).attrs(({ theme }) => ({
  name: 'arrow-down',
  size: 12,
  color: theme.colors.tertiaryLight
}))`
  margin: 8px 0;
`

export const InfoValue = styled(Text)`
  margin: 8px 0 4px 0px;
`

export const InfoLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiaryLight};
  font-size: 14px;
`
