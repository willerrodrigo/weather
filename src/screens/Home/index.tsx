import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import dayjs from 'dayjs'

import DynamicImage from '../../components/DynamicImage'
import Loader from '../../components/Loader'
import AccessDenied from '../../components/AccessDenied'

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
  const { isFetching } = useHomeQuery(
    coordinates,
    !!Object.values(coordinates).length
  )

  const getCoordinates = async (): Promise<void> => {
    const { status, canAskAgain } =
      await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      setPermission({
        denied: true,
        canAskAgain
      })

      return
    } else {
      setPermission({
        denied: false,
        canAskAgain
      })
    }

    const { coords } = await Location.getCurrentPositionAsync()
    const [firstAddress] = await Location.reverseGeocodeAsync(coords)

    setAddress(firstAddress)
    setCoordinates({
      lat: coords.latitude,
      lon: coords.longitude
    })
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  if (permission.denied) {
    return (
      <AccessDenied
        canAskAgain={permission.canAskAgain}
        handlePermission={getCoordinates}
      />
    )
  }

  return (
    <S.Container>
      <DynamicImage />

      <S.Content>
        {isFetching ? (
          <Loader />
        ) : (
          <S.Header>
            <S.Time>{dayjs().format('ddd, MMM D, YYYY  |  h:mm')}</S.Time>

            <S.Address>
              <S.AddressText>
                {address?.city || address?.district}, {address?.country}
              </S.AddressText>
              <S.LocationIcon />
            </S.Address>
          </S.Header>
        )}
      </S.Content>
    </S.Container>
  )
}

export default Home
