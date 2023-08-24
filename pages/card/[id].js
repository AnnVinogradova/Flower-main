import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Instagram from '../../components/Instagram/Instagram.js'
import HowWork from '../../components/HowWork/HowWork.js'
import { Image, Text, Box, Flex, Button } from '@chakra-ui/react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@chakra-ui/react'

export default function Basket() {
	const router = useRouter();
	const { id } = router.query;
	const [product, setProduct] = useState(null);


	useEffect(() => {
		if (id) {
			fetch(`http://localhost:3001/catalog/${id}`)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => setProduct(data))
				.catch(error => console.error(error));
		}
	}, [id]);

	if (!product) {
		return <Text>...Loading</Text>;
	}

	return (
		<Box>
			<Box mr={310} ml={310}>
				<Breadcrumb mt={"30"}>
					<BreadcrumbItem>
						<BreadcrumbLink href='/main'>Главная</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href='/catalog'>Каталог</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href='#'>{product.title}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Flex>
					<Box mt={"10"} position="relative">
						<Image src={`../${product.image}`} width={"640"} height={487} />
						<Image src="/img/Peonies/1.png" style={{ position: 'absolute', top: 2, right: 2 }} />
					</Box>
			<Box ml={12} mt={"6"}>
				<Text color="rgba(3, 69, 59, 1)" fontSize="36">
					{product.title}
				</Text>
				<Text className="product__info-price" fontSize={"36"} color={"rgba(174, 134, 70, 1)"} mt={"12"}>
					{product.price}₽
				</Text>
				<Button className="product__info-btn" colorScheme="blue" width="250" backgroundColor={"rgba(0, 85, 78, 1)"}>
					Купить
				</Button>
			</Box>
		</Flex>
    </Box >
    <HowWork/>
    <Instagram/>
    </Box >
  );
}