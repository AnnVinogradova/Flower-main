import { Box, Flex, Image, Text, ListItem, List, chakra, Input } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { CustomContext } from '../../context/context';
import Link from 'next/link';


export default function HeaderFooter() {

	const { basket, search, setSearch } = useContext(CustomContext)
	
	const handleInputChange = (event) => {
		setSearch(event.target.value);
	  };

	return (
		<Box backgroundColor={'#03453B'} height={100} display={"flex"} pl={"310"}>
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
				<Flex direction="row" alignItems="center" marginTop={6} ml={"32"} pt={"4"} gap={"4"}>
				<Box display={"flex"} ml={"10"} pb={"20"}>
						<Input type="text"  value={search} onChange={handleInputChange} placeholder="Найти букет..." width={398} height={42} marginLeft={50}/>
					</Box>
					<Box>
						<Flex gap={2} ml={6} pb={"16"}>
							<Link href="/login">
								<chakra.svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
								>
									<path
										d="M22 24V21.8889C22 20.7691 21.5522 19.6951 20.7552 18.9033C19.9582 18.1115 18.8772 17.6667 17.75 17.6667H9.25C8.12283 17.6667 7.04183 18.1115 6.2448 18.9033C5.44777 19.6951 5 20.7691 5 21.8889V24M17.75 9.22222C17.75 11.5541 15.8472 13.4444 13.5 13.4444C11.1528 13.4444 9.25 11.5541 9.25 9.22222C9.25 6.89035 11.1528 5 13.5 5C15.8472 5 17.75 6.89035 17.75 9.22222Z"
										stroke="#EBEBEB"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<circle cx="18.5" cy="5.5" r="4.5" fill="#AE8646" />
								</chakra.svg>
							</Link>
							<Link href="/basket" position="relative">
								<chakra.svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
								>
									<path
										d="M5.71436 10.0572L8.95245 5.71436H21.9048L25.1429 10.0572M5.71436 10.0572V25.2572C5.71436 25.8331 5.94179 26.3854 6.34663 26.7926C6.75147 27.1999 7.30055 27.4286 7.87309 27.4286H22.9842C23.5567 27.4286 24.1058 27.1999 24.5106 26.7926C24.9155 26.3854 25.1429 25.8331 25.1429 25.2572V10.0572M5.71436 10.0572H25.1429M19.7461 14.4001C19.7461 15.5519 19.2912 16.6565 18.4815 17.4709C17.6719 18.2854 16.5737 18.7429 15.4286 18.7429C14.2836 18.7429 13.1854 18.2854 12.3757 17.4709C11.5661 16.6565 11.1112 15.5519 11.1112 14.4001"
										stroke="#EBEBEB"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</chakra.svg>
								<Text display="flex" justifyContent="center" alignItems="center" color="rgba{'60, 60, 60'}" position="relative" top={-2} backgroundColor="rgba(202,218,186)" borderRadius={50} width={6} height={6} left={4}>{basket.length}</Text>
							</Link>
						</Flex>
					</Box>
					
				</Flex>
			</Flex>
		</Box>
	);
}

