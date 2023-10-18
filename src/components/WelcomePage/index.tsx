import coupleArt from '../../assets/couple-art.jpeg'

export const WelcomePage = () => {
  return (
    <>
      <h1>Seja bem vindo!</h1>
      <p>
        Momentos especiais devem ser compartilhados com pessoas especiais, por
        isso você está convidado para o chá de panela
      </p>
      <img src={coupleArt} alt="Arte de uma foto nossa" />
    </>
  )
}
