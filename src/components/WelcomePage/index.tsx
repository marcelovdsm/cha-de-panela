import { WelcomeInfo, WelcomePageStyles } from './styles'

export const WelcomePage = () => {
  return (
    <WelcomePageStyles>
      {/* <BackgroundImage></BackgroundImage> */}
      <WelcomeInfo>
        <h1>Seja bem vindo!</h1>
        <p>
          Momentos especiais devem ser compartilhados com pessoas especiais, por
          isso você está convidado para o nosso chá de casa nova!
        </p>
      </WelcomeInfo>
    </WelcomePageStyles>
  )
}
