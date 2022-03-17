import React from 'react'

import { WeatherResponse } from 'common/types'

import * as S from './styles'

type CurrentProps = {
  data: WeatherResponse
}

function CurrentWeather({ data }: CurrentProps): JSX.Element {
  return (
    <S.Container>
      <S.InfoItem>
        <S.Column>
          <S.WeatherImage
            source={{
              uri: `https://openweathermap.org/img/wn/${
                data?.current.weather[0]?.icon || '01d'
              }.png`
            }}
          />

          <S.WeatherDescription>
            {data?.current.weather[0]?.description}
          </S.WeatherDescription>
        </S.Column>
      </S.InfoItem>

      <S.InfoItem>
        <S.Row>
          <S.CurrentTemp>{Math.round(data?.current.temp || 0)}</S.CurrentTemp>

          <S.Degraus>°C</S.Degraus>
        </S.Row>
      </S.InfoItem>

      <S.InfoItem>
        <S.Column style={{ alignItems: 'flex-end' }}>
          <S.Row>
            <S.TempVariation>
              {Math.round(data?.daily[0]?.temp.max || 0)}°C
            </S.TempVariation>
            <S.ArrowUp />
          </S.Row>

          <S.Row>
            <S.TempVariation>
              {Math.round(data?.daily[0]?.temp.min || 0)}°C
            </S.TempVariation>
            <S.ArrowDown />
          </S.Row>
        </S.Column>
      </S.InfoItem>
    </S.Container>
  )
}

export default CurrentWeather
