import React from 'react'
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { Montserrat } from 'next/font/google'
import Context from '../context/context.js'
const montserrat = Montserrat({
	weight: '500',
	subsets: ['cyrillic'],
})

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return <>
		<Context>
			<SessionProvider>
				<ChakraProvider>
					<main className={montserrat.className}>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</main>
				</ChakraProvider>
			</SessionProvider>
		</Context>
	</>
}