import { Heading, OrderedList, Box, Text, ListItem, List, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from "@chakra-ui/react";

export default function Wholesale() {
	return <>
		<Box ml={310} mr={310}>
			<Breadcrumb mt={30}>
				<BreadcrumbItem>
					<BreadcrumbLink href="main">Главная</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="organizations">Организациям</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Heading mt={30} fontSize={36} color="rgba(3, 69, 59)">Организациям</Heading>
			<Text mt={30} color="rgba(3, 69, 59)">Одним из основных направлений нашей деятельности, <br />является качественное флористическое сопровождение <br />корпоративных клиентов.</Text>
		</Box>
		<Box mt={30} ml={310} mr={310}>
			<Text fontSize="24">При заключении контракта наши партнеры получают:</Text>
			<Box display="flex" flexDirection="row-reverse">
				<Image src="/img/Organizations/1.png" alt="Цветы" width={530} height={892} mt={-32} />
				<Box display="flex" flexDirection="column" mr={130}>
					<OrderedList mt="10">
						<ListItem>Скидки;</ListItem>
						<ListItem>Возможность оплаты по безналичному расчету;</ListItem>
						<ListItem>Общение и работа с персональным менеджером;</ListItem>
						<ListItem>Приятные подарки и специальные сезонные предложения для постоянных клиентов;</ListItem>
						<ListItem>Услуги по цветочному оформлению офисов,квартир, ресторанов, а также корпоративных мероприятий;</ListItem>
						<ListItem>Разработка ведущими флористами индивидуальных букетов, композиций и оформлений в корпоративном стиле заказчика;</ListItem>
						<ListItem>Бесплатная доставка заказов по Москве.</ListItem>
					</OrderedList>
					<Box pt={100}>
						<Text>С нами постоянно работают и довольны качеством <br />сотрудничества более ста компаний Минска! А вы?</Text>
						<Text pt={10}>Более подробную информацию об условиях <br />сотрудничества Вы можете узнать у наших менеджеров.</Text>
					</Box>
				</Box>
			</Box>
			<Box>
				<List direction="row" alignItems="center" display={"flex"} mt={-20}>
					<Text color="rgba(3, 69, 59)" mr={30}>Телефон</Text><ListItem>
						<a href="tel:7-0297-177-888" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt="Иконка телефона" />
							<Text>8-0297-177-888</Text>
						</a>
					</ListItem>
					<ListItem>
						<a href="tel:7-0257-177-888" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt="Иконка телефона" />
							<Text>7-0257-177-888</Text>
						</a>
					</ListItem>
					<ListItem>
						<a href="tel:7-0447-833-777" style={{ display: "flex" }}>
							<Image src="/img/Header/phone.png" alt="Иконка телефона" />
							<Text>7-0447-833-777</Text>
						</a>
					</ListItem>
				</List>
				<Text color="rgba(3, 69, 59)">Skype<Link href="skype:gvozdikaby?chat" marginLeft={16}>
					gvozdikaby
				</Link></Text>
			</Box>
		</Box>
	</>
}