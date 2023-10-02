import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/NavBar/NavBar'
import { Footer } from './components/FooterFiles/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	)
}
