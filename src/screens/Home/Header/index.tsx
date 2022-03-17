import React from 'react'
import dayjs from 'dayjs'
import * as Location from 'expo-location'

import * as S from './styles'

interface HeaderProps {
  data: Location.LocationGeocodedAddress
}

function Header({ data }: HeaderProps): JSX.Element {
  return (
    <S.Container>
      <S.Time>{dayjs().format('ddd, MMM D, YYYY  |  HH:mm')}</S.Time>

      <S.Address>
        <S.AddressText>
          {data?.city || data?.district || data?.subregion}, {data?.country}
        </S.AddressText>

        <S.LocationIcon />
      </S.Address>
    </S.Container>
  )
}

export default Header
