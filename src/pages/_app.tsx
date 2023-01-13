
import type { AppProps } from 'next/app'
import { globaLStyles } from '../styles/global'

import Image from 'next/legacy/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';

globaLStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
