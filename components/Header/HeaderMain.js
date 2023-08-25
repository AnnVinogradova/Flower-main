import { Box, Text, Heading, Container } from "@chakra-ui/react";
import HeaderFooter from '../Header/HeaderFooter'
export default function HeaderMain() {
return <>
<HeaderFooter/>
<Box bgImage="url('/img/Header/banner.png')" height={700}
bgSize="cover"
bgPosition="center"
width="100vw">
<Container position="relative" z-index="1" paddingTop={200} marginLeft={310}  fontFamily={'Montserrat:500'} color={'#03453B'}>
<Heading>Дарим красоту и хорошее настроение вашему дому</Heading>
<Text>Специально для вас — быстрая доставка и отличные цены</Text>
</Container>
</Box>
</>;
}