import { Box, BoxProps, Container, Text } from '@chakra-ui/react'
// import vAgentLogo from '../public/images/favicon-32x32.svg' // Импортируйте изображение

export const Footer = (props: BoxProps) => {
	return (
		<Box as='footer' role='contentinfo' bg='bg.accent.default' {...props}>
			<Box>
				<Box minH='160'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='32.000000pt'
						height='32.000000pt'
						viewBox='0 0 32.000000 32.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<g
							transform='translate(0.000000,32.000000) scale(0.100000,-0.100000)'
							fill='#000000'
							stroke='none'
						>
							<path
								d='M90 276 c0 -8 7 -16 15 -20 8 -3 15 -10 15 -16 0 -5 -7 -10 -15 -10
-10 0 -15 -10 -15 -26 0 -15 -8 -33 -17 -40 -17 -13 -17 -15 4 -31 11 -10 23
-27 25 -37 4 -27 28 -32 35 -7 6 24 23 28 23 6 0 -8 7 -15 15 -15 8 0 15 6 15
13 0 7 9 19 20 27 23 17 27 50 5 50 -10 0 -15 10 -15 30 0 20 -5 30 -15 30
-20 0 -19 17 2 29 10 5 15 13 11 17 -4 4 -17 -5 -29 -20 -17 -21 -24 -24 -35
-15 -8 6 -14 20 -14 30 0 11 -7 19 -15 19 -8 0 -15 -6 -15 -14z m50 -74 c0 -5
10 -8 23 -8 15 1 22 -5 22 -16 0 -10 -3 -18 -7 -18 -5 0 -21 0 -38 0 -22 0
-30 5 -30 18 0 10 3 22 7 25 9 10 23 9 23 -1z'
							/>
						</g>
					</svg>
					{/* <img src={vAgentLogo} alt='v-agent' width='32' height='32' /> &nbsp; */}
					Powered by VAOP
				</Box>
			</Box>
		</Box>
	)
}
