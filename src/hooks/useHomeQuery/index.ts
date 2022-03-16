import { QueryFunctionContext, useQuery, UseQueryResult } from 'react-query'
import { WEATHER_API_KEY } from '@env'

import { WeatherResponse, Coordinates } from 'common/types'
import { api } from 'services/api'

export const fetchByCoordinates = async (
  ctx: QueryFunctionContext
): Promise<WeatherResponse> => {
  const [, { lat, lon }] = ctx.queryKey as [string, Coordinates]

  const { data } = await api.get<WeatherResponse>(
    `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${WEATHER_API_KEY}`
  )

  return data
}

export const useHomeQuery = (
  coordinates: Coordinates,
  enabled = true
): UseQueryResult<WeatherResponse> =>
  useQuery<WeatherResponse>(['home', coordinates], fetchByCoordinates, {
    enabled,
    refetchInterval: 120000 // 2 min
  })
