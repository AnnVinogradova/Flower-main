import React, { useContext } from 'react';
import { CustomContext } from '../../context/context';
import { Button } from '@chakra-ui/react';

export default function BarItem({text, value}) {

	const {category, changeCategory} = useContext(CustomContext)

	return <>
	<Button onClick={()=> changeCategory(value)} className={category === value ? 'active' : ''}  width={"180"} mt={"6"} mr={"10"} ml={"6"}>{text}</Button>
	</>;
};