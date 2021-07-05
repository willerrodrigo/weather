/* eslint-disable camelcase */
type Weather = {
  description: string
  icon: string
}

export type CurrentWeather = {
  temp: number
  weather: Weather[]
  humidity: number
  pressure: number
  wind_speed: number
  sunrise: number
  sunset: number
  visibility: number
}

export type WeatherResponse = {
  current: CurrentWeather
  daily: {
    temp: {
      max: number
      min: number
    }
    dt: number
    weather: Weather[]
  }[]
}
