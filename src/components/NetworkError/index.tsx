import React from 'react'

import { queryClient } from 'services/query-client'

import NetError from 'assets/svg/network-error.svg'

import Button from 'components/Button'

import { Container, Info, ButtonWrapper } from 'components/AccessDenied/styles'

function NetworkError(): JSX.Element {
  const handleWeatherRefetch = async (): Promise<void> => {
    await queryClient.refetchQueries('home', { active: true })
  }

  return (
    <Container>
      <NetError width={260} height={260} />

      <Info>
        Parece que não conseguimos conectar você aos nossos servidores. Aguarde
        alguns minutos e tente novamente.
      </Info>

      <ButtonWrapper>
        <Button title="Tentar Novamente" onPress={handleWeatherRefetch} />
      </ButtonWrapper>
    </Container>
  )
}

export default NetworkError
