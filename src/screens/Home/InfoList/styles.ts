import styled from 'styled-components/native'
import Text from 'components/Text'

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 8px 8px 8px;
`

export const InfoValue = styled(Text)`
  margin: 8px 0 4px 0px;
`

export const InfoLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiaryLight};
  font-size: 14px;
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
