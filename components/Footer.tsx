import { Box, BoxProps, Center, Container, Text, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import vAgent from '../public/images/favicon-32x32.svg' // Импортируйте изображение

export const Footer = (props: BoxProps) => {
	const router = useRouter()
	const baseUrl = router.basePath
	const relativeImagePath = '/images/v-agent-32x32.png'
	const imageUrl = baseUrl + relativeImagePath

	const vaopUrl =
		'https://vaop.notion.site/Main-c505f1e727bd4779b097f7fd203024d6'
	return (
		<Box as='footer' role='contentinfo' bg='bg.accent.default' {...props}>
			<Container>
				<Box minH='160'>
					<Link href={vaopUrl} display='flex' alignItems='center'>
						<img src={imageUrl} width={32} height={32} />
						Powered by VAOP
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
