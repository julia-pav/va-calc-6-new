import { Flex, Text, IconButton } from '@chakra-ui/react'
import  CalcBase10  from "../components/calculators/CalcBase10"

export default function Home() {
	return (
		<Flex w='100%'>
			<Flex
				pos='absolute'
				top='50%'
				left='50%'
				transform='translate(-50%, -50%)'
			>
Calculator Base 10 
<CalcBase10 />
			</Flex>
		</Flex>
	)
}
