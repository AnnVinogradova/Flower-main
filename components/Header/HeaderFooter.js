import { Box, Flex, Image, Icon, Link, Text, ListItem, List, Button } from '@chakra-ui/react';
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react';

export default function NavbarFooter() {

	return (
		<Box backgroundColor={'#03453B'} height={100} pl={"300"}>
			<Flex direction="row" alignItems="flex-start" spacing={2}>
				<List direction="row" alignItems="center" display={"flex"} marginLeft={25} marginTop={10} color={'#EBEBEB'}>
					<ListItem>
						<Link href="tel:7-0297-177-888" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt='Иконка телефона' />
							<Text>8-0297-177-888</Text>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="tel:7-0257-177-888" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt='Иконка телефона' />
							<Text>7-0257-177-888</Text>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="tel:7-0447-833-777" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt='Иконка телефона' />
							<Text>7-0447-833-777</Text>
						</Link>
					</ListItem>
				</List>
				<Flex direction="row" alignItems="center" marginTop={6} ml={"20"} pt={"4"} gap={"4"}>
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
                    <Box ml={"72"}>
                    <Link href="/organizations" legacyBehavior>
					<Button backgroundColor={"#b9956f"} marginTop="-10px">Оптовым клиентам</Button>
				</Link>
                </Box>
				</Flex>
			</Flex>
		</Box>
	);
}

