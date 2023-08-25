import Shop from '../components/Shop/Shop.js'
import Instagram from '../components/Instagram/Instagram.js';
import {Box, Heading, Image, Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { CustomContext } from '../context/context.js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import Link from 'next/link'

export default function Basket() {
  const { basket, plusBasket, minusBasket, delBasket } = useContext(CustomContext);

  return <>
  <Box mt={30} ml={"20"}>
    <Box>
    <Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink href="main">Главная</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="cart">Корзина</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
      <Link href="/catalog">Перейти к выбору товара</Link>
			<Heading mt={30} fontSize={36} color="rgba(3, 69, 59)" mb={30}>Корзина</Heading>
    </Box>
    <Table backgroundColor="rgba(202,218,186)" color="rgba(51, 51, 51)" width={"90%"} >
				<Tbody>
					{basket.map((item) => (
						<Tr key={item.id}>
							<Td>
								<Image
									src={item.image}
									alt={item.title}
									width={126}
									height={130}
								/>
							</Td>
							<Td>{item.title}</Td>
							<Td>{item.price*item.count}₽</Td>
							<Td>
								<Button m={2} onClick={() => minusBasket(item.id)}>-</Button>
								{item.count}
								<Button m={2} onClick={() => plusBasket(item.id)}>+</Button>
							</Td>
							<Td>
								<Button onClick={() => delBasket(item.id)}>x</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
      <Text  mt={"6"} color="rgba(3, 69, 59)">К оплате {basket.reduce((acc,rec)=>
                        acc + rec.price * rec.count
                    ,0)} ₽</Text>
      </Box>
	</>
};
