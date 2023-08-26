import React from 'react';
import { Flex, Box, Image, Text, UnorderedList, ListItem, List, HStack, Icon } from '@chakra-ui/react'
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
	return <>
		<Box backgroundColor="rgba(3, 69, 59)" color="rgba(235, 235, 235)" minHeight={592} pl={310} pr={310} mt={100}>
			<Flex>
				<Box pt={20}>
					<Box>
						<Link href="/">
							<Image src="/img/Header/logo-cveti.png" alt="Логотип" />
						</Link>
						<List mt={35} whiteSpace="nowrap">
							<ListItem>
								<Link href="tel:7-0297-177-888" style={{ display: "flex" }}>
									<Image src="/img/Header/phone.png" alt="Иконка телефона" />
									<Text>8-0297-177-888</Text>
								</Link>
							</ListItem>
							<ListItem>
								<Link href="tel:7-0257-177-888" style={{ display: "flex" }}>
									<Image src="/img/Header/phone.png" alt="Иконка телефона" />
									<Text>7-0257-177-888</Text>
								</Link>
							</ListItem>
							<ListItem>
								<Link href="tel:7-0447-833-777" style={{ display: "flex" }}>
									<Image src="/img/Header/phone.png" alt="Иконка телефона" />
									<Text>7-0447-833-777</Text>
								</Link>
							</ListItem>
						</List>
					</Box>
					<Box>
						<HStack spacing={4} mt={176}>
							<Link href="https://www.instagram.com">
								<Icon as={FaInstagram} boxSize={6} />
							</Link>
							<Link href="https://www.vkontakte.com">
								<Icon as={FaVk} boxSize={6} />
							</Link>
							<Link href="https://www.telegram.org">
								<Icon as={FaTelegram} boxSize={6} />
							</Link>
							<Link href="https://www.whatsapp.com">
								<Icon as={FaWhatsapp} boxSize={6} />
							</Link>
						</HStack>
					</Box>
				</Box>
				<Box pt={198} pl={134} whiteSpace="nowrap">
					<UnorderedList listStyleType="none">
						<ListItem>
							<Link href='/about'>
								О магазине
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/catalog'>
								Каталог
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/delivery'>
								Доставка
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/payment'>
								Оплата
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/return'>
								Возврат
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/contacts'>
								Контакты
							</Link>
						</ListItem>
					</UnorderedList>
				</Box>

				<Box pt={200} pb={39} whiteSpace="nowrap" pl={186}>
					<Text mb={2}>г. Москва, ул. Ленина, д.46, пом.3</Text>
					<Link href="mailto:zakaz@gvozdika.by" mb={2}>zakaz@gvozdika.by</Link>
					<Text mb={2}>Пн-Пт с 8.00-22.00</Text>
					<Text>Сб-Вс с 10.00 -22.00</Text>
				</Box>
			</Flex >
			<Box pb={16} whiteSpace="nowrap">
				<Text>ООО &quot;Трансстиль-Групп&quot; УНП: 190929286. <br></br>Юридический адрес: 220030, г. Москва, ул. Ленина, д.46, пом.3</Text>
				<Text>Дата регистрации интернет-магазина в Торговом реестре: 07 апреля 2015г. №156730</Text>
				<Text>Свидетельство о гос. регистрации №190929286 от 18.12.2007</Text>
			</Box>
		</Box>
	</>
}
