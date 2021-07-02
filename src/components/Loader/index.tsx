import React from 'react'
import LottieView from 'lottie-react-native'

function Loader(): JSX.Element {
  return (
    <LottieView
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
      speed={2}
    />
  )
}

export default Loader
