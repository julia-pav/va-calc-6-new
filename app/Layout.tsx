import { Flex, Container, Stack } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<Flex direction='column' flex='1'>
			<Header />

			<Container>
				<Stack
					direction={{ base: 'column', lg: 'row' }}
					spacing={{ base: '12', lg: '16' }}
					flex='1'
				>
					<Sidebar />
					{children}
				</Stack>
			</Container>

			{/* <Sidebar />
			<Container py='16' flex='1'>
				{children}
			</Container> */}
			<Footer />
		</Flex>
	)
}
