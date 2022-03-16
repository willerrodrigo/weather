/* eslint-disable camelcase */
import 'dayjs/locale/pt-br'
import React from 'react'
import { LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_300Light
} from '@expo-google-fonts/barlow'
import AppLoading from 'expo-app-loading'
import { QueryClientProvider } from 'react-query'
import dayjs from 'dayjs'
import { ThemeProvider } from 'styled-components/native'

import Home from 'screens/Home'

import { queryClient } from 'services/query-client'
import { theme } from 'styles'

LogBox.ignoreLogs(['Setting a timer'])

dayjs.locale('pt-br')

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
