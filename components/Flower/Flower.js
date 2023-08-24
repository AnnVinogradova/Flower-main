import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Grid, GridItem, Heading } from '@chakra-ui/react';

export default function Best() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/catalog')
			.then(response => response.json())
			.then(data => setProducts(data.slice(0, 8)));
	}, []);

	return <>
	<Box>
	<Heading display={"flex"} justifyContent={"center"} mt={"8"} color="rgba(3, 69, 59)">Топ 8 популярных букетов</Heading>
		<Grid templateColumns="repeat(4, 1fr)" gap={4} ml={"310"} mr={"310"} mt={"20"}>
			{products.map(product => (
				<Box key={product.id}>
					<GridItem width={310} height={340} backgroundColor="rgba(202,218,186)" textAlign="center">
						<Image src={product.image} alt="Фото" width="auto" height="250" padding={6} justifyContent="center" style={{ margin: "auto" }} />
						<Box display="flex" justifyContent="center" flexDirection="column">
							<Text>{product.title}</Text>
							<Text>{product.price}₽</Text>
						</Box>
					</GridItem>
				</Box>
			))}
		</Grid>
		</Box>
		</>;
};

