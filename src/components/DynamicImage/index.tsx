import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'

import { queryClient } from '../../services/query-client'

import Sunny from '../../assets/images/sunny-day.png'

import * as S from './styles'

function DynamicImage(): JSX.Element {
  const handleWeatherRefetch = async (): Promise<void> => {
    await queryClient.refetchQueries(['home'])
  }

  return (
    <S.Container source={Sunny}>
      <BorderlessButton onPress={handleWeatherRefetch}>
        <S.CloudIcon />
      </BorderlessButton>
    </S.Container>
  )
}

export default DynamicImage
