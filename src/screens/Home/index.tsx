import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import DynamicImage from '../../components/DynamicImage'

import { useHomeQuery } from '../../hooks'

import * as S from './styles'

function Home(): JSX.Element {
  const { data } = useHomeQuery({ lat: -22.040474, lon: -45.6971698 })

  return (
    <S.Container>
      <DynamicImage />
    </S.Container>
  )
}

export default Home
