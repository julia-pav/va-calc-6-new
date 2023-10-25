import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
	Flex,
	Text,
	Icon,
	Link,
	Menu,
	Box,
	MenuButton,
	MenuList
} from '@chakra-ui/react'
import NavHoverBox from '../components/NavHoverBox'

export default function NavItem({
	icon,
	LinkUrl,
	title,
	description,
	navSize
}) {
	const router = useRouter() // get current route
	// Determine if the current page matches the LinkUrl
	const isActive = router.pathname === LinkUrl

	const [isHovered, setIsHovered] = useState(false)

	return (
		<Flex
			mt={30}
			flexDir='column'
			w='100%'
			alignItems={navSize == 'small' ? 'center' : 'flex-start'}
		>
			<Menu placement='right'>
				<Link
					href={LinkUrl}
					backgroundColor={isActive && '#AEC8CA'}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
					w={navSize == 'large' && '100%'}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<MenuButton w='100%'>
						<Flex>
							<Icon
								as={icon}
								fontSize='xl'
								color={isActive ? '#82AAAD' : 'gray.500'}
							/>
							<Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
								{title}
							</Text>
						</Flex>
					</MenuButton>

					{isHovered && (
						<Box py={0} border='none' w={100} h={100} ml={5}>
							<NavHoverBox
								title={title}
								icon={icon}
								description={description}
							/>
						</Box>
					)}
				</Link>
			</Menu>
		</Flex>
	)
}
