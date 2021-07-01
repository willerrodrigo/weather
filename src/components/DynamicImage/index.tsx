import React from 'react'

import Sunny from '../../assets/images/sunny-day.png'

import * as S from './styles'

function DynamicImage(): JSX.Element {
  return <S.Container source={Sunny}></S.Container>
}

export default DynamicImage
