import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import Text from '../../components/Text'
import { colors } from '../../styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  margin-top: -32px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Time = styled(Text).attrs(() => ({
  preset: 'regular'
}))`
  padding: 16px;
  color: ${colors.tertiaryLight};
`

export const Address = styled.View`
  flex-direction: row;
  padding: 16px;
  background-color: ${colors.secondaryLight};
  border-bottom-left-radius: 24px;
  align-items: center;
`

export const AddressText = styled(Text)`
  color: ${colors.secondary};
  margin-right: 4px;
`

export const LocationIcon = styled(Ionicons).attrs(() => ({
  name: 'location-sharp',
  size: 16,
  color: colors.secondary
}))``

export const TempWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 32px;
`

export const Column = styled.View`
  align-items: center;
`

export const WeatherImage = styled.Image`
  width: 50px;
  height: 50px;
`

export const WeatherDescription = styled(Text)`
  color: ${colors.black};
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
  color: ${colors.tertiaryLight};
  font-size: 24px;
  margin-top: 16px;
`

export const TempVariation = styled(Text).attrs(() => ({
  preset: 'light'
}))`
  margin: 4px 0;
`

export const ArrowUp = styled(Ionicons).attrs(() => ({
  name: 'arrow-up',
  size: 12,
  color: colors.tertiaryLight
}))`
  margin: 4px 0;
`

export const ArrowDown = styled(Ionicons).attrs(() => ({
  name: 'arrow-down',
  size: 12,
  color: colors.tertiaryLight
}))`
  margin: 4px 0;
`
