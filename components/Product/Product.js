import { Box, Image, Text, Grid, GridItem, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CustomContext } from '../../context/context';
import Link from 'next/link'

export default function Product() {

	const { products, showMore, displayedProducts, handleShowMore, minusBasket, addBasket, basket, plusBasket } = useContext(CustomContext);
	
	if (products.error.length) {
		return <Text>{products.error.message}</Text>
	}

	return <>
		<Grid templateColumns="repeat(3, 1fr)" gap={4} ml={"10"}>
			{products.data.slice(0, displayedProducts).map((item) => (
				<Box key={item.id} width="33%">
					<GridItem width={310} height={470} backgroundColor="rgba(202,218,186)" textAlign="center">
						<Box position={"relative"}>
							<Link href={`/card/${item.id}`}>
							<Box justifyContent="center" alignItems="center" color="rgba{'60, 60, 60'}"  top={-2} backgroundColor="rgba(202,218,186)" borderRadius={50} width={6} height={6} right={-2} position={"absolute"} >
							{basket.find(product => product.id === item.id)?.count || 0}
						</Box>
								<Image src={item.image} alt={item.title} width="100%" height={280} />
							</Link>
						</Box>
						
						<Box display="flex" justifyContent="center" flexDirection="column">
							<Text>{item.title}</Text>
						</Box>
						{
							basket.findIndex(product=>product.id === item.id) > -1
							? <Box display={"flex"} justifyContent={"center"} mt={"2"} >
							<Button type='button'm={"2"} backgroundColor="rgba(0, 85, 78)" color="rgba(235, 235, 235)" onClick={()=> minusBasket(item.id)}>-</Button>
							<Text mt={"4"}>
								{item.price}₽
							</Text>
							<Button type='button'm={"2"} backgroundColor="rgba(0, 85, 78)" color="rgba(235, 235, 235)" onClick={()=> plusBasket(item.id)}>+</Button>
						</Box>
						: <Box>
						<Text>
							{item.price}₽
						</Text>
						<Button type={"button"} onClick={() => addBasket(item)} width={290} mx="auto" backgroundColor="rgba(0, 85, 78)" marginTop={5} color="rgba(235, 235, 235)" >Заказать</Button>
					</Box>
						}		
					</GridItem>
				</Box>
			))}
			<Box>
				{!showMore && displayedProducts < products.data.length && (
					<Button display="flex" mt={30} borderRadius={4} border="1px solid" color="rgba(3, 69, 59)" onClick={handleShowMore} >
						Смотреть ещё
					</Button>
				)}
			</Box>
		</Grid>
	</>
}

