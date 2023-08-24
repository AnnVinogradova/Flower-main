import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import SideBar from '../components/SideBar/SideBar.js';
import CategoryName from '../components/CategoryName/CategoryName';
import Product from '../components/Product/Product.js'
import { CustomContext } from '../context/context';
import Filter from '../components/Filter/Filter.js'
import HowWork from '../components/HowWork/HowWork.js'
import Instagram from '../components/Instagram/Instagram.js'

export default function Catalog() {

	const { category, getProducts, gender, price } = useContext(CustomContext)

	useEffect(() => {
		getProducts()
	}, [gender, category, price])

	return <>
		<Flex padding-top={8} paddingBottom={50}>
			<Box>
				<BreadCrumbs />
				<Box display={"flex"} ml={"310"}>
					<SideBar />
					<Box>
						<Heading>
							<CategoryName />
						</Heading>
						<Filter/>
						<Product />
					</Box>
				</Box>
				<HowWork />
		<Instagram />
			</Box>
		</Flex>
	</>
}