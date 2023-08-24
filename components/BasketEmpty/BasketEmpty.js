import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react'


export default function BasketEmpty({show, setShow}) {

	const exit = (event) => {
		if (event.target.classList.contains("basketEmpty")) {
			setShow(false)
		}
	}

	return <>
		<Box onclick={exit} style={{display:show ? 'flex' : 'none'}} position={"fixed"} top={"0"} left={"0"} width={"100%"} height={"100vh"} display={["flex", "none"]} justifyContent={"center"} textAlign={"center"} className='basketEmpty'>
			<Box maxWidth={"450px"} width={"100%"} padding={"53px"} textAlign={"center"}>
				<Heading fontSize={"30px"} margin={"16px"}>Ваша корзина пустая</Heading>
				<Button onClick={() => { window.location.href = "/catalog" }}>Посмотреть наши букеты</Button>
				<Box onClick={() => setShow(false)} className='basketExit'>
				<Button>Закрыть</Button>
				</Box >
			</Box>
		</Box>
	</>
}