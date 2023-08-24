import React, { useContext } from 'react';
import { CustomContext } from '../../context/context'
import { Box, Flex, Text, UnorderedList } from '@chakra-ui/react';
import BarItem from './BarItem';

export default function SideBar() {

	const { gender, changeGender } = useContext(CustomContext)
	return <>
		<Box height={'700'} mt={"100"} width={"400px"} textAlign={"center"} color="rgba(3, 69, 59)" backgroundColor={"rgba(202,218,186)"}>
			<Flex direction={'column'} justifyContent={'space-between'} pt={"6"}>
				<Flex width={"100%"} justifyContent={"center"} gap={"8"}>
					<Text onClick={() => changeGender('women')} className={gender === 'women' ? 'active' : ''}>Женщине</Text>
					<Text onClick={() => changeGender('men')} className={gender === 'men' ? 'active' : ''}>Мужчине</Text>
				</Flex>
				<Box>
					<UnorderedList listStyleType={"none"} display={"flex"} flexDirection={"column"} maxHeight={"600"} >
						<BarItem value={"Gift Baskets"} text="Подарочные наборы"/>
						<BarItem value={"Peonies"} text="Пионы" />
						<BarItem value={"Bouquets"} text="Букеты" />
						<BarItem value={"Compositions"} text="Композиции" />
						<BarItem value={"Flowers Box"} text="Цветы в коробке" />
						<BarItem value={"Presents"} text="Подарки" />
						<BarItem value={"Balloons"} text="Воздушные шары" />
						<BarItem value={"Edible bouquets"} text="Съедобные букеты" />
						<BarItem value={"Dry flowers"} text="Сухие цветы" />
						<BarItem value={"Mono bouquets"} text="Монобукеты" />
						<BarItem value={"Roses"} text="Розы" />
					</UnorderedList>
				</Box>
			</Flex>
		</Box>
	</>;
};