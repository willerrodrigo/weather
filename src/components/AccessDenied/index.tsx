import React from 'react'

import CurrentLocation from 'assets/svg/current-location.svg'

import Button from 'components/Button'

import * as S from './styles'

type Props = {
  handlePermission: () => unknown
  canAskAgain: boolean
}

function AccessDenied({ canAskAgain, handlePermission }: Props): JSX.Element {
  return (
    <S.Container>
      <CurrentLocation width={260} height={260} />

      <S.Info>
        {`Acesso à localização negado :´( ${
          canAskAgain
            ? ''
            : '\n Habilite a localização nas configurações do aplicativo.'
        }`}
      </S.Info>

      {canAskAgain && (
        <S.ButtonWrapper>
          <Button title="Permitir Acesso" onPress={handlePermission} />
        </S.ButtonWrapper>
      )}
    </S.Container>
  )
}

export default AccessDenied
