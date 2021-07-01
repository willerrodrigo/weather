/* eslint-disable camelcase */
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium
} from '@expo-google-fonts/barlow'
import AppLoading from 'expo-app-loading'

import Home from './screens/Home'

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}
