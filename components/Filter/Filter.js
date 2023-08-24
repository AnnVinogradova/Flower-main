import React from 'react';
import { Box } from '@chakra-ui/react'
import SelectPrice from '../SelectPrice/SelectPrice.js';

export default function Filter() {
	return <>
		<Box width={"100%"} mb={4} display={"flex"}justifyContent={"flex-end"}>
			<Box>
			<SelectPrice/>
			</Box>
			<Box>
			</Box>
		</Box>
	</>
}