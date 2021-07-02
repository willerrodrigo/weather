import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import * as Location from 'expo-location'

import DynamicImage from '../../components/DynamicImage'
import Loader from '../../components/Loader'

import { Coordinates } from '../../common/types'
import { useHomeQuery } from '../../hooks'

import * as S from './styles'

function Home(): JSX.Element {
  const [coordinates, setCoordinates] = useState<Coordinates>({} as Coordinates)
  const { isFetching } = useHomeQuery(
    coordinates,
    !!Object.values(coordinates).length
  )

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        // setErrorMsg('Permission to access location was denied');
        return
      }

      const { coords } = await Location.getCurrentPositionAsync()

      setCoordinates({
        lat: coords.latitude,
        lon: coords.longitude
      })
    })()
  }, [])

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
