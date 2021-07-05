import styled from 'styled-components/native'

import { InfoValue, Row as SharedRow } from '../../screens/Home/styles'
import { colors } from '../../styles'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  nestedScrollEnabled: true,
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 24 }
}))``

export const DayWrapper = styled.View`
  background-color: ${colors.primary};
  margin: 0 8px;
  border-radius: 16px;

  width: 120px;
  height: 120px;

  align-items: center;
  justify-content: center;

  elevation: 8;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
`

export const Day = InfoValue

export const Row = styled(SharedRow)`
  align-items: center;
`
