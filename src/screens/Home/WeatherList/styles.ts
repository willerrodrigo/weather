import styled from 'styled-components/native'

import Text from 'components/Text'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  nestedScrollEnabled: true,
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 24 }
}))``

export const DayWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
  border-radius: 16px;

  width: 120px;
  height: 120px;

  align-items: center;
  justify-content: center;

  elevation: 4;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
`

export const Day = styled(Text)`
  margin: 8px 0 4px 0px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`
