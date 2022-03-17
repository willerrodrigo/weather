import styled from 'styled-components/native'

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
