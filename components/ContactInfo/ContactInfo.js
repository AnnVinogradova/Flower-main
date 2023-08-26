import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Text, List, ListItem, Image, Link, FormControl, FormLabel, Input, Textarea, Checkbox, Button, Heading } from '@chakra-ui/react'

export default function ContactInfo() {
	return <>
		<Box mt={30} ml={310} mr={310}>
			<Breadcrumb>
				<BreadcrumbItem>
					<Link href="/main">
						<BreadcrumbLink>Главная</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link href="/contacts">
						<BreadcrumbLink>Контакты</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box>
				<Heading mt={30} fontSize={36} color="rgba(3, 69, 59)">Контакты</Heading>
			</Box>
			<Box>
				<Text mt={50} color="rgba(3, 69, 59)" fontSize={24}>Магазин</Text>
				<Box display="flex" ml={319} mt={12}>
					<Text>Телефон</Text>
					<List display="flex" ml={30}>
						<ListItem>
							<Link href="tel:7-0297-177-888" display="flex">
								<Image src="/img/Header/phone.png" alt="Иконка телефона" />
								<Text>8-0297-177-888</Text>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="tel:7-0257-177-888" display="flex">
								<Image src="/img/Header/phone.png" alt="Иконка телефона" />
								<Text>7-0257-177-888</Text>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="tel:7-0257-177-888" display="flex">
								<Image src="/img/Header/phone.png" alt="Иконка телефона" />
								<Text>7-0257-177-888</Text>
							</Link>
						</ListItem>
					</List>
				</Box>
			</Box>
			<Box display="flex">
				<Text ml={320}>Skype</Text>
				<Link href="skype:username?call" legacyBehavior ml={67}>
					<Text>gvozdikaby</Text>
				</Link>
			</Box>
			<Box mt={30}>
				<Text>Вы можете заказать любой понравившийся букет по телефонам или через форму заказа на сайте, а также приобрести цветы в нашем розничном магазине по адресу:
					г. Москва, ул. Ленина д. 46 пом.3</Text>
			</Box>
			<Box display="flex" mt={104}>
				<Text fontSize="24" color="rgba(3, 69, 59)">Реквизиты</Text>
				<Box ml={118}>
					<Text>ООО &quot;Трансстиль-Групп&quot;</Text>
					<Text>УНП: 190929286</Text>
					<Text>Юридический адрес: 220030, г. Москва, ул. Ленина, д.46, пом.3</Text>
					<Text>Дата регистрации интернет-магазина в Торговом реестре: 07 апреля 2015г. №156730</Text>
					<Text>Свидетельство о гос. регистрации №190929286 от 18.12.2007</Text>
				</Box>
			</Box>
		</Box>
	</>
}
