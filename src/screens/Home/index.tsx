import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import * as Location from 'expo-location'

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
    }

    const { coords } = await Location.getCurrentPositionAsync()

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

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: -32,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24
        }}
      >
        {isFetching ? <Loader /> : <></>}
      </View>
    </S.Container>
  )
}

export default Home
