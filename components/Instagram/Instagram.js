import { Box, Text, Image, Flex, Link } from "@chakra-ui/react";

export default function Instagram() {
	return <>
		<Box display="flex" position="relative" marginTop={70} justifyContent="center">
			<Box justifyContent={"space-between"}>
				<Link href="https://www.instagram.com">
					<Flex>
						<Text position="absolute" top={-10} left={320} fontSize={36}>
							Мы в Instagram
						</Text>
						<Text position="absolute" bottom={360} right={320} fontSize={24}>
							@gvozdika_by
						</Text>
					</Flex>
				</Link>
			</Box>
			<Box mt={50}>
				<Flex mt={4} display="flex" >
					<Image src="/img/Main/Instagram/Rectangle 1258.jpg" mr={4} alt="Букет цветов"/>
					<Image src="/img/Main/Instagram/Rectangle 1259.jpg" mr={4} alt="Букет цветов"/>
					<Image src="/img/Main/Instagram/Rectangle 1260.jpg" mr={4} alt="Букет цветов"/>
					<Image src="/img/Main/Instagram/Rectangle 1261.jpg" alt="Букет цветов"/>
				</Flex>
			</Box>
		</Box>
	</>;
}