import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = RectButtonProps & {
  title: string
}

function Button({ title, ...rest }: Props): JSX.Element {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Button
