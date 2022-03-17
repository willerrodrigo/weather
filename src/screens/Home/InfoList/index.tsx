import React from 'react'
import dayjs from 'dayjs'

import { WEATHER_INFOS } from 'constants/index'

import * as S from './styles'
import { CurrentWeather } from 'common/types'

type InfoListProps = {
  data: CurrentWeather
}

type parseInfoParams = keyof Omit<CurrentWeather, 'weather' | 'temp'>

function InfoList({ data }: InfoListProps): JSX.Element {
  const parseInfoValue = (key: parseInfoParams): number => {
    const value = data[key] as number

    const infosValue = {
      humidity: Math.round(value),
      pressure: Math.round(value),
      wind_speed: Math.round(value),
      visibility: Math.round(value / 1000),
      sunrise: dayjs(dayjs.unix(value)).format('HH:mm'),
      sunset: dayjs(dayjs.unix(value)).format('HH:mm'),
      default: value
    } as const

    return (infosValue[key] as number) || infosValue.default
  }

  return (
    <S.Container>
      {WEATHER_INFOS.map(({ key, Icon, unit, label }) => (
        <S.InfoItem key={key}>
          <S.Column>
            {<Icon width={32} height={32} />}

            <S.InfoValue>
              {data ? parseInfoValue(key as parseInfoParams) : 0} {unit}
            </S.InfoValue>

            <S.InfoLabel>{label}</S.InfoLabel>
          </S.Column>
        </S.InfoItem>
      ))}
    </S.Container>
  )
}

export default InfoList
