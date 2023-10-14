import React, { useState } from 'react'
import { Flex, Link, Text, IconButton, Heading } from '@chakra-ui/react'
import { FiMenu, FiHome, FiBriefcase, FiSettings } from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'

export default function Sidebar() {
	const [navSize, changeNavSize] = useState('large')
	// const [isCalcBase10Open, setCalcBase10Open] = useState(false)
	// const [isCalculatorSubMenu2Open, setCalculatorSubMenu2Open] =
	// 	useState(false)

	// const toggleCalcBase10 = () => {
	// 	setCalcBase10Open(!isCalcBase10Open)
	// }

	return (
		<Flex
			pos='sticky'
			left='5'
			h='95vh'
			marginTop='2.5vh'
			boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
			borderRadius={navSize == 'small' ? '15px' : '30px'}
			w={navSize == 'small' ? '75px' : '200px'}
			flexDir='column'
			justifyContent='space-between'
		>
			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				as='nav'
			>
				<IconButton
					background='none'
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize == 'small') changeNavSize('large')
						else changeNavSize('small')
					}}
				/>
				<NavItem
					LinkUrl='/'
					navSize={navSize}
					icon={FiHome}
					title='Info'
					description='This is the description for the dashboard.'
				/>
				{/* <Link href='/calculator10'> */}
				<NavItem
					LinkUrl='/calculator10'
					navSize={navSize}
					icon={FiBriefcase}
					title='Decimal calculator'
				/>
				{/* </Link> */}
				<NavItem
					LinkUrl='/calculator2'
					navSize={navSize}
					icon={FiSettings}
					title='Binary calculator'
				/>
			</Flex>
		</Flex>
	)
}
