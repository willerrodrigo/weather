import React from 'react'
import dayjs from 'dayjs'
import { ImageSourcePropType } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { CurrentWeather } from '../../common/types'

import { queryClient } from '../../services/query-client'

import DaySunny from '../../assets/images/sunny-day.png'
import RainySunny from '../../assets/images/rainy-day.png'
import MoonNight from '../../assets/images/moon-night.png'
import RainyNight from '../../assets/images/rainy-night.png'

import * as S from './styles'

type Props = {
  data: CurrentWeather | undefined
}

function getImageByTime(data: CurrentWeather): ImageSourcePropType {
  const curretTime = dayjs().unix()
  const isBetween = data.sunrise < curretTime && curretTime < data.sunset

  if (isBetween) {
    if (data.weather[0].main === 'Rain') {
      return RainySunny
    }

    return DaySunny
  } else {
    if (data.weather[0].main === 'Rain') {
      return RainyNight
    }

    return MoonNight
  }
}

function DynamicImage({ data }: Props): JSX.Element {
  const handleWeatherRefetch = async (): Promise<void> => {
    await queryClient.refetchQueries(['home'])
  }

  return (
    <S.Container source={data ? getImageByTime(data) : DaySunny}>
      <BorderlessButton onPress={handleWeatherRefetch}>
        <S.CloudIcon />
      </BorderlessButton>
    </S.Container>
  )
}

export default DynamicImage
