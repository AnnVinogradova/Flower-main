import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CustomContext } from '../../context/context';
import CategoryName from '../CategoryName/CategoryName'

export default function BreadCrumbs() {

	const { gender } = useContext(CustomContext)
	return <>
	<Box ml={"310"}>
		<Box>
			<Breadcrumb mt={30}>
				<BreadcrumbItem>
					<BreadcrumbLink href="main">Главная</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="catalog">Каталог</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Heading color="rgba(3, 69, 59)" mt={30}>Каталог</Heading>
		</Box>
		<Box>
			<Breadcrumb mt={"10"}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/main'>Главная</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem pl={"10"}>
					<BreadcrumbLink href='#'>
						{gender === 'women' && 'Женщине'}
						{gender === 'men' && 'Мужчине'}
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#'>
						<CategoryName />
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Box>
		</Box>
	</>;
};

