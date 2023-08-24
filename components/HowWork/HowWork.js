import { Box, Heading, Text, Image, Grid } from "@chakra-ui/react";

export default function HowWork() {
  return (
    <Box backgroundColor="rgba(3, 69, 59)" color="rgba(255,255,255)" display="flex" flexDirection="column" mt={179} height={411}>
		  <Heading fontSize="36" textAlign="center" mt={50}>
        Как это работает
      </Heading>
	<Grid templateColumns="repeat(4, 1fr)" mt={30} gap={20} pl={310} pr={310}>
<Box>
	<Image src="/img/Main/HowWork/1.png" alt="Иконка"/>
	<Text fontSize="16" fontWeight="bold" mt={15}>Выбери букет или закажи обратный звонок</Text>
	</Box>
	<Box>
	<Image src="/img/Main/HowWork/2.png" alt="Иконка"/>
	<Text fontSize="16" fontWeight="bold" mt={15}>Наш менеджер свяжется с вами для уточнения заказа, стоимости и места доставки</Text>
	</Box>
	<Box>
	<Image src="/img/Main/HowWork/3.png" alt="Иконка"/>
	<Text fontSize="16" fontWeight="bold" mt={15}>Мы доставим букет в нужное место и в назначенное время/дату</Text>
	</Box>
	<Box>
	<Image src="/img/Main/HowWork/4.png" alt="Иконка"/>
	<Text fontSize="16" fontWeight="bold" mt={15}>Будем рады отзыву от вас о нашей работе</Text>
	</Box>
	  </Grid>
    </Box>
  );
}