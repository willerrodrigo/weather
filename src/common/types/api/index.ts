/* eslint-disable camelcase */
type Weather = {
  description: string
  icon: string
}

export type CurrentWeather = {
  weather: Weather[]
  temp: number
  humidity: number
  pressure: number
  wind_speed: number
  sunrise: number
  sunset: number
  visibility: number
}

export type DailyWeather = {
  weather: Weather[]
  temp: {
    max: number
    min: number
  }
  dt: number
}[]

export type WeatherResponse = {
  current: CurrentWeather
  daily: DailyWeather
}
