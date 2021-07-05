import Humidity from '../assets/svg/humidity.svg'
import Barometer from '../assets/svg/barometer.svg'
import Wind from '../assets/svg/wind.svg'
import Sunrise from '../assets/svg/sunrise.svg'
import Sunset from '../assets/svg/sunset.svg'
import Eye from '../assets/svg/eye.svg'

export const BASE_URL = 'https://api.openweathermap.org'

export const WEATHER_INFOS = [
  {
    key: 'humidity',
    label: 'Umidade',
    unit: '%',
    Icon: Humidity
  },
  {
    key: 'pressure',
    label: 'Pressão',
    unit: 'hPa',
    Icon: Barometer
  },
  {
    key: 'wind_speed',
    label: 'Vento',
    unit: 'm/s',
    Icon: Wind
  },
  {
    key: 'sunrise',
    label: 'Nascer do sol',
    unit: '',
    Icon: Sunrise
  },
  {
    key: 'sunset',
    label: 'Pôr do sol',
    unit: '',
    Icon: Sunset
  },
  {
    key: 'visibility',
    label: 'Visibilidade',
    unit: 'km',
    Icon: Eye
  }
]
