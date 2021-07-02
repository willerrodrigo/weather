/* eslint-disable camelcase */
import React from 'react'
import { LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium
} from '@expo-google-fonts/barlow'
import AppLoading from 'expo-app-loading'
import { QueryClientProvider } from 'react-query'

import Home from './screens/Home'

import { queryClient } from './services/query-client'

LogBox.ignoreLogs(['Setting a timer'])

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </QueryClientProvider>
  )
}