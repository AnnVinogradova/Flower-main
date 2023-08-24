import { Box, Image, Text, Grid, GridItem, Button, Link, H } from '@chakra-ui/react';
import { useContext } from 'react';
import { CustomContext } from '../../context/context';

export default function Product() {

	const { products, showMore, displayedProducts, handleShowMore, setProductForFavorites, favorites  } = useContext(CustomContext);

	if (products.error.length) {
		return <Text>{products.error.message}</Text>
	}


	return <>
		<Grid templateColumns="repeat(3, 1fr)" gap={4} ml={"10"}>
			{products.data.slice(0, displayedProducts).map((item) => (
				<Box key={item.id} width="33%">
					<GridItem width={310} height={470} backgroundColor="rgba(202,218,186)" textAlign="center">
						<Box position="relative">
							<Link href={`/card/${item.id}`}>
								<Image src={item.image} alt={item.title} width="100%" height={280} />
							</Link>
							<Box onClick={() => setProductForFavorites(item.id)}
								style={{ position: 'absolute', top: 2, right: 2, cursor: 'pointer' }}
							>

								<svg width="21" height="18" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
									<path fill="white" fillRule="evenodd" d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z" stroke="#0F303F" strokeLinecap="round" />
								</svg>

							</Box>
						</Box>

						<Box display="flex" justifyContent="center" flexDirection="column">
							<Text>{item.title}</Text>
							<Text>{item.price}₽</Text>
							<Button width={290} mx="auto" backgroundColor="rgba(0, 85, 78)" marginTop={10} color="rgba(235, 235, 235)" >Заказать</Button>
						</Box>
						<Box>
						</Box>
					</GridItem>
				</Box>

			))}
			{!showMore && displayedProducts < products.data.length && (
				<Button display="flex" mt={30} borderRadius={4} border="1px solid" color="rgba(3, 69, 59)" onClick={handleShowMore} >
					Смотреть ещё
				</Button>
			)}
		</Grid>
	</>
}
