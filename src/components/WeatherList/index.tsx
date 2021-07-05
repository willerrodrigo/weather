import React from 'react'
import dayjs from 'dayjs'

import { DailyWeather } from '../../common/types'

import {
  WeatherImage,
  TempVariation,
  ArrowUp,
  ArrowDown
} from '../../screens/Home/styles'
import * as S from './styles'

type Props = {
  data: DailyWeather
}

function WeatherList({ data }: Props): JSX.Element {
  return (
    <S.Container>
      {data.map(weather => (
        <S.DayWrapper key={weather.dt}>
          <WeatherImage
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
            }}
          />

          <S.Day>{dayjs(dayjs.unix(weather.dt)).format('ddd, D')}</S.Day>

          <S.Row>
            <S.Row style={{ marginRight: 8 }}>
              <TempVariation>{Math.round(weather.temp.max)}°C</TempVariation>
              <ArrowUp />
            </S.Row>

            <S.Row>
              <TempVariation>{Math.round(weather.temp.min)}°C</TempVariation>
              <ArrowDown />
            </S.Row>
          </S.Row>
        </S.DayWrapper>
      ))}
    </S.Container>
  )
}

export default WeatherList
