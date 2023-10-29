import { CalendarCheck, Gift, MapPin } from '@phosphor-icons/react'

export const AboutPage = () => {
  return (
    <>
      <h1>NOSSO CHÁ DE CASA NOVA</h1>
      <ul>
        <li>
          <CalendarCheck size={16} color="#b15015" weight="fill" />
          <h4>QUANDO</h4>
          <p>00 de Dezembro de 2023, às 00Hrs</p>
        </li>
        <li>
          <MapPin size={16} color="#b15015" weight="fill" />
          <h4>ONDE</h4>
          <p>00 de Dezembro de 2023, às 00Hrs</p>
        </li>
        <li>
          <Gift size={16} color="#b15015" weight="fill" />
          <h4>
            LISTA DE PRESENTES <a href="#">AQUI</a>
          </h4>
          <p>00 de Dezembro de 2023, às 00Hrs</p>
        </li>
      </ul>
      <h2>Esperamos que você possa celebrar este dia conosco!</h2>
    </>
  )
}
