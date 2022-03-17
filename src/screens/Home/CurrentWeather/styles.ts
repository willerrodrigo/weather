import Text from 'components/Text'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 8px 0px 8px;
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
