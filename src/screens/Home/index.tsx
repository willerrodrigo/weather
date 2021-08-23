import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import dayjs from 'dayjs'

import DynamicImage from '../../components/DynamicImage'
import Loader from '../../components/Loader'
import AccessDenied from '../../components/AccessDenied'
import WeatherList from '../../components/WeatherList'
import NetworkError from '../../components/NetworkError'

import { CurrentWeather } from '../../common/types/api'
import { WEATHER_INFOS } from '../../constants'
import { Coordinates } from '../../common/types'
import { useHomeQuery } from '../../hooks'

import * as S from './styles'

type Permission = {
  denied: boolean
  canAskAgain: boolean
}

function Home(): JSX.Element {
  const [permission, setPermission] = useState({} as Permission)
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates)
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>(
    {} as Location.LocationGeocodedAddress
  )

  const { isFetching, data, error } = useHomeQuery(
    coordinates,
    !!Object.values(coordinates).length
  )

  const getCoordinates = async (): Promise<void> => {
    try {
      const { status, canAskAgain } =
        await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setPermission({
          denied: true,
          canAskAgain
        })

        return
      }

      setPermission({
        denied: false,
        canAskAgain
      })

      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      })
      const [firstAddress] = await Location.reverseGeocodeAsync(coords)

      setAddress(firstAddress)
      setCoordinates({
        lat: coords.latitude,
        lon: coords.longitude
      })
    } catch (error) {
      console.log('getCoordinates', error)
    }
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  const parseInfoValue = (key: keyof CurrentWeather): number | string => {
    const value = data?.current[key] as number

    switch (key) {
      case 'humidity':
        return Math.round(value)

      case 'pressure':
        return Math.round(value)

      case 'wind_speed':
        return Math.round(value)

      case 'sunrise':
      case 'sunset':
        return dayjs(dayjs.unix(value)).format('HH:mm')

      case 'visibility':
        return Math.round(value / 1000)

      default:
        return value
    }
  }

  if (permission.denied) {
    return (
      <AccessDenied
        canAskAgain={permission.canAskAgain}
        handlePermission={getCoordinates}
      />
    )
  }

  if (error) {
    return <NetworkError />
  }

  return (
    <S.Container>
      <DynamicImage data={data?.current} />

      <S.Content>
        {isFetching || !data ? (
          <Loader />
        ) : (
          <>
            <S.Header>
              <S.Time>{dayjs().format('ddd, MMM D, YYYY  |  HH:mm')}</S.Time>

              <S.Address>
                <S.AddressText>
                  {address?.city || address?.district || address?.subregion},{' '}
                  {address?.country}
                </S.AddressText>

                <S.LocationIcon />
              </S.Address>
            </S.Header>

            <S.Scroll>
              <S.InfoWrapper>
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
                    <S.CurrentTemp>
                      {Math.round(data?.current.temp || 0)}
                    </S.CurrentTemp>

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

                {WEATHER_INFOS.map(({ key, Icon, unit, label }) => (
                  <S.InfoItem key={key}>
                    <S.Column>
                      {<Icon width={32} height={32} />}

                      <S.InfoValue>
                        {data?.current
                          ? parseInfoValue(key as keyof CurrentWeather)
                          : 0}{' '}
                        {unit}
                      </S.InfoValue>

                      <S.InfoLabel>{label}</S.InfoLabel>
                    </S.Column>
                  </S.InfoItem>
                ))}
              </S.InfoWrapper>

              <WeatherList data={data?.daily.slice(1) || []} />
            </S.Scroll>
          </>
        )}
      </S.Content>
    </S.Container>
  )
}

export default Home
