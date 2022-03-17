import React, { useCallback, useEffect, useState } from 'react'
import * as Location from 'expo-location'

import Header from './Header'
import CurrentWeather from './CurrentWeather'
import InfoList from './InfoList'
import WeatherList from './WeatherList'

import DynamicImage from 'components/DynamicImage'
import Loader from 'components/Loader'
import AccessDenied from 'components/AccessDenied'
import NetworkError from 'components/NetworkError'

import { Coordinates } from 'common/types'
import { useHomeQuery } from 'hooks'

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

  const handlePermission = async (): Promise<boolean> => {
    const { status, canAskAgain } =
      await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      setPermission({
        denied: true,
        canAskAgain
      })

      return false
    }

    setPermission({
      denied: false,
      canAskAgain
    })

    return true
  }

  const getCoordinates = useCallback(async (): Promise<void> => {
    try {
      const hasPermission = await handlePermission()

      if (!hasPermission) return

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
      console.error('getCoordinates', error)
    }
  }, [])

  useEffect(() => {
    getCoordinates()
  }, [getCoordinates])

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
            <Header data={address} />

            <S.Scroll>
              <CurrentWeather data={data} />

              <InfoList data={data?.current} />

              <WeatherList data={data?.daily?.slice(1) || []} />
            </S.Scroll>
          </>
        )}
      </S.Content>
    </S.Container>
  )
}

export default Home
