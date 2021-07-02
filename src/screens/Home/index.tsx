import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import DynamicImage from '../../components/DynamicImage'
import Loader from '../../components/Loader'

import { useHomeQuery } from '../../hooks'

import * as S from './styles'

function Home(): JSX.Element {
  const { isFetching } = useHomeQuery({ lat: -22.040474, lon: -45.6971698 })

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
