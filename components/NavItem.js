import React from 'react'
import { useState } from 'react';
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
	active,
	navSize
}) {

	const [isHovered, setIsHovered] = useState(false);

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
					backgroundColor={active && '#AEC8CA'}
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
								color={active ? '#82AAAD' : 'gray.500'}
							/>
							<Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				
				{isHovered && (
					<Box py={0} border='none' w={200} h={200} ml={5}>
						<NavHoverBox title={title} icon={icon} description={description} />
					</Box>
				)}
				</Link>
			</Menu>
		</Flex>
	)
}
