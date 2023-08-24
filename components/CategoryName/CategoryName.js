import { Text, Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CustomContext } from '../../context/context';


export default function CategoryName() {
	const { category } = useContext(CustomContext)

	return <>
		<Box ml={"10"}>
			<Text>
				{category === 'Gift Baskets' && 'Подарочные наборы'}
				{category === 'Peonies' && 'Пионы'}
				{category === 'Bouquets' && 'Букеты'}
				{category === 'Compositions' && 'Композиции'}
				{category === 'Flowers Box' && 'Цветы в коробке'}
				{category === 'Presents' && 'Подарки'}
				{category === 'Balloons' && 'Воздушные шары'}
				{category === 'Edible bouquets' && 'Съедобные букеты'}
				{category === 'Dry flowers' && 'Сухие цветы'}
				{category === 'Mono bouquets' && 'Монобукеты'}
				{category === 'Roses' && 'Розы'}
			</Text>
		</Box>
	</>;
};